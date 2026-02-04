import { MenuItem } from './HeaderMenuItems.model';

export const MENU_ITEMS: MenuItem[] = [
  { title: 'Home', linkHref: '/' },
  { title: 'About Us', linkHref: '/about-us' },
  { title: 'Services', linkHref: '/services' },
  { title: 'Pricing', linkHref: '/pricing' },
  {
    title: 'Get a Quote',
    linkHref: '/get-a-quote',
    isHighlighted: true,
    viewExtension: 'super-feature-button-3',
  },
];
