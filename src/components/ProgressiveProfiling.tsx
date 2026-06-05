import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface ProgressiveProfilingProps {
  triggerAfterSeconds?: number;
}

export const ProgressiveProfiling = ({ triggerAfterSeconds = 45 }: ProgressiveProfilingProps) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  const [stage1Data, setStage1Data] = useState({ email: '', name: '' });
  const [stage2Data, setStage2Data] = useState({ companySize: '', industry: '' });
  const [stage3Data, setStage3Data] = useState({ phone: '', message: '' });
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    // Check if modal was already shown in this session (not persistent across browser closes)
    const dismissed = sessionStorage.getItem('bionicProfilingDismissed');
    const isContactPage = location.pathname === '/contact';
    
    if (dismissed || isContactPage) {
      setIsDismissed(true);
      return;
    }

    // Only show on homepage after the specified delay
    // Don't show on other pages to avoid interrupting user journeys
    const isHomePage = location.pathname === '/';
    
    if (!isHomePage) {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, triggerAfterSeconds * 1000);

    return () => clearTimeout(timer);
  }, [triggerAfterSeconds, location.pathname]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('bionicProfilingDismissed', 'true');
  };

  const handleStage1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { data, error: submitError } = await supabase.functions.invoke('capture-lead', {
        body: {
          name: stage1Data.name,
          email: stage1Data.email,
          stage: 'stage1',
          magnet_type: 'progressive_profiling',
        },
      });

      if (submitError || data?.error) {
        throw new Error(submitError?.message || data?.error?.message || 'Failed to submit');
      }

      setIsSubmitting(false);
      setCurrentStage(1);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleStage2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { data, error: submitError } = await supabase.functions.invoke('update-lead', {
        body: {
          email: stage1Data.email,
          companySize: stage2Data.companySize,
          industry: stage2Data.industry,
          stage: 'stage2',
        },
      });

      if (submitError || data?.error) {
        throw new Error(submitError?.message || data?.error?.message || 'Failed to update');
      }

      setIsSubmitting(false);
      setCurrentStage(2);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleStage3Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!consent) {
        throw new Error('Please agree to the Privacy Policy to complete your request.');
      }

      const { data, error: submitError } = await supabase.functions.invoke('update-lead', {
        body: {
          email: stage1Data.email,
          phone: stage3Data.phone,
          message: stage3Data.message,
          stage: 'stage3',
        },
      });

      if (submitError || data?.error) {
        throw new Error(submitError?.message || data?.error?.message || 'Failed to complete');
      }

      setIsSubmitting(false);
      setCurrentStage(3);
      
      setTimeout(() => {
        handleDismiss();
      }, 3000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  if (isDismissed || !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-bg-secondary border border-white/10 rounded-xlarge p-8 md:p-10 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-text-muted" />
              </button>

              {/* Progress Indicator */}
              <div className="flex items-center justify-center space-x-2 mb-6">
                {[0, 1, 2].map((stage) => (
                  <div
                    key={stage}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      stage <= currentStage
                        ? 'bg-accent-primary w-12'
                        : 'bg-white/10 w-8'
                    }`}
                  />
                ))}
              </div>

              {error && (
                <div className="bg-error/10 border border-error/20 rounded-medium p-4 flex items-start space-x-3 mb-6">
                  <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <p className="text-body text-error">{error}</p>
                </div>
              )}

              {/* Stage 1: Email Capture */}
              {currentStage === 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-h3 font-bold mb-2">Request an Executive Briefing</h3>
                  <p className="text-body text-text-muted mb-6">
                    Enterprise AI transformation tailored to your business
                  </p>

                  <form onSubmit={handleStage1Submit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={stage1Data.name}
                      onChange={(e) => setStage1Data({ ...stage1Data, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Work Email"
                      value={stage1Data.email}
                      onChange={(e) => setStage1Data({ ...stage1Data, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-accent-primary text-text-primary font-semibold rounded-medium hover:bg-accent-secondary transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-text-primary border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Continue</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Stage 2: Company Info */}
              {currentStage === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-h3 font-bold mb-2">Tell Us About Your Company</h3>
                  <p className="text-body text-text-muted mb-6">
                    This helps us personalize your assessment
                  </p>

                  <form onSubmit={handleStage2Submit} className="space-y-4">
                    <select
                      value={stage2Data.companySize}
                      onChange={(e) => setStage2Data({ ...stage2Data, companySize: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                    >
                      <option value="">Company Size</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>

                    <select
                      value={stage2Data.industry}
                      onChange={(e) => setStage2Data({ ...stage2Data, industry: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                    >
                      <option value="">Industry</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance & Banking</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Retail">Retail & E-Commerce</option>
                      <option value="Technology">Technology</option>
                      <option value="Other">Other</option>
                    </select>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-accent-primary text-text-primary font-semibold rounded-medium hover:bg-accent-secondary transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-text-primary border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Continue</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Stage 3: Full Contact */}
              {currentStage === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-h3 font-bold mb-2">Schedule Your Consultation</h3>
                  <p className="text-body text-text-muted mb-6">
                    Final step to get your personalized assessment
                  </p>

                  <form onSubmit={handleStage3Submit} className="space-y-4">
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={stage3Data.phone}
                      onChange={(e) => setStage3Data({ ...stage3Data, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                    />

                    <textarea
                      placeholder="Tell us about your AI goals (Optional)"
                      value={stage3Data.message}
                      onChange={(e) => setStage3Data({ ...stage3Data, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all resize-none"
                    />

                    {/* Privacy Consent Checkbox */}
                    <div className="flex items-start space-x-3 py-2">
                      <input
                        type="checkbox"
                        id="popup-consent"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-white/20 bg-bg-primary text-accent-primary focus:ring-accent-primary/30 cursor-pointer"
                      />
                      <label htmlFor="popup-consent" className="text-tiny text-text-muted cursor-pointer">
                        I agree to the Privacy Policy and consent to Bionic Solutions processing my information to respond to my inquiry.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-accent-primary text-text-primary font-semibold rounded-medium hover:bg-accent-secondary transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-text-primary border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Complete Assessment</span>
                          <CheckCircle className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Stage 4: Success */}
              {currentStage === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-h3 font-bold mb-2">Success!</h3>
                  <p className="text-body text-text-muted">
                    We'll send your personalized assessment to your email shortly.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
