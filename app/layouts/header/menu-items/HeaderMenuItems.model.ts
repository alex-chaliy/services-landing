import { TextButtonViewExtensions } from '@/app/components/buttons/text-button/TextButton.model';

export interface MenuItem {
  title: string;
  linkHref: string;
  viewExtension?: TextButtonViewExtensions;
}
