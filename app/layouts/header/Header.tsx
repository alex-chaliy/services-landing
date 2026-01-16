import './header.scss';
import TextButton from '../../components/buttons/text-button/TextButton';
import BurgerMenuButton from '../../components/buttons/burger-menu-button/BurgerMenuButton';
import Logo from '../../components/logo/Logo';

import { memo, useRef } from 'react';
// gsap imports
import { useGSAP } from '@gsap/react';
import { animateHeaderOnScroll } from './animations';

export function Header() {
  const headerAnimationsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateHeaderOnScroll();
    },
    {
      dependencies: [],
      scope: headerAnimationsContainer,
      revertOnUpdate: true,
    }
  );
  return (
    <div className="app-header-layout" ref={headerAnimationsContainer}>
      <header className="app-header">
        <div className="app-header__logo-wrap">
          <Logo className="app-header__logo" mode="link" />
        </div>
        <div className="app-header__nav-wrap">
          <TextButton className="app-header__text-button" title={'Blog'} mode={'link'} linkHref={'/blog'} />
          <TextButton className="app-header__text-button" title={'Contacts'} mode={'link'} linkHref={'/contacts'} />
          {/* <BurgerMenuButton className="app-header__menu-button" /> */}
        </div>
      </header>
    </div>
  );
}

export default memo(Header);
