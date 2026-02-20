'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/app/lib/auth';
import LandingNav from '@/app/components/landing/LandingNav';
import HeroSection from '@/app/components/landing/HeroSection';
import ProblemSection from '@/app/components/landing/ProblemSection';
import SolutionSection from '@/app/components/landing/SolutionSection';
import ArchitectureSection from '@/app/components/landing/ArchitectureSection';
import UseCasesSection from '@/app/components/landing/UseCasesSection';
import DifferentiationSection from '@/app/components/landing/DifferentiationSection';
import PublicValueSection from '@/app/components/landing/PublicValueSection';
import FAQSection from '@/app/components/landing/FAQSection';
import FinalCTASection from '@/app/components/landing/FinalCTASection';
import LandingFooter from '@/app/components/landing/LandingFooter';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/tracker');
    }
  }, [router]);

  return (
    <div className="min-h-screen">
      <LandingNav />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ArchitectureSection />
      <UseCasesSection />
      <DifferentiationSection />
      <PublicValueSection />
      <FAQSection />
      <FinalCTASection />
      <LandingFooter />
    </div>
  );
}
