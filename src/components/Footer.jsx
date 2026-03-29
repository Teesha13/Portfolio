export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">© {year} Teesha Panchal · Portfolio</p>
      </div>
    </footer>
  );
}
