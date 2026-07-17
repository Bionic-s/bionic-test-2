import React from 'react';

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
    console.error('Unhandled application error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            background: '#0B0D10',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: '24px',
            fontFamily: "'Inter', -apple-system, sans-serif",
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 700 }}>
            Something went wrong · حدث خطأ ما
          </h2>
          <p style={{ color: '#9AA4AF', maxWidth: '480px' }}>
            Please reload the page. If the problem continues, contact us at
            info@bionics.com.sa
            <br />
            يرجى إعادة تحميل الصفحة. إذا استمرت المشكلة، تواصل معنا.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 28px',
              background: '#00BFFF',
              color: '#0B0D10',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Reload · إعادة التحميل
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
