import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

export default function BrandIntro() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();
  const finish = () => document.documentElement.removeAttribute('data-intro');
  const skip = () => { finish(); setVisible(false); };

  useEffect(() => {
    const dismiss = () => {
      document.documentElement.removeAttribute('data-intro');
      setVisible(false);
    };
    if (reducedMotion || window.location.hash) {
      dismiss();
      return;
    }
    const timer = window.setTimeout(() => setVisible(false), 850);
    window.addEventListener('keydown', dismiss);
    window.addEventListener('wheel', dismiss, { passive: true });
    window.addEventListener('touchstart', dismiss, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', dismiss);
      window.removeEventListener('wheel', dismiss);
      window.removeEventListener('touchstart', dismiss);
    };
  }, [reducedMotion]);

  return <AnimatePresence onExitComplete={finish}>
    {visible && <motion.div
      key="brand-intro"
      className="brand-intro"
      initial={false}
      exit={{ transform: 'translateY(-100%)' }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
    >
      <img src="/images/marca-440.webp" alt="" width="220" height="220" fetchPriority="high" onError={skip} />
      <button type="button" onClick={skip}>Pular apresentação</button>
    </motion.div>}
  </AnimatePresence>;
}
