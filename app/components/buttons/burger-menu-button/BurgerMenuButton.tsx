import './burger-menu-button.scss';
import cn from 'classnames';
import BurgerMenuIcon from '../../svg/BurgerMenuIcon';
import { memo } from 'react';

interface BurgerMenuButtonProps {
  className?: string;
  handleClick?: () => void;
  isActive?: boolean;
}

export function BurgerMenuButton(props: BurgerMenuButtonProps) {
  const { className, handleClick, isActive } = { ...props };
  const classNames = cn('burger-menu-button', className, {
    'burger-menu-button--active': isActive,
  });

  // console.log('BurgerMenuButton rendered');
  return (
    <button className={classNames} onClick={handleClick}>
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
