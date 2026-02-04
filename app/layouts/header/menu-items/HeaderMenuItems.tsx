import './header-menu-items.scss';
import cn from 'classnames';
import { memo } from 'react';
import TextButton from '../../../components/buttons/text-button/TextButton';
import { MenuItem } from './HeaderMenuItems.model';

interface HeaderMenuItemsProps {
  items?: MenuItem[];
  className?: string;
}

export function HeaderMenuItems(props: HeaderMenuItemsProps) {
  const { items, className } = props;
  return (
    <div className={cn('app-header__menu-items', className)}>
      {items?.map((item) => (
        <TextButton
          key={item.linkHref}
          className="app-header__animated app-header__text-button"
          title={item.title}
          mode={'link'}
          linkHref={item.linkHref}
          viewExtension={item.viewExtension}
        />
      ))}
    </div>
  );
}

export default memo(HeaderMenuItems);
