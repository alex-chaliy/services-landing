import './header.scss';
import TextButton from '../../components/buttons/text-button/TextButton';
import BurgerMenuButton from '../../components/buttons/burger-menu-button/BurgerMenuButton';
import Logo from '../../components/logo/Logo';

import { memo, useRef } from 'react';
// gsap imports
import { useGSAP } from '@gsap/react';
import { animateButtonsOnInit, animateHeaderOnScroll } from './animations';

export function Header() {
  const headerAnimationsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateHeaderOnScroll();
      animateButtonsOnInit();
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

          <div className="app-header__logo-title">Plumbing Services</div>
        </div>
        <div className="app-header__nav-wrap">
          <TextButton className="app-header__text-button" title={'Home'} mode={'link'} linkHref={'/'} />
          <TextButton className="app-header__text-button" title={'About Us'} mode={'link'} linkHref={'/about-us'} />
          <TextButton className="app-header__text-button" title={'Services'} mode={'link'} linkHref={'/services'} />
          <TextButton className="app-header__text-button" title={'Pricing'} mode={'link'} linkHref={'/pricing'} />
          <TextButton
            className="app-header__text-button app-header__text-button--highlighted"
            title={'Get a Quote'}
            mode={'link'}
            linkHref={'/get-a-quote'}
            viewExtension="super-feature-button-3"
          />
          <BurgerMenuButton className="app-header__menu-button" />
        </div>
      </header>
    </div>
  );
}

export default memo(Header);
