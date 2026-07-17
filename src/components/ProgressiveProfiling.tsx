import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const STORAGE_KEY = 'bionicExitModalDismissed';
const COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function canShow(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return true;
    const dismissedAt = parseInt(raw, 10);
    if (isNaN(dismissedAt)) return true;
    return Date.now() - dismissedAt > COOLDOWN_MS;
  } catch {
    return true; // localStorage unavailable — allow
  }
}

function markDismissed(): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch { /* ignore */ }
}

export const ProgressiveProfiling = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const location = useLocation();

  // Reset dismissed state when localStorage cooldown expires
  useEffect(() => {
    if (canShow()) setIsDismissed(false);
  }, [location.pathname]);

  // Exit-intent: mouseleave at top of viewport
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && canShow() && !isDismissed && !isVisible) {
      const isHomePage = location.pathname === '/';
      if (isHomePage) setIsVisible(true);
    }
  }, [isDismissed, isVisible, location.pathname]);

  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [handleMouseLeave]);

  useEffect(() => {
    if (!isVisible) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleDismiss();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    markDismissed();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { supabase } = await import('../lib/supabase');
      const { data, error: submitError } = await supabase.functions.invoke('capture-lead', {
        body: {
          name: '',
          email,
          stage: 'exit_intent',
          magnet_type: 'exit_intent',
        },
      });

      if (submitError || data?.error) {
        throw new Error(submitError?.message || data?.error?.message || 'Failed');
      }

      setIsSubmitting(false);
      setSubmitted(true);
      markDismissed();
      
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } catch (err) {
      setIsSubmitting(false);
      console.error('capture-lead failed:', err);
      setError('Something went wrong. Please try again, or email us directly.');
    }
  };

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
              role="dialog"
              aria-modal="true"
              aria-labelledby="exit-modal-title"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-bg-secondary border border-white/10 rounded-xlarge p-8 md:p-10 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleDismiss}
                aria-label="Close"
                className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-text-muted" />
              </button>

              {error && (
                <div role="alert" className="bg-error/10 border border-error/20 rounded-medium p-4 flex items-start space-x-3 mb-6">
                  <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <p className="text-body text-error">{error}</p>
                </div>
              )}

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-h3 font-bold mb-2">Thank You</h3>
                  <p className="text-body text-text-muted">
                    We'll be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h3 id="exit-modal-title" className="text-h3 font-bold mb-2">Before You Go</h3>
                  <p className="text-body text-text-muted mb-6">
                    Get a personalized strategy session on enterprise AI transformation.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      aria-label="Work Email"
                      placeholder="Work Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                          <span>Get Your Briefing</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};