import {
  Database,
  Zap,
  Plug,
  Shield,
  BarChart3,
  FileText,
  Users,
  Palette,
  Settings,
  Code,
  DollarSign,
  HeartHandshake,
  Target,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  // Technical Maturity Assessment
  "data-quality": Database,
  "automation": Zap,
  "integrations": Plug,
  "security": Shield,
  "reporting": BarChart3,
  "documentation": FileText,
  "user-adoption": Users,
  
  // Website Readiness
  "content": FileText,
  "design-assets": Palette,
  "technical": Settings,
  "stakeholder": HeartHandshake,
  
  // AE Qualification
  "technical-fit": Code,
  "budget-authority": DollarSign,
  "pain-points": Target,
  "opportunity": BarChart3,
};

interface CategoryIconProps {
  categoryId: string;
  className?: string;
}

export const CategoryIcon = ({ categoryId, className = "w-5 h-5" }: CategoryIconProps) => {
  const Icon = iconMap[categoryId] || FileText;
  return <Icon className={className} />;
};
