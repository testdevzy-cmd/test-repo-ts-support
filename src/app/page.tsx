export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <div className="terminal-header">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
        </div>
        <h1 className="title">
          <span className="accent">$</span> test-repo-ts-support
        </h1>
        <p className="description">
          A Next.js TypeScript fullstack application for testing PR review workflows.
          Built as a sandbox for developing and testing code review automation.
        </p>
        <div className="links">
          <a href="/api/health" className="link" target="_blank" rel="noopener noreferrer">
            <span className="link-icon">⚡</span>
            Health Check
            <span className="link-arrow">→</span>
          </a>
        </div>
        <div className="status">
          <span className="status-indicator"></span>
          System operational
        </div>
      </div>
      <footer className="footer">
        <p>Ready for development • Next.js 14 • TypeScript</p>
      </footer>
    </main>
  );
}

