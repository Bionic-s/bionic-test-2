import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, Shield, BarChart3, RefreshCw, Target, Layers, Brain } from 'lucide-react';
import { trackValueSystemView } from '../lib/analytics';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const ACCENT = '#059669';
const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-tiny font-semibold tracking-wider uppercase mb-4" style={{ color: ACCENT }}>{children}</p>
);

export default function EnterpriseValueSystemPage() {

  useEffect(() => { trackValueSystemView(); }, []);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12 max-w-6xl">

        {/* ═══ 1. HERO ═══ */}
        <motion.section className="mb-28" {...fadeIn} transition={{ duration: 0.5 }}>
          <SectionLabel>Enterprise Value System</SectionLabel>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-7">
            Enterprise value doesn't come<br />
            <span style={{ color: ACCENT }}>from technology. It comes from capability.</span>
          </h1>
          <p className="text-text-muted text-lg max-w-[720px] leading-relaxed">
            Four value horizons. One compounding progression. From cost optimization to market leadership —
            this is how we measure, realize, and compound enterprise value across every engagement.
            Not technology deployment. Enterprise capability creation.
          </p>
        </motion.section>

        {/* ═══ 2. THE CFO QUESTION + THE CEO QUESTION ═══ */}
        <motion.section ref={ref1} {...fadeIn} animate={inView1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>The Questions That Matter</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CFO */}
            <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#05966915', color: ACCENT }}>
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">The CFO Question</h2>
                  <p className="text-tiny text-text-muted">Capital allocation, measurement, compounding</p>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                The CFO asks three questions about every transformation investment.
                Our answer is not a business case — it's an operating system for value realization.
              </p>
              <div className="space-y-3">
                {[
                  { q: 'Where is the value?', a: 'Four horizons — Growth, Efficiency, Resilience, Capability. Every engagement maps to at least one.' },
                  { q: 'How is it measured?', a: 'Executive KPI dashboard across all four horizons. Baseline, target, quarterly measurement — not annual review.' },
                  { q: 'How does it compound?', a: 'Better data → smarter decisions → faster operations → stronger trust → enterprise value. Each cycle strengthens every node.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                    <div>
                      <p className="text-sm font-medium text-text-primary">{item.q}</p>
                      <p className="text-tiny text-text-muted">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CEO */}
            <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#05966915', color: ACCENT }}>
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">The CEO Question</h2>
                  <p className="text-tiny text-text-muted">Competitive advantage, speed, new capabilities</p>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                The CEO is not asking about technology. The CEO is asking about competitive position.
                Our answer is not a project plan — it's an enterprise capability platform.
              </p>
              <div className="space-y-3">
                {[
                  { q: 'How does transformation create competitive advantage?', a: 'By building capabilities competitors can\'t replicate in months — AI-embedded operations, sovereign data platforms, Zero Trust trust posture.' },
                  { q: 'How do we move faster than competitors?', a: 'Agentic workforce reduces cycle times from weeks to hours. AI-powered decisions eliminate analysis paralysis. Platform engineering accelerates delivery.' },
                  { q: 'How do we build new capabilities?', a: 'Capability creation, not project delivery. Every engagement leaves the enterprise stronger — with platforms, data, and skills that compound.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                    <div>
                      <p className="text-sm font-medium text-text-primary">{item.q}</p>
                      <p className="text-tiny text-text-muted">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ 3. FOUR VALUE HORIZONS ═══ */}
        <motion.section ref={ref2} {...fadeIn} animate={inView2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Four Value Horizons</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Value doesn't arrive in one quarter. It compounds across four horizons.</h2>
          <p className="text-text-muted text-lg mb-10 max-w-[720px] leading-relaxed">
            Each horizon is powered by one or more of the I-A-T pillars — Intelligence, Automation, Trust.
            Together they form the value creation engine.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                horizon: 'Growth',
                timeline: '12-36 months',
                desc: 'Revenue, market share, customer value.',
                iat: 'Intelligence + Automation',
                color: '#7C3AED',
                items: ['AI-powered cross-sell', 'New digital channels', 'Faster time-to-market', 'Customer experience transformation'],
              },
              {
                horizon: 'Efficiency',
                timeline: '0-12 months',
                desc: 'Cost, throughput, productivity.',
                iat: 'Automation',
                color: '#F97316',
                items: ['Process automation', 'FTE reallocation', 'Infrastructure rationalization', 'Ticket deflection'],
              },
              {
                horizon: 'Resilience',
                timeline: '6-18 months',
                desc: 'Risk, compliance, continuity.',
                iat: 'Trust',
                color: '#2563EB',
                items: ['Zero Trust architecture', 'Regulatory compliance', 'Ransomware protection', 'Cyber recovery capability'],
              },
              {
                horizon: 'Capability',
                timeline: '24-60 months',
                desc: 'Sovereign platforms, national infrastructure.',
                iat: 'Intelligence + Automation + Trust',
                color: '#0D9488',
                items: ['Sovereign AI platforms', 'National data fabrics', 'Digital government services', 'Workforce transformation'],
              },
            ].map((h, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: h.color }} />
                  <h3 className="font-bold text-base">{h.horizon}</h3>
                </div>
                <p className="text-tiny text-text-muted mb-1">{h.timeline}</p>
                <p className="text-sm text-text-primary font-medium mb-3">{h.desc}</p>
                <p className="text-tiny font-semibold mb-2" style={{ color: ACCENT }}>Powered by: {h.iat}</p>
                <ul className="space-y-1.5">
                  {h.items.map((item, j) => (
                    <li key={j} className="text-tiny text-text-muted flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: h.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 4. I-A-T VALUE LOGIC ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>I-A-T Value Logic</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Three pillars. Three value mechanisms. One compounding system.</h2>
          <p className="text-text-muted text-lg mb-10 max-w-[720px] leading-relaxed">
            Bionic's three transformation pillars create value through distinct mechanisms — and compound when applied together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                pillar: 'Intelligence',
                mechanism: 'Decision speed, AI lift, insight quality',
                outcome: 'Faster, better decisions at every level',
                example: 'AI credit scoring reduces decision time from days to minutes — and improves accuracy.',
                color: '#00BFFF',
                icon: Brain,
              },
              {
                pillar: 'Automation',
                mechanism: 'Throughput, cost-to-serve, time-to-market',
                outcome: 'More output with less cost and fewer errors',
                example: 'Agentic workforce automates repetitive tasks — FTE redeployed to high-value work.',
                color: '#7C3AED',
                icon: Zap,
              },
              {
                pillar: 'Trust',
                mechanism: 'Resilience, sovereignty, audit posture',
                outcome: 'Confidence that enables growth',
                example: 'Zero Trust architecture enables secure digital expansion — compliance becomes enablement.',
                color: '#10B981',
                icon: Shield,
              },
            ].map((p, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${p.color}15`, color: p.color }}>
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base" style={{ color: p.color }}>{p.pillar}</h3>
                </div>
                <p className="text-sm font-medium text-text-primary mb-1">{p.mechanism}</p>
                <p className="text-tiny text-text-muted mb-3">{p.outcome}</p>
                <div className="border-t border-white/5 pt-3">
                  <p className="text-tiny text-text-muted italic">{p.example}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Compounding Effect */}
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 md:p-8">
            <h3 className="font-bold text-lg mb-3">The Compounding Effect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { issue: 'Intelligence without Automation', result: 'Insights that don\'t execute.' },
                { issue: 'Automation without Intelligence', result: 'Efficiency without direction.' },
                { issue: 'Trust without both', result: 'Security that blocks progress.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                  <div>
                    <p className="text-sm font-medium text-text-primary">{item.issue}</p>
                    <p className="text-tiny text-text-muted">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm leading-relaxed mt-5 pt-5 border-t border-white/5">
              Applied together: Intelligence directs Automation, Automation executes intelligence, Trust enables both to operate at scale.
              <strong className="text-text-primary"> The three pillars compound.</strong>
            </p>
          </div>
        </motion.section>

        {/* ═══ 5. VALUE REALIZATION LIFECYCLE ═══ */}
        <motion.section ref={ref3} {...fadeIn} animate={inView3 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Value Realization Lifecycle</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Value is realized across the full transformation lifecycle — not at go-live.</h2>
          <p className="text-text-muted text-lg mb-10 max-w-[720px] leading-relaxed">
            Most firms stop at Build — and value erodes. Bionic is accountable through Operate and Evolve — which is where value compounds.
          </p>
          <div className="space-y-3">
            {[
              { phase: 'Engage', color: '#7C3AED', icon: Target, what: 'Discovery, readiness, business case', value: 'Clarity on what to transform, why, and what value to expect' },
              { phase: 'Design', color: '#06B6D4', icon: Layers, what: 'Architecture, roadmap, governance', value: 'Transformation plan with measurable targets and timelines' },
              { phase: 'Build', color: '#059669', icon: Zap, what: 'Deploy, integrate, adopt', value: 'Platforms operational, users onboarded, workflows live' },
              { phase: 'Operate', color: '#F97316', icon: RefreshCw, what: 'Run, monitor, optimize', value: 'Platforms performing, issues resolved, metrics tracked — continuous transformation enablement' },
              { phase: 'Evolve', color: '#DC2626', icon: TrendingUp, what: 'Innovate, expand, scale', value: 'New capabilities added, scope expanded, value compounded quarter over quarter' },
            ].map((phase, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${phase.color}15`, color: phase.color }}>
                  <phase.icon className="w-6 h-6" />
                </div>
                <div className="flex-shrink-0 w-24">
                  <p className="text-sm font-bold" style={{ color: phase.color }}>{phase.phase}</p>
                  <p className="text-tiny text-text-muted">{phase.what}</p>
                </div>
                <div className="hidden md:block w-6 text-center text-text-muted text-lg">→</div>
                <div className="flex-1">
                  <p className="text-sm text-text-primary">{phase.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 6. EXECUTIVE KPI DASHBOARD ═══ */}
        <motion.section ref={ref4} {...fadeIn} animate={inView4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-28">
          <SectionLabel>Executive KPI Dashboard</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Every engagement is governed by measurable KPIs across all four value horizons.</h2>
          <p className="text-text-muted text-lg mb-10 max-w-[720px] leading-relaxed">
            What follows is the measurement framework — the categories we track, measure, and govern across every engagement.
            No fabricated numbers. No exaggerated claims. The system that governs value realization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                horizon: 'Growth',
                color: '#7C3AED',
                icon: TrendingUp,
                kpis: ['Revenue Growth', 'Customer Expansion', 'New Digital Services', 'Market Responsiveness', 'Channel Performance'],
              },
              {
                horizon: 'Efficiency',
                color: '#F97316',
                icon: Zap,
                kpis: ['Time-to-Market', 'Cost-to-Serve', 'Process Throughput', 'Automation Coverage', 'Resource Utilization'],
              },
              {
                horizon: 'Resilience',
                color: '#2563EB',
                icon: Shield,
                kpis: ['Recovery Readiness', 'Security Posture', 'Compliance Maturity', 'Audit Confidence', 'Threat Response Time'],
              },
              {
                horizon: 'Capability',
                color: '#0D9488',
                icon: Brain,
                kpis: ['AI Adoption', 'Automation Coverage', 'Data Maturity', 'Platform Utilization', 'Workforce Capability'],
              },
            ].map((h, i) => (
              <div key={i} className="bg-bg-secondary border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${h.color}15`, color: h.color }}>
                    <h.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: h.color }}>{h.horizon}</h3>
                </div>
                <ul className="space-y-2">
                  {h.kpis.map((kpi, j) => (
                    <li key={j} className="flex items-center gap-2 text-tiny text-text-muted">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: h.color }} />
                      {kpi}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ═══ 7. COMPOUNDING ENTERPRISE VALUE ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28"
        >
          <SectionLabel>Compounding Enterprise Value</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            We are not a project company. We are not a product company.<br />
            <span style={{ color: ACCENT }}>We are a capability compounding company.</span>
          </h2>

          {/* The Cycle */}
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 mb-8">
            <div className="space-y-6">
              {[
                { step: 'Better Data', leads: 'Better Decisions', desc: 'Unified, governed, AI-ready data — every engagement improves data quality across the enterprise. Clean data feeds clean decisions.' },
                { step: 'Better Decisions', leads: 'Better Actions', desc: 'AI-powered insights at strategic, operational, and tactical levels. Decisions that are faster, more accurate, and more consistent.' },
                { step: 'Better Actions', leads: 'Better Outcomes', desc: 'Automated execution, reduced cycle times, fewer errors. Intelligence flows into operations — not stuck in dashboards.' },
                { step: 'Better Outcomes', leads: 'More Investment Capacity', desc: 'Revenue growth, margin expansion, risk reduction. Measurable results that fund the next cycle of transformation.' },
                { step: 'More Investment Capacity', leads: 'Stronger Enterprise Capabilities', desc: 'Reinvestment in platforms, data, AI, and people. The enterprise becomes stronger with every cycle — not just more efficient.' },
                { step: 'Stronger Enterprise Capabilities', leads: 'Better Data', desc: 'Stronger platforms collect richer data. Richer data enables deeper intelligence. Deeper intelligence drives faster decisions. The cycle accelerates.', restart: true },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ backgroundColor: ACCENT }}>
                      {item.restart ? '↻' : i + 1}
                    </div>
                    {i < 5 && <div className="w-0.5 h-10 mt-1" style={{ backgroundColor: '#05966930' }} />}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="font-bold text-base text-text-primary">{item.step}</h3>
                      <span className="text-sm" style={{ color: ACCENT }}>→ {item.leads}</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed mt-1.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-text-primary font-semibold text-lg mb-2">
              This is the core of Bionic.
            </p>
            <p className="text-text-muted leading-relaxed max-w-[640px] mx-auto">
              Every engagement builds enterprise capabilities that compound — not one-time deployments that degrade.
              Better data enables better decisions. Better decisions drive better actions. Better actions produce better outcomes.
              Better outcomes fund more investment. More investment builds stronger capabilities.
              Stronger capabilities collect better data.
              <strong className="text-text-primary"> The cycle accelerates.</strong>
            </p>
          </div>
        </motion.section>

        {/* ═══ 8. CTA + CROSS-NAVIGATION ═══ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-8 md:p-12 text-center mb-12">
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to see how the Enterprise Value System applies to your organization?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-[600px] mx-auto">
              Let's discuss how these four horizons and compounding value logic map to your specific enterprise context.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: ACCENT, boxShadow: '0 8px 24px #05966920' }}
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/architecture"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-text-primary font-medium rounded-xl transition-all duration-300 hover:border-[#059669]/30"
              >
                Explore Transformation Architecture
              </Link>
            </div>
          </div>

          {/* Cross-Navigation */}
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-5 text-text-muted">What would you like to explore next?</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: 'Architecture', path: '/architecture' },
                { label: 'Capabilities', path: '/capabilities/ai' },
                { label: 'Industries', path: '/industries/government' },
                { label: 'Blueprints', path: '/blueprints' },
              ].map((link) => (
                <Link key={link.label} to={link.path}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/10 rounded-full text-sm font-medium text-text-primary hover:border-[#059669]/30 transition-all hover:-translate-y-0.5">
                  {link.label} <ArrowRight className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
);
}
