// Editorial Signal reminder: let proof lead the story; use asymmetric editorial structure, deliberate contrast, and clear conversion paths instead of generic portfolio sections.
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleArrowOutUpRight,
  LayoutTemplate,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MousePointer2,
  Palette,
  PenTool,
  Plus,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";
import {
  contactConfig,
  creativeWork,
  pricing,
  projects,
  services,
  type Project,
} from "@/lib/portfolioData";

const serviceIcons = [
  LayoutTemplate,
  WandSparkles,
  ShoppingBag,
  ArrowUpRight,
  Search,
  Sparkles,
  Palette,
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand-lockup ${inverse ? "brand-lockup-inverse" : ""}`} href="#home" aria-label="Yashu home">
      <span className="brand-mark-wrap">
        <img src="/manus-storage/yashu-mark_00a7aaff.png" alt="Yashu mark" />
      </span>
      <span className="brand-wordmark">YASHU</span>
    </a>
  );
}

function SectionIntro({ index, eyebrow, title, copy, light = false }: { index: string; eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? "section-intro-light" : ""}`}>
      <div className="section-index"><span className="section-route-mark"><img src="/manus-storage/yashu-mark_00a7aaff.png" alt="" /></span>{index} <span>/</span> {eyebrow}</div>
      <div className="section-heading-block">
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </div>
  );
}

