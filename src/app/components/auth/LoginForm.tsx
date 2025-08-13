'use client';

import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, BarChart3, Shield, Users, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Animation mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call with more realistic timing
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Demo credentials check
      if (formData.email === 'admin@crm.com' && formData.password === 'password123') {
        // In a real app, avoid localStorage for sensitive data
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('authToken', 'demo-token-123');
          sessionStorage.setItem('user', JSON.stringify({
            id: '1',
            name: 'Admin User',
            email: formData.email,
            role: 'admin'
          }));
        }
        
        router.push('/crm');
      } else {
        setErrors({ general: 'Invalid email or password. Please check your credentials and try again.' });
      }
    } catch (error) {
      setErrors({ general: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof LoginFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field-specific error when user starts typing
    if (errors[field as keyof LoginFormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white lg:bg-gray-50">
        <div className={`w-full max-w-md transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white lg:shadow-xl lg:border lg:border-gray-100 rounded-2xl p-8 lg:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
              <p className="text-gray-600">
                Sign in to your CRM account to continue
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-1 rounded-lg mr-2">
                  <AlertCircle className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-blue-900">Demo Credentials</h3>
              </div>
              <div className="text-xs text-blue-800 space-y-1 font-mono bg-white/50 rounded-lg p-3">
                <p><strong>Email:</strong> admin@crm.com</p>
                <p><strong>Password:</strong> password123</p>
              </div>
            </div>

            {/* Login Form */}
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {/* General Error */}
              {errors.general && (
                <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                    <p className="text-sm text-red-700">{errors.general}</p>
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className={`h-5 w-5 transition-colors duration-200 ${
                      errors.email ? 'text-red-400' : 'text-gray-400 group-focus-within:text-blue-500'
                    }`} />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 placeholder-gray-500 ${
                      errors.email 
                        ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                    placeholder="Enter your email address"
                    disabled={isLoading}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-600 animate-in fade-in slide-in-from-top-1 duration-200">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className={`h-5 w-5 transition-colors duration-200 ${
                      errors.password ? 'text-red-400' : 'text-gray-400 group-focus-within:text-blue-500'
                    }`} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`block w-full pl-10 pr-12 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 placeholder-gray-500 ${
                      errors.password 
                        ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                    placeholder="Enter your password"
                    disabled={isLoading}
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-50 rounded-r-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    disabled={isLoading}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="text-sm text-red-600 animate-in fade-in slide-in-from-top-1 duration-200">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors duration-200"
                    disabled={isLoading}
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-700 select-none">
                    Remember me for 30 days
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 focus:outline-none focus:underline"
                  disabled={isLoading}
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4 mr-2" />
                    Signing you in...
                  </>
                ) : (
                  'Sign in to CRM'
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="text-center mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 focus:outline-none focus:underline">
                  Contact your administrator
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Features/Benefits */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="flex flex-col justify-center px-12 py-12 relative z-10">
          <div className={`mb-12 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Transform Your <br />
              <span className="text-blue-200">Business Operations</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Streamline customer relationships, boost productivity, and drive growth with our comprehensive CRM platform.
            </p>
          </div>

          <div className={`space-y-8 mb-12 transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {[
              {
                icon: Users,
                title: 'Smart Contact Management',
                description: 'Centralize customer data with intelligent insights and automated workflows.'
              },
              {
                icon: CheckCircle,
                title: 'Advanced Task Automation',
                description: 'Streamline operations with AI-powered task prioritization and scheduling.'
              },
              {
                icon: BarChart3,
                title: 'Real-time Analytics',
                description: 'Make data-driven decisions with comprehensive reporting and forecasting.'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-level encryption and compliance with industry standards.'
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className={`flex items-start space-x-4 group transition-all duration-500 delay-${700 + index * 100} ${
                  mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="bg-blue-500/50 backdrop-blur-sm p-3 rounded-xl group-hover:bg-blue-400/60 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100/90 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={`pt-8 border-t border-blue-500/30 transition-all duration-1000 delay-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50K+</div>
                <div className="text-blue-200 text-sm font-medium">Happy Customers</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="text-blue-200 text-sm font-medium">Uptime SLA</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-blue-200 text-sm font-medium">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}