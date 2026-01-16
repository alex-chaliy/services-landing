import { FeatureItem } from './FeaturesBlock.model';

import PlumbService1 from '../svg/PlumbService1';
import PlumbService2 from '../svg/PlumbService2';
import PlumbService3 from '../svg/PlumbService3';
import PlumbService4 from '../svg/PlumbService4';

export const DEFAULT_FEATURES: FeatureItem[] = [
  {
    id: 'feature-1',
    title: 'Emergency Repairs',
    description: 'Description for the Emergency Repairs',
    icon: <PlumbService1 />,
  },
  {
    id: 'feature-2',
    title: 'Drain Cleaning',
    description: 'Description for the Drain Cleaning',
    icon: <PlumbService2 />,
  },
  {
    id: 'feature-3',
    title: 'Water Heaters',
    description: 'Description for the Water Heaters',
    icon: <PlumbService3 />,
  },
  {
    id: 'feature-4',
    title: 'Leak Detection & More',
    description: 'Description for the Leak Detection & More',
    icon: <PlumbService4 />,
  },
];
