import { CRED_BADGES } from '../lib/features';

export default function Credibility() {
  return (
    <div className="cred-badges">
      {CRED_BADGES.map((badge) => (
        <span key={badge.label} className="cred-badge">
          <strong>{badge.value}</strong> · {badge.label}
        </span>
      ))}
    </div>
  );
}
