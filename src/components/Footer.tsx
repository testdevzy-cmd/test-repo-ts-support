export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Ready for development • Next.js 14 • TypeScript
        <span className="footer-year"> • {currentYear}</span>
      </p>
    </footer>
  );
}
