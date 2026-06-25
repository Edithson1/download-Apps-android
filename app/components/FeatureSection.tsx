import Icon from './Icons';
import PhoneMockup from './PhoneMockup';
import type { Feature } from '../lib/features';

export default function FeatureSection({
  feature,
  reverse = false,
}: {
  feature: Feature;
  reverse?: boolean;
}) {
  return (
    <article className={reverse ? 'feature reverse' : 'feature'}>
      <div className="feature-body">
        <span className="feature-icon">
          <Icon name={feature.icon} />
        </span>
        <h3 className="feature-title">
          {feature.title}
          {feature.status === 'soon' && <span className="status-chip soon">Próximamente</span>}
        </h3>
        <p className="feature-text">{feature.text}</p>
        <ul className="feature-list">
          {feature.points.map((point) => (
            <li key={point}>
              <Icon name="check" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="feature-media">
        <PhoneMockup src={feature.screenshot} label={feature.screenLabel} hint={feature.title} />
      </div>
    </article>
  );
}
