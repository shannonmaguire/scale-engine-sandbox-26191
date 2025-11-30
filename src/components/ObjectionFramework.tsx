import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { getTopObjections } from "@/data/objections";

// Get top 3 objections to display
const topObjections = getTopObjections(3);

export default function ObjectionFramework() {
  const { toast } = useToast();

  const copyResponse = (objection: typeof topObjections[0]) => {
    const fullText = `
OBJECTION: ${objection.objection}

RESPONSE SCRIPT:
${objection.responseScript}

DISCOVERY QUESTIONS:
${objection.fullFramework.discovery.map((q, i) => `${i + 1}. ${q}`).join('\n')}

PROOF POINTS:
${objection.fullFramework.proofPoints.map((p, i) => `• ${p}`).join('\n')}

NEXT STEPS:
${objection.fullFramework.nextSteps}

${objection.fullFramework.personaAngles ? `
PERSONA ANGLES:
• Technical: ${objection.fullFramework.personaAngles.technical}
• Business: ${objection.fullFramework.personaAngles.business}
• Executive: ${objection.fullFramework.personaAngles.executive}
` : ''}
    `.trim();

    navigator.clipboard.writeText(fullText);
    toast({
      title: "Response copied!",
      description: "Full objection framework copied to clipboard",
    });
  };

  return (
    <div className="space-y-6">
      {topObjections.map((objection) => (
        <Card key={objection.id} className="overflow-hidden">
          <CardContent className="p-8 space-y-6">
            {/* Objection Title */}
            <div>
              <h4 className="text-xl font-semibold mb-4">
                "{objection.objection}"
              </h4>
              
              {/* Response Script */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-primary">RESPONSE SCRIPT:</p>
                <p className="text-base text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/20">
                  {objection.responseScript}
                </p>
              </div>
            </div>

            {/* Full Framework (Always Visible) */}
            <div className="space-y-6 pt-6 border-t">
              {/* Discovery Questions */}
              <div>
                <p className="text-sm font-semibold mb-3">Discovery Questions:</p>
                <ul className="space-y-2">
                  {objection.fullFramework.discovery.map((question, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary font-medium">•</span>
                      {question}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proof Points */}
              <div>
                <p className="text-sm font-semibold mb-3">Proof Points:</p>
                <ul className="space-y-2">
                  {objection.fullFramework.proofPoints.map((point, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary font-medium">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Steps */}
              <div>
                <p className="text-sm font-semibold mb-2">Suggested Next Steps:</p>
                <p className="text-sm text-muted-foreground pl-4 border-l-2 border-primary/20">
                  {objection.fullFramework.nextSteps}
                </p>
              </div>
            </div>

            {/* Copy Button */}
            <div className="pt-4 border-t">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => copyResponse(objection)}
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy Full Response
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Link to Full Library */}
      <Card className="p-6 bg-muted/50 text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Need more objection responses? We have 15+ scenarios in the full library.
        </p>
        <Button variant="outline" asChild>
          <Link to="/ae-hub/objections">
            View Complete Objection Library
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </Card>
    </div>
  );
}
