'use client';

import './sign-in-page.scss';
import MainHeading from '../../components/headings/main-heading/MainHeading';
import GlassCard from '@/app/components/glass-card/GlassCard';

export default function SignInPage() {
  return (
    <div className="app-sign-in-page">
      <GlassCard className="app-sign-in-page-glass-card">
        <MainHeading className="app-sign-in-page-heading" title={'Sign in'} />
      </GlassCard>
    </div>
  );
}
