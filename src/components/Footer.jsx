export default function Footer() {
    return (
        <footer className="footer">
            <div className="container center">
                <p>&copy; {new Date().getFullYear()} Smart Integral Corporation. Todos los derechos reservados.</p>
            </div>
            <style>{`
        .footer {
          padding: 30px 0;
          background: #000;
          color: var(--text-muted);
          font-size: 0.9rem;
          text-align: center;
        }
      `}</style>
        </footer>
    );
}
