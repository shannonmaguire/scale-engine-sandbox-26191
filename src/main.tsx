import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChecklistProvider } from "./components/checklist/ChecklistContext";
import { TooltipProvider } from "@/components/ui/tooltip";

createRoot(document.getElementById("root")!).render(
  <TooltipProvider delayDuration={150} skipDelayDuration={0}>
    <ChecklistProvider>
      <App />
    </ChecklistProvider>
  </TooltipProvider>
);
