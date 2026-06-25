import Icon from './Icons';
import type { MoreFeature } from '../lib/features';

export default function FeatureCard({ item }: { item: MoreFeature }) {
  return (
    <div className="card">
      <span className="feature-icon">
        <Icon name={item.icon} />
      </span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
}
