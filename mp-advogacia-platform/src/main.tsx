import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import '@fontsource/newsreader/latin-400.css';
import '@fontsource/newsreader/latin-400-italic.css';
import '@fontsource/public-sans/latin-400.css';
import '@fontsource/public-sans/latin-600.css';
import '@fontsource/public-sans/latin-700.css';
import './styles/global.css';

const root = document.getElementById('root')!;
if (root.children.length) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
