import "./styles.css";
import heroImage from "./ApnaHeroNew.png";

function AuthLayout({ children, title, subtitle }) {
  return (
    <div>

      {/* HEADER */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <span className="icon">💼</span>
            <h1>JobPortal</h1>
          </div>
          <div className="auth-buttons">
            <button className="btn-outline" onClick={() => window.location.href="/"}>
              Login
            </button>
            <button className="btn-primary" onClick={() => window.location.href="/register"}>
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-content">

          {/* LEFT SIDE (FORM) */}
          <div className="hero-text">
            <h2 className="hero-title">{title}</h2>
            <p className="hero-subtitle">{subtitle}</p>

            {children}
          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div className="hero-image">
            <img src={heroImage} alt="job" />
          </div>

        </div>
      </section>

    </div>
  );
}

export default AuthLayout;