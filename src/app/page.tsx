'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/app/lib/auth';
import LandingNav from '@/app/components/landing/LandingNav';
import HeroSection from '@/app/components/landing/HeroSection';
import FeaturesSection from '@/app/components/landing/FeaturesSection';
import ETLProcessSection from '@/app/components/landing/ETLProcessSection';
import BenefitsSection from '@/app/components/landing/BenefitsSection';
import TestimonialsSection from '@/app/components/landing/TestimonialsSection';
import LandingFooter from '@/app/components/landing/LandingFooter';

export default function Home() {
  const router = useRouter();

  // Redirect to tracker if already authenticated
  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/tracker');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-white">
      <LandingNav />
      <HeroSection />
      <FeaturesSection />
      <ETLProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <LandingFooter />
    </div>
  );
}