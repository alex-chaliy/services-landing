'use client';

import './features-block.scss';
import cn from 'classnames';
import { FeatureItem } from './FeaturesBlock.model';

// gsap imports
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { animateFeaturesOnInit } from './animations';

export interface FeaturesBlockProps {
  className?: string;
  title?: string;
  features: FeatureItem[];
  layout?: 'grid' | 'list';
}

export default function FeaturesBlock(props: FeaturesBlockProps) {
  const { className, title, features, layout = 'grid' } = { ...props };
  const classNames = cn('app-features-block', `app-features-block--${layout}`, className);

  const animationsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateFeaturesOnInit();
    },
    {
      dependencies: [features, layout],
      scope: animationsContainerRef,
      revertOnUpdate: true,
    }
  );

  return (
    <div className={classNames} ref={animationsContainerRef}>
      {title && <h2 className="app-features-block__title">{title}</h2>}
      <div className="app-features-block__container">
        {features.map((feature) => (
          <div key={feature.id} className="app-features-block__item">
            {feature.icon && (
              <div className="app-features-block__icon">{feature.icon}</div>
            )}
            <h3 className="app-features-block__item-title">{feature.title}</h3>
            <p className="app-features-block__item-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
