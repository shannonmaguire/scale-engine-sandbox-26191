import jsPDF from "jspdf";

type AssessmentAnswer = "yes" | "partial" | "no" | null;

interface CategoryData {
  id: string;
  title: string;
  items: Array<{ id: string; label: string }>;
}

interface PDFGeneratorOptions {
  title: string;
  checklistId: string;
  categories: CategoryData[];
  checklistState: Record<string, Record<string, AssessmentAnswer>>;
  overallProgress: number;
}

export const generateAssessmentPDF = async ({
  title,
  checklistId,
  categories,
  checklistState,
  overallProgress
}: PDFGeneratorOptions): Promise<void> => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  const checkForNewPage = (spaceNeeded: number = 20) => {
    if (yPosition > pageHeight - spaceNeeded) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // === COVER PAGE ===
  yPosition = 40;

  // Company Name
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  doc.text("CWT STUDIO", margin, yPosition);
  yPosition += 20;

  // Main Title
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  const titleLines = doc.splitTextToSize(title, contentWidth);
  titleLines.forEach((line: string) => {
    doc.text(line, margin, yPosition);
    yPosition += 10;
  });
  yPosition += 5;

  // Subtitle
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  doc.text("Technical Maturity Assessment Report", margin, yPosition);
  yPosition += 30;

  // Score Box - plain
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  doc.text("OVERALL MATURITY SCORE", margin, yPosition);
  yPosition += 10;

  // Score Value
  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text(`${overallProgress}%`, margin, yPosition);
  yPosition += 15;

  // Metrics
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const allAnswers = categories.flatMap(cat => 
    cat.items.map(item => checklistState[checklistId]?.[item.id])
  );
  const yesCount = allAnswers.filter(a => a === "yes").length;
  const partialCount = allAnswers.filter(a => a === "partial").length;
  const noCount = allAnswers.filter(a => a === "no").length;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  doc.text(`${yesCount} Yes, ${partialCount} Partial, ${noCount} No (${totalItems} total)`, margin, yPosition);
  yPosition += 25;

  // Separator line
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 15;

  // Metadata
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })}`, margin, yPosition);
  yPosition += 5;
  doc.text(`Report ID: ${checklistId.toUpperCase()}-${Date.now().toString(36).toUpperCase()}`, margin, yPosition);

  // === EXECUTIVE SUMMARY ===
  doc.addPage();
  yPosition = margin;

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Executive Summary", margin, yPosition);
  yPosition += 12;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  
  const summaryText = `This assessment evaluates your organization's technical maturity across critical business systems. The analysis identifies opportunities to enhance operational efficiency, system scalability, and revenue generation through systematic infrastructure improvements.\n\nThe framework examines key dimensions including data infrastructure, process automation, system integration, and operational governance. Each criterion represents validated best practices from successful deployments.`;
  
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  summaryLines.forEach((line: string) => {
    doc.text(line, margin, yPosition);
    yPosition += 5;
  });

  yPosition += 12;

  // Key Findings - plain
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("KEY FINDINGS", margin, yPosition);
  yPosition += 8;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);

  const findings = [
    `${yesCount} capabilities fully operational, ${partialCount} partially implemented`,
    `${noCount} high-priority improvement opportunities identified`,
    `${categories.length} capability dimensions assessed`
  ];

  findings.forEach((finding, index) => {
    doc.text(`• ${finding}`, margin, yPosition);
    yPosition += 6;
  });

  yPosition += 15;

  // === CATEGORY PERFORMANCE ===
  doc.addPage();
  yPosition = margin;

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Category Performance", margin, yPosition);
  yPosition += 15;

  // Table header
  const tableStartY = yPosition;
  const colWidths = [85, 40, 40];
  const rowHeight = 12;
  
  // Header row
  doc.setFillColor(139, 0, 0);
  doc.rect(margin, yPosition, contentWidth, rowHeight, 'F');
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("Category", margin + 5, yPosition + 8);
  doc.text("Performance", margin + colWidths[0] + 5, yPosition + 8);
  doc.text("Criteria Met", margin + colWidths[0] + colWidths[1] + 5, yPosition + 8);
  
  yPosition += rowHeight;

  // Data rows
  categories.forEach((category, index) => {
    const catItems = category.items.length;
    const catAnswers = category.items.map(item => checklistState[checklistId]?.[item.id]);
    const catScore = catAnswers.reduce((sum, answer) => {
      if (answer === "yes") return sum + 100;
      if (answer === "partial") return sum + 50;
      return sum;
    }, 0);
    const catProgress = catItems > 0 ? Math.round(catScore / (catItems * 100) * 100) : 0;
    const catCompleted = catAnswers.filter(a => a === "yes").length;
    const catPartial = catAnswers.filter(a => a === "partial").length;

    // Alternating row colors
    if (index % 2 === 0) {
      doc.setFillColor(250, 250, 250);
      doc.rect(margin, yPosition, contentWidth, rowHeight, 'F');
    }
    
    // Border
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.5);
    doc.rect(margin, yPosition, contentWidth, rowHeight, 'S');

    // Category name
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text(category.title, margin + 5, yPosition + 8);

    // Performance with color
    doc.setFont("helvetica", "bold");
    if (catProgress >= 75) {
      doc.setTextColor(34, 139, 34);
    } else if (catProgress >= 50) {
      doc.setTextColor(255, 140, 0);
    } else {
      doc.setTextColor(200, 50, 50);
    }
    doc.text(`${catProgress}%`, margin + colWidths[0] + 5, yPosition + 8);

    // Criteria met
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    doc.text(`${catCompleted} of ${catItems} criteria met`, margin + colWidths[0] + colWidths[1] + 5, yPosition + 8);

    yPosition += rowHeight;
  });

  yPosition += 10;

  // === DETAILED CRITERIA ===
  doc.addPage();
  yPosition = margin;

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Assessment Criteria", margin, yPosition);
  yPosition += 12;

  categories.forEach((category, catIndex) => {
    checkForNewPage(20);

    // Category Header - plain
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(`${catIndex + 1}. ${category.title}`, margin, yPosition);
    yPosition += 10;

    // Items - plain text style
    category.items.forEach((item) => {
      checkForNewPage(10);

      const answer = checklistState[checklistId]?.[item.id];
      
      // Simple status indicator
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(0, 0, 0);
      
      let status = "[ ]";
      if (answer === "yes") status = "[✓]";
      else if (answer === "partial") status = "[~]";
      else if (answer === "no") status = "[✗]";
      
      doc.text(status, margin, yPosition);

      // Item Text
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(0, 0, 0);
      
      const itemLines = doc.splitTextToSize(item.label, contentWidth - 15);
      itemLines.forEach((line: string, idx: number) => {
        doc.text(line, margin + 10, yPosition + (idx * 4));
      });

      yPosition += Math.max(itemLines.length * 4, 6);
    });

    yPosition += 10;
  });

  // === RECOMMENDATIONS ===
  doc.addPage();
  yPosition = margin;

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Recommendations", margin, yPosition);
  yPosition += 12;

  const recommendations = [
    {
      title: "Prioritize High-Impact Items",
      text: "Focus on unchecked criteria that directly impact revenue and customer experience."
    },
    {
      title: "Develop Implementation Roadmap",
      text: "Create a phased approach addressing technical gaps based on business value and complexity."
    },
    {
      title: "Establish Governance Standards",
      text: "Implement formal change management and documentation to prevent future technical debt."
    },
    {
      title: "Invest in Team Enablement",
      text: "Ensure your team has the training and resources to maintain system improvements long-term."
    }
  ];

  recommendations.forEach((rec, index) => {
    checkForNewPage(30);

    // Box
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.rect(margin, yPosition, contentWidth, 28, 'S');

    // Number
    const circleX = margin + 8;
    const circleY = yPosition + 8;
    doc.setFillColor(0, 0, 0);
    doc.circle(circleX, circleY, 5, 'F');
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(`${index + 1}`, circleX, yPosition + 11, { align: 'center' });

    // Title
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(rec.title, margin + 18, yPosition + 10);

    // Text
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    const recLines = doc.splitTextToSize(rec.text, contentWidth - 25);
    recLines.forEach((line: string, idx: number) => {
      doc.text(line, margin + 18, yPosition + 18 + (idx * 4));
    });

    yPosition += 35;
  });

  // === FOOTER ON ALL PAGES ===
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);

    const footerY = pageHeight - 12;

    // Page number only - plain
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text(`Page ${i} of ${pageCount}`, pageWidth / 2, footerY, { align: 'center' });
  }

  // Save
  const fileName = `CWT-Studio-Assessment-${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};
