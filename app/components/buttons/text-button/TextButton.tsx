'use client';

import './text-button.scss';
import cn from 'classnames';
import { UIElementSizes } from '../../../models/UIElementSizes.model';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  TextButtonHtmlTypes,
  TextButtonModes,
  TextButtonPlaceOnBGTypes,
  TextButtonViewExtensions,
} from './TextButton.model';
import {
  DEFAULT_PLACE_ON_BG,
  DEFAULT_TEXT_BUTTON_HTML_TYPE,
  DEFAULT_TEXT_BUTTON_MODE,
} from './TextButton.constants';

interface TextButtonProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  size?: UIElementSizes;

  mode?: TextButtonModes;
  handleClick?: () => void; // works with mode 'button'
  linkHref?: string; // works with mode 'link'
  linkTarget?: string;

  placeOnBg?: TextButtonPlaceOnBGTypes;

  type?: TextButtonHtmlTypes; // works with mode 'button'

  viewExtension?: TextButtonViewExtensions;
}

export default function TextButton(props: TextButtonProps) {
  const {
    title,
    children,
    className,
    size = 'default-size',
    mode = DEFAULT_TEXT_BUTTON_MODE,
    handleClick,
    linkHref = '',
    linkTarget,
    placeOnBg = DEFAULT_PLACE_ON_BG,
    type = DEFAULT_TEXT_BUTTON_HTML_TYPE,
    viewExtension = 'default-view-extension',
  } = { ...props };

  const isLinkActive = usePathname() === linkHref;

  const classNames = cn(
    'app-text-button',
    className,
    `app-text-button-${size}`,
    `app-text-button-mode-${mode}`,
    `app-text-button-place-on-bg-${placeOnBg}`,
    {
      'app-link-active': isLinkActive,
    },
    `app-text-button-${viewExtension}`
  );

  if (mode === 'link') {
    return (
      <Link className={classNames} href={linkHref} target={linkTarget}>
        <span className="app-text-button__animations-container">
          <span className="app-hover-layout">
            <span className="app-hl-more-pseudo" />
          </span>
          <span className="app-more-pseudo"></span>
          {!children && <span className="app-text-button__title">{title}</span>}
          {children && <span className="app-text-button__children">{children}</span>}
        </span>
      </Link>
    );
  }

  return (
    <button className={classNames} onClick={handleClick} type={type}>
      <span className="app-text-button__animations-container">
        <span className="app-hover-layout">
          <span className="app-hl-more-pseudo" />
        </span>
        <span className="app-more-pseudo"></span>
        {!children && <span className="app-text-button__title">{title}</span>}
        {children && <span className="app-text-button__children">{children}</span>}
      </span>
    </button>
  );
}
