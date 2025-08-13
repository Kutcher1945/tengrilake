'use client';

import { Star, Zap, Shield, BarChart3, Cpu, Database, GitBranch } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'AI-Powered Orchestration',
    description: 'Intelligent pipeline orchestration that adapts to your data patterns and automatically optimizes workflows for maximum efficiency.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Monitoring',
    description: 'Advanced monitoring dashboard with predictive analytics that identifies bottlenecks before they impact your operations.'
  },
  {
    icon: Shield,
    title: 'Intelligent Automation',
    description: 'Smart automation that learns from your team\'s patterns and proactively handles routine tasks, reducing manual intervention by 80%.'
  },
  {
    icon: Database,
    title: 'Unified Data Management',
    description: 'Seamlessly connect and manage data across multiple sources with our intelligent data lake architecture.'
  },
  {
    icon: Cpu,
    title: 'Machine Learning Integration',
    description: 'Built-in ML capabilities that enhance data processing with automated feature engineering and model deployment.'
  },
  {
    icon: GitBranch,
    title: 'Version Control & Lineage',
    description: 'Complete data lineage tracking with version control, ensuring transparency and reproducibility across all pipelines.'
  }
];

export default function AboutTengriLakeSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Cpu className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Next-Generation Data Platform</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionizing Data Engineering with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            TengriLake AI transforms complex data workflows into intelligent, self-managing systems. 
            Our platform combines AI-powered pipeline orchestration, real-time monitoring, and 
            intelligent automation to deliver unprecedented efficiency in data engineering.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center border border-blue-100">
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join the Data Engineering Revolution
          </h3>
          
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Over 500+ data teams trust TengriLake AI to power their most critical workflows. 
            Experience the future of data engineering today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-400 hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}