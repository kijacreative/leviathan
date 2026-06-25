/* global React, ReactDOM, lucide */
const DS = window.LeviathanAIDesignSystem_f4b286;
const { Button, IconButton, Card, Badge, Tag, Input, Select, Checkbox, Tabs, ProgressBar, Avatar } = DS;
const { useState, useEffect, useRef } = React;

const MAXW = 1320;
const Ic = (n, style) => <i data-lucide={n} style={style}></i>;

/* ── breakpoint hook ─────────────────────────────────────────── */
function useBreakpoint() {
  const [w, setW] = useState(() => window.innerWidth);
  useEffect(() => {
    const f = () => setW(window.innerWidth);
    window.addEventListener("resize", f, { passive: true });
    return () => window.removeEventListener("resize", f);
  }, []);
  return { w, isMobile: w < 640, isTablet: w >= 640 && w < 1024, isDesktop: w >= 1024 };
}

/* ── section padding helper ──────────────────────────────────── */
function px(bp) { return bp.isMobile ? "0 20px" : bp.isTablet ? "0 32px" : "0 40px"; }

/* ============================================================
   Atmosphere — signature deep-sea environment
   ============================================================ */
function Atmosphere() {
  const rays = [
    { left: "12%", w: 150, rot: 8 }, { left: "30%", w: 220, rot: 5 },
    { left: "52%", w: 120, rot: 6 }, { left: "70%", w: 200, rot: 9 }, { left: "86%", w: 140, rot: 4 },
  ];
  const snow = Array.from({ length: 36 }, (_, i) => i);
  const videoRef = useRef(null);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const v = videoRef.current;
        if (v) v.style.transform = `translate3d(0, ${-(window.scrollY * 0.22)}px, 0) scale(1.06)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none", background: "var(--grad-depth)" }}>
      <video ref={videoRef} src="assets/abyss-bg.mp4" autoPlay muted loop playsInline
        style={{ position: "absolute", top: "-18%", left: "-3%", width: "106%", height: "136%", objectFit: "cover", willChange: "transform", transform: "translate3d(0,0,0) scale(1.06)", opacity: 0.5, filter: "saturate(0.85) brightness(0.7)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(2,6,12,0.55), rgba(2,12,26,0.62) 55%, rgba(2,6,12,0.8))", mixBlendMode: "multiply" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "46%", background: "radial-gradient(130% 100% at 50% 0%, rgba(129,195,224,0.14), transparent 60%)" }} />
      {rays.map((r, i) => (
        <div key={i} style={{ position: "absolute", top: "-14%", left: r.left, width: r.w, height: "130%", transformOrigin: "top center", transform: `rotate(${r.rot}deg)`, filter: "blur(30px)", background: "linear-gradient(180deg, rgba(169,220,242,0.10) 0%, rgba(129,195,224,0) 74%)", animation: `lev-ray ${7 + i}s ease-in-out ${i * 0.6}s infinite alternate` }} />
      ))}
      {snow.map((p) => {
        const size = 1 + (p % 3);
        return <div key={p} style={{ position: "absolute", left: `${(p * 37) % 100}%`, top: `${(p * 53) % 100}%`, width: size, height: size, borderRadius: "50%", background: "var(--biolume-200)", boxShadow: "0 0 6px var(--biolume-300)", "--o": (0.12 + (p % 4) * 0.06).toFixed(2), animation: `lev-drift ${18 + (p % 9) * 2}s linear ${-(p % 14)}s infinite` }} />;
      })}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(0deg, #02060c 6%, transparent 100%)" }} />
    </div>
  );
}

/* scroll reveal */
function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("in"), delay); io.unobserve(el); } });
    }, { threshold: 0.16 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 16 }}>{eyebrow}</div>
      <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(22px, 3vw, 40px)", letterSpacing: "0.04em", lineHeight: 1.12, color: "var(--text-primary)" }}>{title}</h2>
      {sub && <p style={{ margin: "18px auto 0", maxWidth: 600, fontSize: "clamp(15px,1.2vw,17px)", lineHeight: 1.65, color: "var(--text-secondary)" }}>{sub}</p>}
    </div>
  );
}

/* ============================================================
   Header
   ============================================================ */
function Header({ onDemo, onSearch }) {
  const { isMobile } = useBreakpoint();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  const nav = [
    { label: "Platform", href: "#platform" },
    { label: "Litigation Engine", href: "#featured" },
    { label: "Technology", href: "#technology" },
    { label: "Security", href: "#security" },
  ];

  const headerBg = scrolled || menuOpen ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.45)";

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
      background: headerBg, backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      borderBottom: `1px solid ${scrolled ? "var(--border-default)" : "var(--border-subtle)"}`,
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base)",
    }}>
      {/* main bar */}
      <div style={{ height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "0 20px" : "0 40px" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src="assets/leviathan-mark.png" alt="Leviathan" style={{ height: 32, width: "auto", filter: "drop-shadow(0 0 10px rgba(79,184,232,0.4))" }} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, letterSpacing: "0.14em", color: "var(--text-primary)" }}>LEVIATHAN</span>
        </a>

        {/* desktop nav */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 34 }}>
            {nav.map((n) => (
              <a key={n.label} href={n.href} style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, letterSpacing: "0.02em", color: "var(--text-secondary)", textDecoration: "none", transition: "color var(--dur-fast) var(--ease-out)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>{n.label}</a>
            ))}
          </nav>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {!isMobile && <IconButton label="Search" onClick={onSearch}>{Ic("search")}</IconButton>}
          {!isMobile && <Button variant="primary" size="sm" onClick={onDemo}>Request a Demo</Button>}
          {isMobile && (
            <button onClick={() => setMenuOpen((o) => !o)} aria-label="Menu" style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer", padding: 8, lineHeight: 0 }}>
              {menuOpen ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4l14 14M18 4L4 18" strokeLinecap="round"/></svg>
                        : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="3" y1="7" x2="19" y2="7" strokeLinecap="round"/><line x1="3" y1="12" x2="19" y2="12" strokeLinecap="round"/><line x1="3" y1="17" x2="19" y2="17" strokeLinecap="round"/></svg>}
            </button>
          )}
        </div>
      </div>

      {/* mobile drawer */}
      {isMobile && menuOpen && (
        <div style={{ borderTop: "1px solid var(--border-subtle)", padding: "16px 20px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
          {nav.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 500, color: "var(--text-secondary)", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid var(--border-subtle)" }}>{n.label}</a>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <Button variant="primary" fullWidth onClick={() => { setMenuOpen(false); onDemo(); }}>Request a Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   Hero
   ============================================================ */
function Hero({ onDemo }) {
  const { isMobile, isTablet } = useBreakpoint();
  const trustCols = isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)";
  return (
    <section style={{ position: "relative", zIndex: 1, minHeight: "94vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: isMobile ? "130px 20px 60px" : "150px 32px 70px" }}>
      <div style={{ animation: "lev-fade 1s var(--ease-out)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--biolume-200)", background: "rgba(129,195,224,0.06)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-pill, 999px)", padding: "8px 18px" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--biolume-300)", boxShadow: "0 0 8px var(--biolume-300)", animation: "lev-pulse 2.4s ease-in-out infinite" }} />
          The Leviathan Platform
        </span>
      </div>
      <img src="assets/leviathan-logo-full.png" alt="Leviathan AI Systems"
        style={{ width: isMobile ? "min(260px, 72vw)" : "min(340px, 60vw)", height: "auto", margin: "30px 0 24px", filter: "drop-shadow(0 10px 44px rgba(79,184,232,0.38))", animation: "lev-float 7s ease-in-out infinite" }} />
      <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(28px, 5vw, 60px)", letterSpacing: "0.04em", lineHeight: 1.08, color: "var(--text-primary)", textShadow: "0 2px 30px rgba(2,6,12,0.85)", maxWidth: 940 }}>
        Enterprise AI Infrastructure<br />Built for Scale
      </h1>
      <p style={{ margin: "22px auto 0", maxWidth: 560, fontSize: "clamp(15px,1.4vw,19px)", lineHeight: 1.65, color: "var(--text-secondary)", fontWeight: 300 }}>
        Leviathan turns the complexity of legal and operational work into precise, defensible intelligence — surfaced from the depth of your data.
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 34, flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
        <Button variant="primary" size={isMobile ? "md" : "lg"} onClick={onDemo} iconLeft={Ic("anchor", { width: 17, height: 17 })}>Request a Private Demo</Button>
        <Button variant="secondary" size={isMobile ? "md" : "lg"} onClick={() => document.getElementById("platform").scrollIntoView()}>Explore the Platform</Button>
      </div>

      {/* trust band */}
      <div style={{ marginTop: 64, width: "100%", maxWidth: 960 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 20 }}>Engineered for the enterprise</div>
        <div style={{ display: "grid", gridTemplateColumns: trustCols, gap: isMobile ? "16px 24px" : 20, borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", padding: "22px 0" }}>
          {[
            { k: "SOC 2 Type II", v: "Audited security" },
            { k: "ISO 27001", v: "Information security" },
            { k: "Private by design", v: "Your data stays yours" },
            { k: "99.99% uptime", v: "Deep-sea reliability" },
          ].map((s) => (
            <div key={s.k}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: isMobile ? 16 : 19, letterSpacing: "0.03em", color: "var(--text-primary)" }}>{s.k}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 5 }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Platform — 4 product tiles
   ============================================================ */
function PlatformSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)";
  const items = [
    { img: "intake", name: "Leviathan Intake AI", desc: "Automate legal intake & case evaluation" },
    { img: "litigation", name: "Leviathan Litigation Engine", desc: "AI-powered litigation intelligence" },
    { img: "analytics", name: "Leviathan Analytics", desc: "Advanced data & risk analytics" },
    { img: "vendor", name: "Leviathan Vendor Network", desc: "Optimize vendor management & compliance" },
  ];
  return (
    <section id="platform" style={{ position: "relative", zIndex: 1, padding: isMobile ? "80px 20px 60px" : "100px 40px 70px", maxWidth: MAXW, margin: "0 auto" }}>
      <Reveal><SectionHeading eyebrow="Leviathan Platform" title="AI Solutions for Complex Enterprise Operations" sub="Four engines, one platform. Each commands a domain — together they run the depth of your enterprise." /></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: cols, gap: isMobile ? 12 : 20, marginTop: 48 }}>
        {items.map((it, i) => (
          <Reveal key={it.img} delay={i * 80}>
            <Card variant="solid" padding="none" interactive style={{ overflow: "hidden", aspectRatio: "283 / 410" }}>
              <img src={`assets/products/${it.img}.png`} alt={it.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Featured — Litigation Engine live UI panel
   ============================================================ */
const PRECEDENTS = [
  { name: "Marbury Holdings v. Calloway", court: "9th Cir. · 2024", conf: 94 },
  { name: "In re Atlantic Freight Sys.", court: "S.D.N.Y. · 2023", conf: 88 },
  { name: "Vance Industries v. Orion", court: "Del. Ch. · 2025", conf: 81 },
];
const TIMELINE = [
  { t: "Complaint filed", d: "Mar 4", done: true },
  { t: "Discovery window", d: "Apr 1 – Jul 30", done: true },
  { t: "Expert disclosure", d: "Aug 14", done: false },
  { t: "Dispositive motions", d: "Sep 22", done: false },
];

function FeaturedProduct() {
  const { isMobile, isTablet } = useBreakpoint();
  const [tab, setTab] = useState("precedents");
  useEffect(() => { if (window.lucide) lucide.createIcons(); });
  const stacked = isMobile || isTablet;
  return (
    <section id="featured" style={{ position: "relative", zIndex: 1, padding: isMobile ? "60px 20px" : "70px 40px", maxWidth: MAXW, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: stacked ? "1fr" : "0.92fr 1.08fr", gap: stacked ? 40 : 56, alignItems: "center" }}>
        {/* copy */}
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 16 }}>Leviathan Litigation Engine</div>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(22px,2.8vw,38px)", letterSpacing: "0.04em", lineHeight: 1.14, color: "var(--text-primary)" }}>Intelligence surfaced from the depth of the record</h2>
          <p style={{ margin: "18px 0 24px", fontSize: "clamp(14px,1vw,17px)", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: stacked ? "100%" : 460 }}>
            Precedent, timelines, and exposure — modeled, scored, and defensible. The Litigation Engine reads the full record and returns the strategy, with confidence you can take to leadership.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { i: "scan-search", h: "Precedent at depth", t: "Surfaces controlling authority ranked by relevance and confidence." },
              { i: "calendar-clock", h: "Living case timeline", t: "Every deadline tracked and projected as the matter evolves." },
              { i: "shield-check", h: "Quantified exposure", t: "Defensible risk and outcome modeling for every decision." },
            ].map((f) => (
              <div key={f.h} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ flex: "0 0 auto", width: 40, height: 40, borderRadius: "var(--radius-sm, 6px)", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "rgba(129,195,224,0.07)", border: "1px solid var(--border-default)", color: "var(--biolume-300)" }}>{Ic(f.i, { width: 20, height: 20 })}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(15px,1vw,17px)", letterSpacing: "0.02em", color: "var(--text-primary)" }}>{f.h}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-secondary)", marginTop: 3 }}>{f.t}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* live panel */}
        <Reveal delay={stacked ? 0 : 120}>
          <Card variant="glass" padding="none" style={{ overflow: "hidden", boxShadow: "var(--rim-top), var(--glow-md), var(--shadow-xl)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 18px", borderBottom: "1px solid var(--border-default)", background: "linear-gradient(180deg, rgba(18,48,92,0.45), transparent)" }}>
              <span style={{ width: 30, height: 30, borderRadius: 6, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "var(--grad-cta)", color: "#eaf2fb", boxShadow: "var(--glow-sm)" }}>{Ic("brain-circuit", { width: 17, height: 17 })}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "0.04em", color: "var(--text-primary)" }}>Matter · Vance Industries</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--text-muted)" }}>#LE-20294 · COMMERCIAL LITIGATION</div>
              </div>
              <Badge tone="success" dot>Active</Badge>
            </div>
            <div style={{ padding: "18px 18px 4px" }}>
              <ProgressBar value={91} label="Confidence" showValue tone="biolume" />
            </div>
            <div style={{ padding: "10px 18px 0" }}>
              <Tabs value={tab} onChange={setTab} items={[
                { id: "precedents", label: "Precedents" },
                { id: "timeline", label: "Timeline" },
                { id: "risk", label: "Risk" },
              ]} />
            </div>
            <div style={{ padding: "16px 18px 20px", minHeight: 220 }}>
              {tab === "precedents" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {PRECEDENTS.map((p) => (
                    <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", borderRadius: 6, background: "rgba(129,195,224,0.04)", border: "1px solid var(--border-subtle)" }}>
                      <span style={{ color: "var(--biolume-300)" }}>{Ic("scale", { width: 18, height: 18 })}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13.5, color: "var(--text-primary)", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--text-muted)" }}>{p.court}</div>
                      </div>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--biolume-200)", fontWeight: 600 }}>{p.conf}%</span>
                    </div>
                  ))}
                </div>
              )}
              {tab === "timeline" && (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {TIMELINE.map((e, i) => (
                    <div key={e.t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span style={{ width: 14, height: 14, borderRadius: "50%", background: e.done ? "var(--biolume-300)" : "var(--abyss-700)", border: e.done ? "none" : "1px solid var(--border-strong)", boxShadow: e.done ? "0 0 10px var(--biolume-300)" : "none" }} />
                        {i < TIMELINE.length - 1 && <span style={{ width: 2, height: 34, background: "var(--border-subtle)" }} />}
                      </div>
                      <div style={{ paddingBottom: 14 }}>
                        <div style={{ fontSize: 14, color: "var(--text-primary)", fontWeight: 500 }}>{e.t}</div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--text-muted)" }}>{e.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {tab === "risk" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <ProgressBar value={28} label="Litigation exposure" showValue tone="biolume" />
                  <ProgressBar value={72} label="Settlement leverage" showValue tone="biolume" />
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 2 }}>
                    <Badge tone="success">Favorable jurisdiction</Badge>
                    <Badge tone="warning">Expert dependency</Badge>
                    <Badge tone="info">3 controlling cases</Badge>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "var(--text-muted)" }}>Modeled across 1,240 comparable matters. Confidence rises as discovery completes.</p>
                </div>
              )}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Technology — Powered by the Deep
   ============================================================ */
function TechSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? "1fr" : isTablet ? "repeat(3, 1fr)" : "repeat(3, 1fr)";
  const items = [
    { img: "infrastructure", name: "AI Infrastructure", desc: "Enterprise architecture built for scalability." },
    { img: "generative", name: "Generative Intelligence", desc: "Models that understand and generate complex legal work." },
    { img: "adaptive", name: "Adaptive Systems", desc: "Continuously learning AI tailored to your enterprise." },
  ];
  return (
    <section id="technology" style={{ position: "relative", zIndex: 1, padding: isMobile ? "60px 20px" : "80px 40px 70px", maxWidth: MAXW, margin: "0 auto" }}>
      <Reveal><SectionHeading eyebrow="The Deep" title="Technology Powered by the Deep" sub="The infrastructure beneath every Leviathan engine — built to withstand pressure and scale without limit." /></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: cols, gap: isMobile ? 14 : 20, marginTop: 48 }}>
        {items.map((it, i) => (
          <Reveal key={it.img} delay={i * 100}>
            <Card variant="solid" padding="none" interactive style={{ overflow: "hidden", aspectRatio: isMobile ? "4 / 3" : "390 / 344" }}>
              <img src={`assets/products/${it.img}.png`} alt={it.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Security band
   ============================================================ */
function SecurityBand() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)";
  const items = [
    { i: "lock", h: "Private by design", t: "Your data is never used to train shared models. Isolation by default." },
    { i: "shield-check", h: "Compliance-ready", t: "SOC 2 Type II and ISO 27001 controls across the platform." },
    { i: "git-branch", h: "Auditable intelligence", t: "Every output is traceable to its source — defensible under scrutiny." },
    { i: "server", h: "Built for scale", t: "Enterprise architecture that holds under the deepest workloads." },
  ];
  return (
    <section id="security" style={{ position: "relative", zIndex: 1, padding: isMobile ? "60px 20px 80px" : "70px 40px 90px", maxWidth: MAXW, margin: "0 auto" }}>
      <Reveal><SectionHeading eyebrow="Trust & Security" title="Defensible Intelligence, By Design" /></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: cols, gap: isMobile ? 12 : 20, marginTop: 44 }}>
        {items.map((it, i) => (
          <Reveal key={it.h} delay={i * 80}>
            <Card variant="glass" padding="lg" style={{ height: "100%" }}>
              <span style={{ width: 44, height: 44, borderRadius: "var(--radius-sm,6px)", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "rgba(129,195,224,0.07)", border: "1px solid var(--border-default)", color: "var(--biolume-300)", marginBottom: 16 }}>{Ic(it.i, { width: 22, height: 22 })}</span>
              <h3 style={{ margin: "0 0 8px", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 17, letterSpacing: "0.02em", color: "var(--text-primary)" }}>{it.h}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--text-secondary)" }}>{it.t}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer({ onDemo }) {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = [
    { h: "Platform", links: ["Intake AI", "Litigation Engine", "Analytics", "Vendor Network"] },
    { h: "Company", links: ["About", "Security", "Careers", "Contact"] },
    { h: "Resources", links: ["Documentation", "Case Studies", "Compliance", "Status"] },
  ];
  return (
    <footer style={{ position: "relative", zIndex: 1, background: "linear-gradient(180deg, #0a1e36 0%, #15315a 100%)", borderTop: "1px solid var(--border-default)", marginTop: 30 }}>
      {/* CTA row */}
      <div style={{ maxWidth: MAXW, margin: "0 auto", padding: isMobile ? "48px 20px 36px" : "72px 40px 52px", display: "flex", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 28, flexDirection: isMobile ? "column" : "row" }}>
        <div>
          <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(20px,2.4vw,32px)", letterSpacing: "0.04em", color: "var(--text-primary)" }}>Command the depth of your data.</h3>
          <p style={{ margin: "10px 0 0", fontSize: "clamp(14px,1vw,16px)", lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: 480 }}>See how Leviathan turns enterprise complexity into precise, defensible intelligence.</p>
        </div>
        <Button variant="primary" size={isMobile ? "md" : "lg"} onClick={onDemo} iconLeft={Ic("anchor", { width: 17, height: 17 })}>Request a Private Demo</Button>
      </div>

      <div style={{ height: 1, background: "var(--border-subtle)", maxWidth: MAXW, margin: "0 auto" }} />

      {/* link grid */}
      <div style={{ maxWidth: MAXW, margin: "0 auto", padding: isMobile ? "32px 20px 40px" : "44px 40px 48px", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr 1fr" : "1.5fr repeat(3, 1fr)", gap: isMobile ? "32px 24px" : 32 }}>
        {!isMobile && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img src="assets/leviathan-mark.png" alt="Leviathan" style={{ height: 32, width: "auto" }} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, letterSpacing: "0.14em", color: "var(--text-primary)" }}>LEVIATHAN</span>
            </div>
            <div style={{ fontSize: 13.5, lineHeight: 1.65, color: "var(--text-muted)", maxWidth: 240 }}>Leviathan AI Systems — enterprise AI infrastructure built for scale.</div>
          </div>
        )}
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 14 }}>{c.h}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {c.links.map((l) => (
                <a key={l} href="#platform" style={{ fontSize: 14, color: "var(--text-secondary)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid var(--border-subtle)", maxWidth: MAXW, margin: "0 auto", padding: isMobile ? "16px 20px" : "20px 40px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", color: "var(--text-muted)" }}>
        <span>© 2026 Leviathan AI Systems</span>
        <span>Privacy · Terms · Security</span>
      </div>
    </footer>
  );
}

/* ============================================================
   Demo modal + search
   ============================================================ */
function DemoModal({ open, onClose }) {
  const { isMobile } = useBreakpoint();
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(true);
  useEffect(() => { if (open) setSent(false); }, [open]);
  useEffect(() => { if (window.lucide) lucide.createIcons(); });
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 60, display: "flex", alignItems: isMobile ? "flex-end" : "center", justifyContent: "center", background: "var(--surface-overlay)", backdropFilter: "blur(6px)", padding: isMobile ? 0 : 24, animation: "lev-fade var(--dur-base) var(--ease-out)" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: isMobile ? "100%" : "min(480px, 100%)", background: "var(--surface-card-solid)", border: "1px solid var(--border-default)", borderRadius: isMobile ? "var(--radius-lg, 12px) var(--radius-lg, 12px) 0 0" : "var(--radius-lg, 12px)", boxShadow: "var(--glow-md), var(--shadow-xl)", padding: isMobile ? "28px 20px 36px" : 32, position: "relative", animation: "lev-rise var(--dur-slow) var(--ease-deep)" }}>
        <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", lineHeight: 0 }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4l10 10M14 4L4 14" strokeLinecap="round" /></svg>
        </button>
        {sent ? (
          <div style={{ textAlign: "center", padding: "20px 8px" }}>
            <div style={{ width: 52, height: 52, margin: "0 auto 16px", borderRadius: "50%", background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--glow-sm)", color: "var(--biolume-300)" }}>{Ic("check")}</div>
            <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 20, letterSpacing: "0.03em", color: "var(--text-primary)" }}>Request received</h3>
            <p style={{ margin: "10px 0 22px", fontSize: 15, lineHeight: 1.6, color: "var(--text-secondary)" }}>Our team will surface from the deep within one business day.</p>
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <React.Fragment>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 8 }}>Private Demo</div>
            <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, letterSpacing: "0.03em", color: "var(--text-primary)" }}>Request a Private Demo</h3>
            <p style={{ margin: "8px 0 20px", fontSize: 14, lineHeight: 1.55, color: "var(--text-secondary)" }}>Tell us about your operation. We tailor every demo to your enterprise.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Input label="Full name" placeholder="Marina Vance" required />
              <Input label="Work email" type="email" placeholder="you@firm.com" iconLeft={Ic("mail")} required />
              <Select label="Product of interest" options={["Leviathan Intake AI", "Leviathan Litigation Engine", "Leviathan Analytics", "Leviathan Vendor Network"]} />
              <Checkbox checked={agree} onChange={setAgree} label="I agree to be contacted about Leviathan products." />
              <div style={{ marginTop: 4 }}><Button type="submit" fullWidth size="lg">Request Demo</Button></div>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function SearchBar({ onClose }) {
  return (
    <div style={{ position: "fixed", top: 64, left: 0, right: 0, zIndex: 39, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--border-default)", padding: "14px 20px", animation: "lev-fade 180ms ease-out" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", gap: 12, alignItems: "center" }}>
        <div style={{ flex: 1 }}><Input autoFocus placeholder="Search the platform…" iconLeft={Ic("search")} /></div>
        <button onClick={onClose} aria-label="Close search" style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", lineHeight: 0 }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4l10 10M14 4L4 14" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   App
   ============================================================ */
function App() {
  const [demo, setDemo] = useState(false);
  const [search, setSearch] = useState(false);
  useEffect(() => {
    const refresh = () => window.lucide && window.lucide.createIcons();
    refresh();
    const t = setInterval(refresh, 500);
    return () => clearInterval(t);
  }, []);
  return (
    <React.Fragment>
      <Atmosphere />
      <Header onDemo={() => setDemo(true)} onSearch={() => setSearch((s) => !s)} />
      {search && <SearchBar onClose={() => setSearch(false)} />}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero onDemo={() => setDemo(true)} />
        <PlatformSection />
        <FeaturedProduct />
        <TechSection />
        <SecurityBand />
      </main>
      <Footer onDemo={() => setDemo(true)} />
      <DemoModal open={demo} onClose={() => setDemo(false)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
