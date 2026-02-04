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
import {
  animateActionBoxOnInit,
  animateActionButtonOnInit,
  animateHeadingOnInit,
  animatePlumberOnInit,
  animatePlumberOnScroll,
  loopAnimationButtonCallNow,
} from './main-screen.animations';
import TextButton from '@/app/components/buttons/text-button/TextButton';
import GlassCard from '@/app/components/glass-card/GlassCard';
import SubHeading from '@/app/components/headings/sub-heading/SubHeading';
import PhoneIcon from '@/app/components/svg/PhoneIcon';
import FeaturesBlock from '@/app/components/features-block/FeaturesBlock';
import { DEFAULT_FEATURES } from '@/app/components/features-block/FeaturesBlock.constants';
gsap.registerPlugin(ScrollTrigger);

interface MainScreenProps {
  className?: string;
}

export function MainScreen(props: MainScreenProps) {
  const { className } = { ...props };
  const classNames = cn('app-main-screen', className);

  const mainScreenAnimationsContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateActionBoxOnInit();

      animateHeadingOnInit();

      animateActionButtonOnInit();
      loopAnimationButtonCallNow();

      animatePlumberOnInit();
      animatePlumberOnScroll();
    },
    {
      dependencies: [],
      scope: mainScreenAnimationsContainer,
      revertOnUpdate: true,
    }
  );

  return (
    <div className={classNames} ref={mainScreenAnimationsContainer} id="app-main-screen">
      <div className="app-main-screen__darkener"></div>

      <div className="app-main-screen__content">
        <div className="app-main-screen__action-section">
          <GlassCard className="app-main-screen__action-box app-main-screen__glass-card">
            <div className="app-main-screen__headings">
              <MainHeading
                title="Reliable Plumber Services"
                className="app-main-screen__heading app-main-screen__heading-1"
              />
              <SubHeading
                title="Your Trusted Local Plumber"
                className="app-main-screen__heading app-main-screen__heading-2"
                size="md"
              />
            </div>

            <div className="app-main-screen__action-buttons">
              <TextButton
                className="app-main-screen__action-button"
                title={'Request Service'}
                viewExtension="super-feature-button"
                size="xlg"
              />
              <TextButton
                className="app-main-screen__action-button app-main-screen__action-button--call-now"
                title={'Request Service'}
                viewExtension="super-feature-button-2"
                size="xlg"
              >
                <span className="app-text-button__title app-text-button__title-1">
                  Call Now
                </span>
                <span className="app-text-button__title app-text-button__title-2">
                  <PhoneIcon className="app-main-screen__phone-icon" />
                  123-456-7890
                </span>
              </TextButton>
            </div>
          </GlassCard>
          <div className="app-main-screen__plumber">
            <img src="/img/plumber.png" alt="" className="app-main-screen__plumber-img" />
          </div>
        </div>

        <div className="app-main-screen__features-section">
          <GlassCard className="app-main-screen__features-box app-main-screen__glass-card">
            <FeaturesBlock features={[...DEFAULT_FEATURES]} />
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

export default memo(MainScreen);
