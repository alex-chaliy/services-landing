import './burger-menu-button.scss';
import cn from 'classnames';
import BurgerMenuIcon from '../../svg/BurgerMenuIcon';
import { memo } from 'react';

interface BurgerMenuButtonProps {
  className?: string;
}

export function BurgerMenuButton(props: BurgerMenuButtonProps) {
  const { className } = { ...props };
  const classNames = cn('burger-menu-button', className);
  // console.log('BurgerMenuButton rendered');
  return (
    <button className={classNames}>
      <span className="app-hover-layout">
        <span className="app-hl-more-pseudo" />
      </span>
      <span className="app-more-pseudo" />
      <BurgerMenuIcon className="menu-image" />
    </button>
  );
}

// BurgerMenuButton re-renders when ThmeSwitcher changed
// to prevent unnecessary re-renders use function memo
// function memo check if any props were changed in the current component
// and re-renders it only if any props were changed
// otherwise  skip rendering
export default memo(BurgerMenuButton);