function ArrowLink({ children, onClick, light = false }: { children: React.ReactNode; onClick?: () => void; light?: boolean }) {
  return (
    <button className={`arrow-link ${light ? "arrow-link-light" : ""}`} onClick={onClick}>
      <span>{children}</span>
      <ArrowUpRight size={17} strokeWidth={1.8} />
    </button>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.name} conceptual website preview`} loading="lazy" />;
  }

  if (project.id === "shree-mithas") {
    return (
      <div className="visual-inner visual-mithas-inner">
        <div className="visual-topline"><span>SHREE MITHAS</span><span>EST. 1987</span></div>
        <div className="mithas-copy">A little<br /><em>sweetness</em><br />for the road.</div>
        <div className="mithas-sweets"><span>●</span><span>●</span><span>●</span><span>●</span></div>
        <div className="visual-button">SHOP FESTIVE BOXES <ArrowUpRight size={12} /></div>
      </div>
    );
  }

  if (project.id === "ember-bean") {
    return (
      <div className="visual-inner visual-ember-inner">
        <div className="visual-topline"><span>EMBER &amp; BEAN</span><span>OPEN UNTIL 11</span></div>
        <div className="ember-photo"><div className="ember-steam" /><div className="ember-cup" /></div>
        <div className="ember-copy"><span>GOOD FOOD,</span><strong>OPEN LATE.</strong></div>
        <div className="ember-menu">VIEW TONIGHT&apos;S MENU <ArrowUpRight size={12} /></div>
      </div>
    );
  }

  return (
    <div className="visual-inner visual-nova-inner">
      <div className="visual-topline"><span>NOVA / 04</span><span>INTERIORS</span></div>
      <div className="nova-photo"><div className="nova-arch" /><div className="nova-chair" /><div className="nova-plant" /></div>
      <div className="nova-copy"><span>SPACES WITH</span><strong>A POINT OF VIEW.</strong></div>
      <div className="nova-meta">RESIDENTIAL / HOSPITALITY / OBJECTS</div>
    </div>
  );
}

function ProjectCard({ project, featured, onOpen }: { project: Project; featured?: boolean; onOpen: (project: Project) => void }) {
  return (
    <button
      className={`project-card ${featured ? "project-card-featured" : ""} ${project.visualClass}`}
      onClick={() => onOpen(project)}
      style={{ "--project-accent": project.accent, "--project-text": project.text } as React.CSSProperties}
    >
      <div className="project-art">
        <ProjectVisual project={project} />
        <span className="project-index">{project.number}</span>
        <span className="concept-label">CONCEPT PROJECT</span>
      </div>
      <div className="project-card-info">
        <div>
          <div className="project-category">{project.category}</div>
          <h3>{project.name}</h3>
          <p>{project.tagline}</p>
        </div>
        <span className="project-card-arrow"><ArrowUpRight size={20} /></span>
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="presentation">
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close project case study"><X size={20} /></button>
        <div className={`modal-visual ${project.visualClass}`} style={{ "--project-accent": project.accent, "--project-text": project.text } as React.CSSProperties}>
          <ProjectVisual project={project} />
          <span className="concept-label">CONCEPT PROJECT · CASE STUDY</span>
        </div>
        <div className="modal-content">
          <div className="project-category">{project.number} / {project.category}</div>
          <h2 id="project-modal-title">{project.name}</h2>
          <p className="modal-tagline">{project.tagline}</p>
          <p className="modal-description">{project.description}</p>
          <div className="modal-services">{project.services.map((service) => <span key={service}>{service}</span>)}</div>
          <div className="case-study-grid">
            {Object.entries(project.caseStudy).map(([key, value]) => (
              <div key={key} className="case-study-item">
                <span>{key}</span>
                <p>{value}</p>
              </div>
            ))}
          </div>
          <div className="modal-footer-note"><CircleArrowOutUpRight size={17} /> Built as a demonstration of what Yashu can create for a business like yours.</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <div className="portfolio-shell">
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-is-open" : ""}`}>
        <div className="nav-inner">
          <Logo inverse={!scrolled && !menuOpen} />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <button onClick={() => goTo("home")}>Home</button>
            <button onClick={() => goTo("services")}>Services</button>
            <button onClick={() => goTo("work")}>Work</button>
            <button onClick={() => goTo("process")}>Process</button>
            <button onClick={() => goTo("about")}>About</button>
            <button onClick={() => goTo("contact")}>Contact</button>
          </nav>
          <div className="nav-actions">
            <button className="nav-cta" onClick={() => goTo("contact")}>Start a project <ArrowUpRight size={15} /></button>
            <button className="mobile-menu-trigger" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {["home", "services", "work", "process", "about", "contact"].map((item) => (
              <button key={item} onClick={() => goTo(item)}>{item}<ArrowUpRight size={17} /></button>
            ))}
          </nav>
        ) : null}
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-noise" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Freelance web developer &amp; web designer</div>
              <h1>Websites that make your <em>business</em> stand out.</h1>
              <p className="hero-description">I design and build modern, responsive websites that help businesses look professional, build trust, and turn visitors into customers.</p>
              <div className="hero-actions">
                <button className="button button-citrus" onClick={() => goTo("work")}>View my work <ArrowUpRight size={17} /></button>
                <button className="button button-ghost-light" onClick={() => goTo("contact")}>Let&apos;s build your website <ArrowUpRight size={17} /></button>
              </div>
              <button className="hero-secondary-link" onClick={() => goTo("services")}><span>See what I can create</span><ArrowDownRight size={16} /></button>
            </div>
            <div className="hero-art-column">
              <div className="hero-art-frame">
                <img src="/manus-storage/yashu-hero-collage_4b45a792.jpg" alt="Abstract collage of premium website interfaces" />
                <div className="hero-art-tag hero-art-tag-top">SELECTED<br />INTERFACES <ArrowUpRight size={15} /></div>
                <div className="hero-art-tag hero-art-tag-bottom">BUILT FOR<br /><strong>REAL BUSINESSES</strong></div>
              </div>
              <div className="hero-stamp"><img src="/manus-storage/yashu-mark_00a7aaff.png" alt="Yashu route mark" /><small>DESIGN<br />+ BUILD</small></div>
            </div>
          </div>
          <div className="hero-bottomline">
            <span>Based in India · Available worldwide</span>
            <span>Scroll to explore <ArrowDownRight size={15} /></span>
          </div>
        </section>

        <section className="value-section section-paper">
          <div className="container">
            <SectionIntro index="00" eyebrow="VALUE" title="More than just a website." copy="A good website is a first impression with a job to do. I combine modern design, clean implementation, and business thinking to make that first impression count." />
            <div className="value-grid">
              {[
                ["01", "Professional first impression", "Look as capable online as you are in the room."],
                ["02", "Mobile-friendly by default", "A considered experience on the screen people actually use."],
                ["03", "Clarity that moves people", "Strong hierarchy, useful navigation, and confident calls-to-action."],
                ["04", "A system you can grow", "A flexible visual foundation that will not box in your next idea."],
              ].map(([number, title, copy]) => (
                <div className="value-item" key={number}>
                  <span className="value-number">{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <ArrowUpRight size={18} className="value-arrow" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-ink">
          <div className="container">
            <SectionIntro index="01" eyebrow="SERVICES" title="A better web presence, built around your business." copy="From a focused landing page to a full digital storefront, the work stays grounded in what your customers need to understand, trust, and do next." light />
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-card-top"><span>{service.number}</span><Icon size={22} strokeWidth={1.6} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-detail"><span>{service.detail}</span><ChevronRight size={17} /></div>
                  </article>
                );
              })}
            </div>
            <div className="services-footnote"><span>WHAT I HELP WITH</span><p>Local businesses · Startups · Creators · Shops · Hotels · Restaurants · Brands</p></div>
          </div>
        </section>

        <section id="work" className="work-section section-paper">
          <div className="container">
            <SectionIntro index="02" eyebrow="SELECTED WORK" title="A portfolio that shows what the work can become." copy="These are conceptual projects created to demonstrate range. Different industries, different visual languages, one shared standard: make the business look impossible to ignore." />
            <div className="work-callout"><span>CLICK INTO A PROJECT</span><ArrowDownRight size={17} /><p>Explore the thinking behind each interface.</p></div>
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard key={project.id} project={project} featured={index < 2} onOpen={setActiveProject} />)}
            </div>
            <div className="work-bottomline"><span className="work-brand-note"><img src="/manus-storage/yashu-mark_00a7aaff.png" alt="" /> 06 CONCEPTS / 06 WORLDS</span><button onClick={() => goTo("contact")}>Have a different brief? <ArrowUpRight size={16} /></button></div>
          </div>
        </section>

        <section id="about" className="about-section section-paper-soft">
          <div className="container about-layout">
            <div className="about-title"><div className="section-index"><span className="section-route-mark"><img src="/manus-storage/yashu-mark_00a7aaff.png" alt="" /></span>03 <span>/</span> THE APPROACH</div><h2>Design with a business brain.</h2></div>
            <div className="about-copy"><p className="about-lead">The best-looking website is not always the most useful one. My role is to find the point where a clear customer journey and a memorable visual identity reinforce each other.</p><p>I work with business owners, founders, creators, and teams who want a site that feels like them—but sharper. You bring the ambition and context. I bring the structure, interface, and polish to make it legible online.</p><ArrowLink onClick={() => goTo("contact")}>Bring me the rough idea</ArrowLink></div>
            <div className="about-statement"><span>MY PROMISE</span><strong>Clearer. Sharper.<br />More memorable.</strong><MousePointer2 size={38} strokeWidth={1.1} /></div>
          </div>
        </section>

        <section className="redesign-section section-ink">
          <div className="container">
            <SectionIntro index="04" eyebrow="REDESIGN" title="From outdated → modern." copy="A redesign should do more than change the colors. It should make the next step obvious, the story easier to follow, and the business feel more current." light />
            <div className="redesign-layout">
              <div className="redesign-label"><span>FICTIONAL EXAMPLE</span><strong>OLD SITE,<br />NEW SIGNAL.</strong><p>Illustrating the kind of visual and UX decisions that turn a quiet online presence into a confident one.</p></div>
              <div className="before-after-wrap">
                <div className="before-site"><div className="old-browser"><span>www.shree-sweets.example</span><span>×</span></div><div className="old-header">SHREE SWEETS <small>HOME · ABOUT · CONTACT</small></div><div className="old-hero"><h4>Best sweets in town</h4><p>Fresh sweets and namkeen available daily.</p><button>Click here</button></div><div className="old-columns"><span>OUR PRODUCTS</span><span>ABOUT US</span><span>VISIT STORE</span></div><div className="before-tag">BEFORE</div></div>
                <div className="redesign-arrow"><ArrowRight size={22} /></div>
                <div className="after-site"><div className="new-browser"><span>shree mithas / made for occasions</span><span><ArrowUpRight size={13} /></span></div><div className="new-hero"><div><span>01 / LOCAL FAVOURITE</span><h4>Made for every<br /><em>sweet occasion.</em></h4><button>Explore the collection <ArrowUpRight size={13} /></button></div><div className="new-sweets"><span>●</span><span>●</span><span>●</span></div></div><div className="after-bottom"><span>SWEETS</span><span>NAMKEEN</span><span>GIFT BOXES</span><span>WHATSAPP US ↗</span></div><div className="after-tag">AFTER</div></div>
              </div>
            </div>
            <div className="redesign-benefits"><span>THE DIFFERENCE</span><div><Check size={16} /> Better hierarchy</div><div><Check size={16} /> Better spacing</div><div><Check size={16} /> Stronger CTA</div><div><Check size={16} /> Mobile-first</div></div>
          </div>
        </section>

        <section className="creative-section section-paper">
          <div className="container">
            <SectionIntro index="05" eyebrow="DIGITAL DESIGN" title="The details travel beyond the site." copy="A supporting visual service for the moments your business needs to show up elsewhere: an offer, a launch, a festival, a reason to stop scrolling." />
            <div className="creative-grid">
              {creativeWork.map((work) => <div className={`creative-card ${work.className}`} key={work.title}><div className="creative-card-top"><span>{work.label}</span><ArrowUpRight size={18} /></div><div className="creative-card-body"><span>{work.title.split(" ").slice(0, 2).join(" ")}</span><strong>{work.title.split(" ").slice(2).join(" ")}</strong></div><div className="creative-card-foot">YASHU / DIGITAL CREATIVE</div></div>)}
            </div>
          </div>
        </section>

        <section id="process" className="process-section section-paper-soft">
          <div className="container">
            <SectionIntro index="06" eyebrow="PROCESS" title="A clear path from rough idea to ready-to-share." copy="No mystery handoffs. Every project moves through a practical sequence designed to keep decisions useful and momentum visible." />
            <div className="process-line">
              {[['01', 'Understand', 'The business, audience, goals, and requirements.'], ['02', 'Plan', 'The structure, content hierarchy, and user journey.'], ['03', 'Design', 'The visual direction and responsive interface.'], ['04', 'Build', 'The website with clean, responsive implementation.'], ['05', 'Launch', 'The polish, testing, handover, and next steps.']].map(([number, title, copy]) => <article className="process-step" key={number}><span className="process-number">{number}</span><div className="process-dot" /><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="pricing-section section-ink">
          <div className="container">
            <SectionIntro index="07" eyebrow="STARTING POINTS" title="A useful place to begin." copy="Packages keep the first conversation simple. Everything can be adjusted around the real scope, content, and ambition of your project." light />
            <div className="pricing-grid">
              {pricing.map((packageItem) => <article className={`price-card ${packageItem.featured ? "price-card-featured" : ""}`} key={packageItem.name}>{packageItem.featured ? <span className="price-featured-tag">MOST REQUESTED</span> : null}<span className="price-eyebrow">{packageItem.eyebrow}</span><h3>{packageItem.name}</h3><p>{packageItem.description}</p><strong className="price-value">{packageItem.price}</strong><div className="price-divider" />{packageItem.features.map((feature) => <div className="price-feature" key={feature}><Check size={15} />{feature}</div>)}<button className="price-link" onClick={() => scrollToSection("contact")}>Discuss this package <ArrowUpRight size={16} /></button></article>)}
            </div>
            <div className="pricing-note"><span>NEED SOMETHING DIFFERENT?</span><p>Let&apos;s discuss your requirements.</p><button onClick={() => goTo("contact")}>Start a conversation <ArrowUpRight size={16} /></button></div>
          </div>
        </section>

        <section className="final-cta section-citrus">
          <div className="container final-cta-layout"><div><div className="section-index"><span className="section-route-mark"><img src="/manus-storage/yashu-mark_00a7aaff.png" alt="" /></span>08 <span>/</span> NEXT PROJECT</div><h2>Your business deserves a <em>better website.</em></h2></div><div className="final-cta-copy"><p>Whether you&apos;re starting from scratch or your current website needs a complete refresh, let&apos;s create something your customers will remember.</p><div className="final-cta-actions"><button className="button button-ink" onClick={() => goTo("contact")}>Start a project <ArrowUpRight size={17} /></button><a className="button button-outline-ink" href={contactConfig.whatsappHref} target="_blank" rel="noreferrer">WhatsApp me <MessageCircle size={17} /></a><button className="text-action" onClick={() => goTo("work")}>View my work <ArrowUpRight size={16} /></button></div></div></div>
        </section>

        <section id="contact" className="contact-section section-paper">
          <div className="container contact-layout"><div className="contact-aside"><div className="section-index"><span className="section-route-mark"><img src="/manus-storage/yashu-mark_00a7aaff.png" alt="" /></span>09 <span>/</span> CONTACT</div><h2>Let&apos;s build something <em>great.</em></h2><p>Tell me what you&apos;re working on, what is not working yet, or what you want people to feel when they find you online.</p><div className="contact-details"><a href={`mailto:${contactConfig.email}`}><Mail size={17} /><span>{contactConfig.email}</span></a><a href={contactConfig.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17} /><span>{contactConfig.whatsapp}</span></a><div><MapPin size={17} /><span>{contactConfig.location}</span></div></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><div className="form-row"><label><span>Your name</span><input required name="name" placeholder="Name" /></label><label><span>Email</span><input required type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label><span>Business / company</span><input name="company" placeholder="Company name" /></label><label><span>Project type</span><select name="projectType" defaultValue=""><option value="" disabled>Select one</option><option>New business website</option><option>Website redesign</option><option>E-commerce website</option><option>Landing page</option><option>Something else</option></select></label></div><div className="form-row"><label><span>Budget range</span><select name="budget" defaultValue=""><option value="" disabled>Select one</option><option>₹18k – ₹35k</option><option>₹35k – ₹70k</option><option>₹70k+</option><option>Let&apos;s discuss</option></select></label><label><span>Timeline</span><input name="timeline" placeholder="When would you like to start?" /></label></div><label><span>Tell me a little about the project</span><textarea required name="message" placeholder="What are you building, refreshing, or trying to make clearer?" rows={5} /></label><button className="button button-ink form-submit" type="submit">{submitted ? "Message noted — thank you" : "Let’s build something great"}<ArrowUpRight size={17} /></button>{submitted ? <p className="form-success">This demo form is ready for your real contact integration. Replace the editable details in <code>portfolioData.ts</code> when you are ready to receive enquiries.</p> : <p className="form-note">No pressure, no generic proposal. Just a useful first conversation.</p>}</form></div>
        </section>
      </main>

      <footer className="site-footer section-ink"><div className="container footer-inner"><Logo inverse /><div className="footer-middle"><span>Freelance web developer &amp; designer</span><span>{contactConfig.location}</span></div><div className="footer-right"><span>© {new Date().getFullYear()} Yashu</span><button onClick={() => scrollToSection("home")}>Back to top <ArrowUpRight size={15} /></button></div></div></footer>
      {activeProject ? <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} /> : null}
    </div>
  );
}
