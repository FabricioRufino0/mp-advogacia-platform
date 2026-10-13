import { renderToString } from 'react-dom/server';
import App from './App';
import PrivacyPage from './PrivacyPage';
export { site } from './data/site';

export function render() {
  return renderToString(<App />);
}

export function renderPrivacy() {
  return renderToString(<PrivacyPage />);
}
