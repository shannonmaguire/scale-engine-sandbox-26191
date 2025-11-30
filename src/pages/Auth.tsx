import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import cwtLogoWhite from '@/assets/cwt-logo-white.svg';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { supabase } from '@/integrations/supabase/client';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if user is already logged in and redirect
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/');
      }
    };
    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: 'Error',
        description: 'Password must be at least 6 characters',
        variant: 'destructive',
      });
      return;
    }

    if (isSignUp && !fullName.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter your full name',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: {
              full_name: fullName,
            },
          },
        });

        if (error) throw error;

        toast({
          title: 'Account created',
          description: 'You can now sign in with your credentials',
        });
        
        // Switch to sign in mode
        setIsSignUp(false);
        setPassword('');
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        toast({
          title: 'Welcome back',
          description: 'You have been signed in successfully',
        });
        
        // Navigation handled by useEffect
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'An error occurred during authentication';
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <SEOHead
        title="CWT Studio Portal Access | Creator Wealth Tools Login"
        description="Sign in to the CWT Studio Creator Wealth Tools portal to manage business automation, Salesforce, and product delivery engagements."
        keywords={[
          'CWT Studio login',
          'Creator Wealth Tools portal',
          'business automation account access',
          'Salesforce service dashboard',
          'client portal authentication'
        ]}
        noindex
      />
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-card/20 -z-10" />

      {/* Back to home button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 md:top-8 md:left-8 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-2 flex items-center gap-2"
        aria-label="Back to home"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Home</span>
      </button>

      {/* Auth container */}
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8 md:mb-12">
          <img 
            src={cwtLogoWhite} 
            alt="CWT Studio"
            className="h-9 md:h-10 w-auto"
            width="200"
            height="40"
            loading="lazy"
            decoding="async"
            style={{ filter: 'drop-shadow(0 2px 16px rgba(104, 16, 56, 0.1))' }}
          />
        </div>

        {/* Auth card */}
        <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
          <div className="mb-6">
            <h1 className="font-mono text-xl md:text-2xl font-bold text-foreground mb-2">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h1>
            <p className="font-sans text-sm text-muted-foreground">
              {isSignUp 
                ? 'Enter your details to create your account' 
                : 'Enter your credentials to access your account'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name field (signup only) */}
            {isSignUp && (
              <div className="space-y-2">
                <Label 
                  htmlFor="fullName" 
                  className="font-mono text-sm font-medium text-foreground uppercase tracking-wide"
                >
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={isLoading}
                  required
                  className="h-11 font-sans"
                  autoComplete="name"
                />
              </div>
            )}

            {/* Email field */}
            <div className="space-y-2">
              <Label 
                htmlFor="email" 
                className="font-mono text-sm font-medium text-foreground uppercase tracking-wide"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
                className="h-11 font-sans"
                autoComplete="email"
              />
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <Label 
                htmlFor="password" 
                className="font-mono text-sm font-medium text-foreground uppercase tracking-wide"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
                minLength={6}
                className="h-11 font-sans"
                autoComplete={isSignUp ? 'new-password' : 'current-password'}
              />
              <p className="text-xs text-muted-foreground font-sans mt-1">
                Minimum 6 characters
              </p>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 font-mono font-bold uppercase tracking-wider"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Processing
                </span>
              ) : (
                isSignUp ? 'Create Account' : 'Sign In'
              )}
            </Button>

            {/* Toggle sign up/sign in */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:underline"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </form>

          {/* Forgot password */}
          {!isSignUp && (
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => {
                  toast({
                    title: 'Password Reset',
                    description: 'Password reset functionality coming soon',
                  });
                }}
                className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:underline"
              >
                Forgot password?
              </button>
            </div>
          )}
        </div>

        {/* Footer text */}
        <p className="text-center mt-6 font-mono text-xs text-muted-foreground uppercase tracking-wider">
          Revenue Infrastructure Platform
        </p>
      </div>
    </div>
  );
};

export default Auth;
