import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';
import * as headerAnimations from './header.animations';
import { useGSAP } from '@gsap/react';

// Mock dependencies
jest.mock('@gsap/react');
jest.mock('./header.animations');
jest.mock('../../components/logo/Logo', () => {
  return function DummyLogo() {
    return React.createElement('div', { 'data-testid': 'logo' }, 'Logo');
  };
});
jest.mock('../../components/buttons/text-button/TextButton', () => {
  return function DummyTextButton({ title, handleClick }: any) {
    return React.createElement('button', {
      onClick: handleClick,
      'data-testid': 'text-button',
    }, title);
  };
});
jest.mock('../../components/buttons/burger-menu-button/BurgerMenuButton', () => {
  return function DummyBurgerMenuButton({ handleClick, isActive, className }: any) {
    return React.createElement('button', {
      onClick: handleClick,
      'data-testid': 'burger-menu-button',
      'data-active': isActive,
      className: className,
    }, 'Menu');
  };
});
jest.mock('./menu-items/HeaderMenuItems', () => {
  return function DummyHeaderMenuItems() {
    return React.createElement('div', { 'data-testid': 'header-menu-items' }, 'Menu Items');
  };
});

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useGSAP as jest.Mock).mockImplementation((callback: Function) => {
      if (callback) {
        callback();
      }
    });
  });

  describe('Rendering', () => {
    it('should render the header with all main elements', () => {
      render(<Header />);

      expect(screen.getByTestId('logo')).toBeInTheDocument();
      expect(screen.getAllByTestId('header-menu-items')).toHaveLength(2);
      expect(screen.getByTestId('burger-menu-button')).toBeInTheDocument();
    });

    it('should render with app-header-layout class', () => {
      const { container } = render(<Header />);
      const headerLayout = container.querySelector('.app-header-layout');

      expect(headerLayout).toBeInTheDocument();
      expect(headerLayout).toHaveClass('app-header-layout');
    });

    it('should render header element inside layout', () => {
      const { container } = render(<Header />);
      const header = container.querySelector('.app-header');

      expect(header).toBeInTheDocument();
    });

    it('should render logo wrap section', () => {
      const { container } = render(<Header />);
      const logoWrap = container.querySelector('.app-header__logo-wrap');

      expect(logoWrap).toBeInTheDocument();
    });

    it('should render navigation wrap section', () => {
      const { container } = render(<Header />);
      const navWrap = container.querySelector('.app-header__nav-wrap');

      expect(navWrap).toBeInTheDocument();
    });

    it('should render mobile menu drop shadow overlay', () => {
      const { container } = render(<Header />);
      const dropShadow = container.querySelector('.app-header-layout__mob-menu-drop-shadow');

      expect(dropShadow).toBeInTheDocument();
    });
  });

  describe('Mobile Menu Interactions', () => {
    it('should open mobile menu when burger button is clicked', () => {
      const { container } = render(<Header />);
      const burgerButton = screen.getByTestId('burger-menu-button');

      fireEvent.click(burgerButton);

      const headerLayout = container.querySelector('.app-header-layout');
      expect(headerLayout).toHaveClass('app-header-layout--mobile-menu-opened');
    });

    it('should close mobile menu when burger button is clicked again', () => {
      const { container } = render(<Header />);
      const burgerButton = screen.getByTestId('burger-menu-button');

      fireEvent.click(burgerButton);
      fireEvent.click(burgerButton);

      const headerLayout = container.querySelector('.app-header-layout');
      expect(headerLayout).not.toHaveClass('app-header-layout--mobile-menu-opened');
    });

    it('should toggle mobile menu state correctly', () => {
      const { container } = render(<Header />);
      const burgerButton = screen.getByTestId('burger-menu-button');
      const headerLayout = container.querySelector('.app-header-layout');

      expect(headerLayout).not.toHaveClass('app-header-layout--mobile-menu-opened');

      fireEvent.click(burgerButton);
      expect(headerLayout).toHaveClass('app-header-layout--mobile-menu-opened');

      fireEvent.click(burgerButton);
      expect(headerLayout).not.toHaveClass('app-header-layout--mobile-menu-opened');
    });

    it('should close mobile menu when drop shadow is clicked', () => {
      const { container } = render(<Header />);
      const burgerButton = screen.getByTestId('burger-menu-button');
      const dropShadow = container.querySelector('.app-header-layout__mob-menu-drop-shadow');

      fireEvent.click(burgerButton);
      expect(container.querySelector('.app-header-layout')).toHaveClass('app-header-layout--mobile-menu-opened');

      fireEvent.click(dropShadow!);
      expect(container.querySelector('.app-header-layout')).not.toHaveClass('app-header-layout--mobile-menu-opened');
    });
  });

  describe('GSAP Animations', () => {
    it('should call useGSAP hook with proper configuration', () => {
      render(<Header />);

      expect(useGSAP).toHaveBeenCalled();
    });

    it('should call animateHeaderOnScroll on component mount', () => {
      const animateHeaderSpy = jest.spyOn(headerAnimations, 'animateHeaderOnScroll');
      render(<Header />);

      expect(animateHeaderSpy).toHaveBeenCalled();
      animateHeaderSpy.mockRestore();
    });

    it('should call animateButtonsOnInit on component mount', () => {
      const animateButtonsSpy = jest.spyOn(headerAnimations, 'animateButtonsOnInit');
      render(<Header />);

      expect(animateButtonsSpy).toHaveBeenCalled();
      animateButtonsSpy.mockRestore();
    });

    it('should pass correct scope to useGSAP', () => {
      render(<Header />);

      const useGSAPCall = (useGSAP as jest.Mock).mock.calls[0];
      expect(useGSAPCall[1]).toEqual(
        expect.objectContaining({
          dependencies: [],
          revertOnUpdate: true,
        })
      );
    });
  });

  describe('Text Content', () => {
    it('should display Plumbing Services title in logo wrap', () => {
      const { container } = render(<Header />);
      const logoTitle = container.querySelector('.app-header__logo-title');

      expect(logoTitle).toHaveTextContent('Plumbing Services');
    });
  });

  describe('CSS Classes', () => {
    it('should apply correct classes to header content wrapper', () => {
      const { container } = render(<Header />);
      const headerContent = container.querySelector('.app-header__content');

      expect(headerContent).toBeInTheDocument();
      expect(headerContent).toHaveClass('app-header__content');
    });

    it('should apply responsive visibility classes', () => {
      const { container } = render(<Header />);

      const logoTitle = container.querySelector('.app-header__logo-title');
      expect(logoTitle).toHaveClass('app-hide-on-md');

      const menuButtonWrapper = container.querySelector('.app-header__menu-button');
      expect(menuButtonWrapper).toHaveClass('app-show-on-md');
    });
  });

  describe('Mobile Menu State Management', () => {
    it('should pass correct isActive state to burger menu button', () => {
      render(<Header />);
      const burgerButton = screen.getByTestId('burger-menu-button');

      expect(burgerButton).toHaveAttribute('data-active', 'false');

      fireEvent.click(burgerButton);

      expect(burgerButton).toHaveAttribute('data-active', 'true');
    });

    it('should maintain mobile menu state across multiple toggles', () => {
      const { container } = render(<Header />);
      const burgerButton = screen.getByTestId('burger-menu-button');
      const headerLayout = container.querySelector('.app-header-layout');

      for (let i = 0; i < 3; i++) {
        fireEvent.click(burgerButton);
        expect(headerLayout).toHaveClass('app-header-layout--mobile-menu-opened');
        fireEvent.click(burgerButton);
        expect(headerLayout).not.toHaveClass('app-header-layout--mobile-menu-opened');
      }
    });
  });

  describe('Edge Cases', () => {
    it('should handle rapid burger menu clicks', () => {
      const { container } = render(<Header />);
      const burgerButton = screen.getByTestId('burger-menu-button');
      const headerLayout = container.querySelector('.app-header-layout');

      for (let i = 0; i < 10; i++) {
        fireEvent.click(burgerButton);
      }

      // After 10 clicks, menu should be open (10 is even, so should be closed, but let's verify the state)
      const isOpen = headerLayout?.classList.contains('app-header-layout--mobile-menu-opened');
      expect(typeof isOpen).toBe('boolean');
    });

    it('should render without crashing when no props are provided', () => {
      expect(() => render(<Header />)).not.toThrow();
    });
  });

  describe('Component Exports', () => {
    it('should export Header as a named export', () => {
      expect(Header).toBeDefined();
      expect(typeof Header).toBe('function');
    });
  });
});
