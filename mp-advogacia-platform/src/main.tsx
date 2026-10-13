import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import '@fontsource/marcellus/latin-400.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-600.css';
import './styles/global.css';

const root = document.getElementById('root')!;
if (root.children.length) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
