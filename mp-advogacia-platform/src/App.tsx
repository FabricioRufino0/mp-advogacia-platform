import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'motion/react';
import { ArrowUp, ChevronDown, Menu, MessageCircle, X } from 'lucide-react';
import { practices, questions, site } from './data/site';
import BrandIntro from './BrandIntro';

const navItems = [
  { href: '#escritorio', label: 'O escritório' },
  { href: '#areas', label: 'Áreas de atuação' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const;

function WhatsAppLink({ className = '', children = 'Falar pelo WhatsApp', area }: { className?: string; children?: React.ReactNode; area?: string }) {
  const href = area ? 'https://wa.me/5561986684723?text=' + encodeURIComponent(`Olá, gostaria de informações sobre o atendimento jurídico online em Direito ${area}.`) : site.whatsapp;
  return <motion.a className={`button ${className}`} href={href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: .98 }} transition={{ type: 'spring', stiffness: 420, damping: 28 }}><MessageCircle size={18} aria-hidden="true" />{children}</motion.a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (open) navRef.current?.querySelector('a')?.focus({ preventScroll: true });
  }, [open]);
  const closeMenu = () => { setOpen(false); menuRef.current?.focus(); };
  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && open) closeMenu(); }}>
    <div className="container header-inner">
      <motion.a href="#inicio" className="brand" aria-label="Marques Pimenta, início" whileHover={reducedMotion ? undefined : { x: 2 }} transition={{ duration: .18 }}><img src="/images/marca.jpg" alt="" width="42" height="42" /><span>Marques Pimenta</span></motion.a>
      <nav className="main-nav desktop-nav" aria-label="Navegação principal">
        {navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <WhatsAppLink className="header-action"><span className="header-action-label">WhatsApp</span></WhatsAppLink>
        <button ref={menuRef} className="menu-toggle icon-button" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
      <AnimatePresence initial={false} mode="wait">
        {open && <motion.nav ref={navRef} id="main-nav" className="main-nav mobile-nav" aria-label="Navegação principal" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: reducedMotion ? 0 : .24, ease: [0.23, 1, 0.32, 1] }}>
          {navItems.map(item => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        </motion.nav>}
      </AnimatePresence>
    </div>
  </header>;
}

function PracticeSection() {
  const [active, setActive] = useState(0);
  const [input, setInput] = useState<'none' | 'pointer' | 'keyboard'>('none');
  const reducedMotion = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activePractice = practices[active];
  return <section id="areas" className="practice-section" data-motion={input}>
    <div className="container">
      <div className="practice-heading"><span className="practice-eyebrow">Três pilares de atuação</span><h2>Áreas de atuação</h2><p>Escolha um pilar para conhecer o atendimento.</p></div>
      <div className="practice-layout">
        <div className="practice-tabs" role="tablist" aria-label="Áreas de atuação" onKeyDown={event => {
          const next = event.key === 'ArrowRight' ? (active + 1) % practices.length : event.key === 'ArrowLeft' ? (active + practices.length - 1) % practices.length : event.key === 'Home' ? 0 : event.key === 'End' ? practices.length - 1 : null;
          if (next !== null) { event.preventDefault(); setInput('keyboard'); setActive(next); tabRefs.current[next]?.focus(); }
        }}>
          {practices.map((practice, index) => <button key={practice.id} ref={element => { tabRefs.current[index] = element; }} id={`tab-${practice.id}`} type="button" role="tab" aria-selected={active === index} aria-controls={`panel-${practice.id}`} tabIndex={active === index ? 0 : -1} className={`practice-tab ${active === index ? 'is-selected' : ''}`} onClick={event => { if (active !== index) { setInput(event.detail > 0 ? 'pointer' : 'keyboard'); setActive(index); } }}>
            {active === index && <motion.span className="practice-tab-surface" layoutId="practice-selection" aria-hidden="true" transition={{ duration: reducedMotion || input !== 'pointer' ? 0 : 0.22, ease: [0.23, 1, 0.32, 1] }} />}
            <span className="practice-tab-art" aria-hidden="true"><img src="/images/pilar-gravura.webp" alt="" /></span>
            <span className="practice-tab-copy"><span className="practice-tab-label">{practice.label}</span><span className="practice-tab-focus">{practice.pillarFocus}</span></span>
            <span className="practice-tab-index" aria-hidden="true">0{index + 1}</span>
          </button>)}
        </div>
        <div className="practice-content">
          <AnimatePresence initial={false} mode="wait">
            <motion.div key={activePractice.id} id={`panel-${activePractice.id}`} role="tabpanel" aria-labelledby={`tab-${activePractice.id}`} tabIndex={0} className="practice-panel"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reducedMotion ? 0 : .24, ease: [0.23, 1, 0.32, 1] }}>
              <div className="practice-panel-marker" aria-hidden="true"><span>0{active + 1}</span><i /></div>
              <div className="practice-panel-copy"><span className="practice-panel-kicker">{activePractice.pillarFocus}</span><h3>{activePractice.title}</h3><p>{activePractice.description}</p>
                <ul className="practice-topics">{activePractice.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
                <WhatsAppLink className="button-primary" area={activePractice.label}>Falar sobre este assunto</WhatsAppLink>
              </div>
              <div className="practice-panel-art" aria-hidden="true"><img src="/images/pilar-gravura.webp" alt="" /></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  </section>;
}

