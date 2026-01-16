'use client';

import './main-screen.scss';
import cn from 'classnames';
import { memo } from 'react';

// gsap imports
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import MainHeading from '@/app/components/headings/main-heading/MainHeading';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '@/app/components/logo/Logo';
import {
  animateActionButtonOnInit,
  animateHeadingOnInit,
  animateHeadingsOnScroll,
} from './animations';
import TextButton from '@/app/components/buttons/text-button/TextButton';
import GlassCard from '@/app/components/glass-card/GlassCard';
gsap.registerPlugin(ScrollTrigger);

interface MainScreenProps {
  className?: string;
}

export function MainScreen(props: MainScreenProps) {
  const { className } = { ...props };
  const classNames = cn('app-main-screen', className);
  const iconSpriteNumbers = [...Array(5).keys()];

  const mainScreenAnimationsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateHeadingOnInit();
      animateHeadingsOnScroll();
      animateActionButtonOnInit();
    },
    {
      dependencies: [],
      scope: mainScreenAnimationsContainer,
      revertOnUpdate: true,
    }
  );

  return (
    <div className={classNames} ref={mainScreenAnimationsContainer} id="app-main-screen">
      <div className="app-main-screen__icon-sprites">
        {iconSpriteNumbers.map((i: number) => (
          <div className={`app-main-screen__icon-sprite app-main-screen__icon-sprite-${i + 1}`} key={i + 1} />
        ))}
      </div>

      <div className="app-main-screen__darkener"></div>

      <div className="app-main-screen__content">
        <GlassCard className="app-main-screen__glass-card app-main-screen__action-box">
          <div className="app-main-screen__headings">
            <MainHeading
              title="Reliable Plumber Services"
              className="app-main-screen__heading app-main-screen__heading-1"
            />
            <MainHeading
              title="Your Trusted Local Plumber"
              className="app-main-screen__heading app-main-screen__heading-2"
            />
          </div>

          <TextButton
            className="app-main-screen__action-button"
            title={'Request Service'}
            viewExtension="super-feature-button"
            size="xlg"
          />
        </GlassCard>

      </div>
    </div>
  );
}

export default memo(MainScreen);
