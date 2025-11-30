import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileText, Settings, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useState } from "react";
import cwtLogo from "@/assets/cwt-logo-white.svg";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Failed to sign out");
    } else {
      toast.success("Signed out successfully");
      navigate("/auth");
    }
  };

  const navItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
    { icon: FileText, label: "Assessments", href: "/dashboard/assessments" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-50 bg-authority border-b border-white/10">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center">
            <img src={cwtLogo} alt="CWT Studio" className="h-8 w-auto" />
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-white"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex md:flex-col md:w-64 bg-authority border-r border-white/10 min-h-screen sticky top-0">
          <div className="p-6 border-b border-white/10">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img src={cwtLogo} alt="CWT Studio" className="h-8 w-auto" />
            </Link>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm transition-colors",
                    isActive(item.href)
                      ? "bg-white/10 text-white font-semibold"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-white/10">
            <Button
              onClick={handleSignOut}
              variant="ghost"
              className="w-full justify-start text-white/80 hover:text-white hover:bg-white/5"
            >
              <LogOut size={18} className="mr-3" />
              Sign Out
            </Button>
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsSidebarOpen(false)}>
            <aside
              className="absolute left-0 top-16 bottom-0 w-64 bg-authority border-r border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="p-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm transition-colors",
                        isActive(item.href)
                          ? "bg-white/10 text-white font-semibold"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <Icon size={18} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
                <Button
                  onClick={handleSignOut}
                  variant="ghost"
                  className="w-full justify-start text-white/80 hover:text-white hover:bg-white/5"
                >
                  <LogOut size={18} className="mr-3" />
                  Sign Out
                </Button>
              </div>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};