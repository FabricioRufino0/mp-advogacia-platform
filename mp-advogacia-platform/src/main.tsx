import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import '@fontsource/libre-baskerville/latin-400.css';
import '@fontsource/source-sans-3/latin-400.css';
import '@fontsource/source-sans-3/latin-700.css';
import './styles/global.css';

const root = document.getElementById('root')!;
if (root.children.length) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
