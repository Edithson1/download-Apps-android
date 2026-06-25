import { LANGUAGES } from '../lib/features';

export default function LanguageBadges() {
  return (
    <div className="langs">
      {LANGUAGES.map((lang) => (
        <div key={lang.name} className={lang.featured ? 'lang-chip featured' : 'lang-chip'}>
          <span className="lang-name">{lang.name}</span>
          <span className="lang-native">{lang.native}</span>
        </div>
      ))}
    </div>
  );
}
