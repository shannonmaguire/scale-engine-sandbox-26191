import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
interface BackButtonProps {
  to: string;
  children?: React.ReactNode;
}
export const BackButton = ({
  to,
  children = "Back"
}: BackButtonProps) => {
  return <div className="spacing-tight">
      <Button variant="ghost" size="sm" asChild>
        
      </Button>
    </div>;
};