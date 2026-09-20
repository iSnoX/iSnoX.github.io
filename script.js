* {
  box-sizing: border-box;
}

:root {
  --bg: #536878;
  --bg-deep: #405363;
  --bg-soft: rgba(255, 255, 255, 0.06);
  --card: rgba(96, 121, 138, 0.9);
  --card-strong: rgba(59, 77, 90, 0.9);
  --border: rgba(255, 255, 255, 0.12);
  --text: #f3f7fa;
  --muted: #d4dfe7;
  --accent: rgb(255, 0, 76);
  --accent-strong: #d60043;
  --shadow: 0 20px 50px rgba(17, 24, 39, 0.25);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top, rgba(255, 0, 76, 0.18), transparent 35%),
    linear-gradient(135deg, var(--bg) 0%, var(--bg-deep) 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

.page-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 32px auto 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 24px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(12, 20, 27, 0.18);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
}

.brand {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav a:hover,
.nav a:focus-visible {
  color: var(--text);
}

main {
  padding-top: 32px;
}

.hero {
  display: grid;
  grid-template-columns: 1.7fr 0.9fr;
  gap: 28px;
  align-items: center;
  padding: 38px 0 10px;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.06em;
}

.hero h1 span {
  color: var(--accent);
}

.lead {
  max-width: 640px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
  margin: 22px 0 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}

.button-primary {
  background: var(--accent);
  color: white;
  box-shadow: 0 18px 30px rgba(255, 0, 76, 0.3);
}

.button-primary:hover,
.button-primary:focus-visible {
  background: var(--accent-strong);
}

.button-secondary {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text);
  border: 1px solid var(--border);
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.badge-row span {
  padding: 8px 14px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border);
  color: var(--muted);
}

.profile-card {
  padding: 28px 22px;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.avatar {
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #ff6488);
  color: white;
  font-size: 2.2rem;
  font-weight: 800;
}

.profile-card h2 {
  margin: 0;
  text-align: center;
  font-size: 2rem;
}

.profile-card p {
  margin: 10px 0 18px;
  text-align: center;
  color: var(--muted);
}

.profile-card ul {
  margin: 0;
  padding-left: 20px;
  color: var(--muted);
  line-height: 1.9;
}

.section {
  padding-top: 44px;
}

.section-heading {
  margin-bottom: 18px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
}

.card-grid {
  display: grid;
  gap: 20px;
}

.three-col {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.two-col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.social-card,
.info-card,
.project-box,
.about-card {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.social-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 18px;
  text-decoration: none;
  color: var(--text);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.social-card:hover,
.social-card:focus-visible {
  transform: translateY(-3px);
  border-color: rgba(255, 0, 76, 0.55);
}

.social-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(255, 0, 76, 0.14);
  color: var(--accent);
  font-weight: 800;
  font-size: 1.4rem;
}

.social-card h3,
.info-card h3,
.project-box h3 {
  margin: 0 0 6px;
  font-size: 1.1rem;
}

.social-card p,
.info-card p,
.project-box p,
.about-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.info-card {
  padding: 22px 20px;
}

.project-box,
.about-card {
  padding: 24px 22px;
}

.footer {
  padding-top: 28px;
  text-align: center;
  color: var(--muted);
}

@media (max-width: 850px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero,
  .three-col,
  .two-col {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 20px;
  }
}

@media (max-width: 520px) {
  .page-shell {
    width: min(100% - 20px, 1200px);
    margin-top: 20px;
  }

  .topbar {
    padding: 16px 18px;
  }

  .nav {
    gap: 10px 14px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .button {
    width: 100%;
  }
}
