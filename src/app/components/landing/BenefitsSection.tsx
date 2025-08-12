'use client';

import Link from 'next/link';
import { Cpu, Activity, Cloud, Brain, ChevronRight } from 'lucide-react';

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: Cpu,
    title: 'AI-Native Architecture',
    description: 'Built specifically for AI/ML workflows with intelligent task prioritization and resource optimization.',
    color: 'bg-blue-100'
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Track pipeline performance, data quality, and model metrics in real-time with advanced analytics.',
    color: 'bg-green-100'
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Scale',
    description: 'Seamlessly scale from prototype to production with cloud-native infrastructure and APIs.',
    color: 'bg-purple-100'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why TengriLake AI?
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const iconColor = benefit.icon === Cpu ? 'text-blue-600' : 
                                 benefit.icon === Activity ? 'text-green-600' : 'text-purple-600';
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${benefit.color} p-2 rounded-lg`}>
                      <Icon className={`h-6 w-6 ${iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to optimize your workflows?</h3>
              <p className="text-gray-600">Join data teams already using TengriLake AI</p>
            </div>
            <div className="space-y-4">
              <Link
                href="/login"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                Start Your Free Trial
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <p className="text-xs text-gray-500 text-center">
                No credit card required • 30-day free trial • Full feature access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}