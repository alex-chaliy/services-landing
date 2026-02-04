import './header.scss';
import TextButton from '../../components/buttons/text-button/TextButton';
import BurgerMenuButton from '../../components/buttons/burger-menu-button/BurgerMenuButton';
import Logo from '../../components/logo/Logo';
import HeaderMenuItems from './menu-items/HeaderMenuItems';
import cn from 'classnames';

import { memo, useRef, useState, useCallback } from 'react';
// gsap imports
import { useGSAP } from '@gsap/react';
import { animateButtonsOnInit, animateHeaderOnScroll } from './header.animations';
import { MENU_ITEMS } from './menu-items/HeaderMenuItems.constants';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback((): void => {
    setIsMobileMenuOpen((prev) => !prev);
  }, [isMobileMenuOpen]);

  return (
    <div
      className={cn('app-header-layout', {
        'app-header-layout--mobile-menu-opened': isMobileMenuOpen,
      })}
      ref={headerAnimationsContainer}
    >
      <div className={`
        app-header-layout__mob-menu-drop-shadow
        app-hide-on-more-md
      `} onClick={toggleMobileMenu} />

      <header className="app-header">
        <div className="app-header__content">
          <div className="app-header__logo-wrap">
            <Logo className="app-header__logo" mode="link" />

            <div className={`
              app-header__animated
              app-header__logo-title
              app-hide-on-md
            `}>
              Plumbing Services
            </div>
          </div>
          <div className="app-header__nav-wrap">
            <HeaderMenuItems
              items={MENU_ITEMS}
              className={`
                app-hide-on-md
              `}
            />

            <TextButton
              className={`
                app-header__animated
                app-header__text-button
                app-show-on-md
                app-hide-on-more-md
              `}
              title={'Get a Quote'}
              mode={'link'}
              linkHref={'/get-a-quote'}
              viewExtension="super-feature-button-3"
            />

            <BurgerMenuButton
              className={`
                app-header__animated
                app-header__menu-button
                app-show-on-md
                app-hide-on-more-md
              `}
              handleClick={toggleMobileMenu}
              isActive={isMobileMenuOpen}
            />
          </div>
        </div>
        <HeaderMenuItems
          items={MENU_ITEMS}
          className={`
            app-header__mobile-menu-items
            app-hide-on-more-md
          `}
        />
      </header>
    </div>
  );
}

export default memo(Header);