function FAQSection() {
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(() => new Set());
  const reducedMotion = useReducedMotion();
  const toggleQuestion = (index: number) => setOpenQuestions(current => {
    const next = new Set(current);
    if (next.has(index)) next.delete(index); else next.add(index);
    return next;
  });
  return <section id="duvidas" className="faq-section container">
    <div className="faq-heading"><h2>Antes da primeira conversa.</h2><p>O que você precisa saber sobre o atendimento.</p></div>
    <div className="faq-list">
      {questions.map((item, index) => {
        const open = openQuestions.has(index);
        const panelId = `faq-panel-${index}`;
        const triggerId = `faq-trigger-${index}`;
        return <div key={item.question} className={`faq-item ${open ? 'is-open' : ''}`}>
          <h3><button id={triggerId} className="faq-summary" type="button" aria-expanded={open} aria-controls={panelId} onClick={() => toggleQuestion(index)}><span>{item.question}</span><ChevronDown size={20} aria-hidden="true" /></button></h3>
          <AnimatePresence initial={false}>
            {open && <motion.div key={panelId} id={panelId} className="faq-answer" role="region" aria-labelledby={triggerId}
              initial={reducedMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reducedMotion ? 0 : .22, ease: [0.23, 1, 0.32, 1] }}>
              <p>{item.answer}</p>
            </motion.div>}
          </AnimatePresence>
        </div>;
      })}
    </div>
  </section>;
}

function Footer() {
  return <footer id="contato" className="site-footer">
    <div className="container">
      <div className="footer-contact">
        <div><h2>Vamos conversar<br />sobre sua demanda.</h2><p>Informações e agendamento pelo WhatsApp.</p></div>
        <div className="contact-actions"><WhatsAppLink className="button-primary" /><a className="phone-link" href="tel:+5561986684723">(61) 98668-4723</a></div>
      </div>
      <div className="footer-info">
        <div className="footer-lawyer"><h3>Advogado responsável</h3><p>{site.person}<br />{site.registration}</p></div>
        <nav className="footer-nav" aria-label="Navegação do rodapé"><a href="#escritorio">O escritório</a><a href="#areas">Áreas de atuação</a><a href="#duvidas">Dúvidas sobre atendimento</a></nav>
        <div className="footer-location"><h3>Atendimento online</h3><p>Brasília e Distrito Federal</p><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Entrar em contato</a></div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">Marques <span>Pimenta</span></div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} Marques Pimenta.<br />Marques Pimenta é o nome da marca.</p><a className="back-top" href="#inicio">Voltar ao início<ArrowUp size={18} aria-hidden="true" /></a></div>
    </div>
  </footer>;
}

export default function App() {
  return <MotionConfig reducedMotion="user">
    <BrandIntro />
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <Header />
    <main id="conteudo">
      <section id="inicio" className="hero">
        <img className="hero-art" src="/images/brasilia-justica.webp" alt="" width="1536" height="1024" fetchPriority="high" />
        <div className="hero-copy">
          <h1>Marques <span>Pimenta</span></h1>
          <p className="hero-lead">Atendimento jurídico online<br />em Brasília e no Distrito Federal.</p>
          <ul className="hero-practices"><li>Trabalhista</li><li>Empresarial</li><li>Cível</li></ul>
          <WhatsAppLink className="button-primary" />
          <a className="hero-explore" href="#areas">Áreas de atuação<ChevronDown size={16} aria-hidden="true" /></a>
        </div>
      </section>
      <section id="escritorio" className="office-section container">
        <div className="office-copy">
          <h2>Um espaço para entender sua questão.</h2>
          <p>Uma dúvida no trabalho, um contrato ou uma questão da vida civil. O atendimento começa com uma conversa sobre o que aconteceu e a orientação jurídica de que você precisa.</p>
          <p>A Marques Pimenta atende pessoas e empresas online, em Brasília e no Distrito Federal. Pelo WhatsApp, você pode pedir informações e combinar o atendimento.</p>
          <div className="office-lawyer"><span>Advogado responsável</span><strong>{site.person}</strong><span>{site.registration}</span></div>
          <a className="office-link" href="#areas">Conheça as áreas de atuação<ChevronDown size={18} aria-hidden="true" /></a>
        </div>
      </section>
      <PracticeSection />
      <FAQSection />
    </main>
    <Footer />
  </MotionConfig>;
}
