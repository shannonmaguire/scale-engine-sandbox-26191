import jsPDF from "jspdf";

interface CategoryData {
  id: string;
  title: string;
  items: Array<{ id: string; label: string }>;
}

interface PDFGeneratorOptions {
  title: string;
  checklistId: string;
  categories: CategoryData[];
  checklistState: Record<string, Record<string, boolean>>;
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
  yPosition = 60;

  // Company Name
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("CWT STUDIO", margin, yPosition);
  yPosition += 6;

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text("TECHNICAL SYSTEMS & REVENUE INFRASTRUCTURE", margin, yPosition);
  yPosition += 30;

  // Main Title
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  const titleLines = doc.splitTextToSize(title, contentWidth);
  titleLines.forEach((line: string) => {
    doc.text(line, margin, yPosition);
    yPosition += 12;
  });
  yPosition += 10;

  // Subtitle
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  doc.text("Technical Maturity Assessment Report", margin, yPosition);
  yPosition += 50;

  // Score Box
  const boxWidth = contentWidth;
  const boxHeight = 70;
  
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(2);
  doc.rect(margin, yPosition, boxWidth, boxHeight, 'S');

  // Score Label
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(120, 120, 120);
  doc.text("OVERALL MATURITY SCORE", margin + 15, yPosition + 15);

  // Score Value
  doc.setFontSize(48);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text(`${overallProgress}%`, margin + 15, yPosition + 45);

  // Metrics
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const completedCount = categories.reduce((sum, cat) => 
    sum + cat.items.filter(item => checklistState[checklistId]?.[item.id]).length, 0);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  doc.text(`${completedCount} of ${totalItems} criteria met`, margin + 15, yPosition + 58);

  // Visual Progress Bar (right side)
  const barX = pageWidth - margin - 90;
  const barY = yPosition + 25;
  const barWidth = 80;
  const barHeight = 30;

  doc.setFillColor(240, 240, 240);
  doc.rect(barX, barY, barWidth, barHeight, 'F');
  
  const fillHeight = (barHeight * overallProgress) / 100;
  doc.setFillColor(0, 0, 0);
  doc.rect(barX, barY + (barHeight - fillHeight), barWidth, fillHeight, 'F');

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text(`${overallProgress}%`, barX + barWidth / 2, barY + barHeight / 2 + 4, { align: 'center' });

  yPosition += boxHeight + 25;

  // Metadata
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
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

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Executive Summary", margin, yPosition);
  yPosition += 15;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  
  const summaryText = `This assessment evaluates your organization's technical maturity across critical business systems. The analysis identifies opportunities to enhance operational efficiency, system scalability, and revenue generation through systematic infrastructure improvements.\n\nThe framework examines key dimensions including data infrastructure, process automation, system integration, and operational governance. Each criterion represents validated best practices from successful deployments.`;
  
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  summaryLines.forEach((line: string) => {
    doc.text(line, margin, yPosition);
    yPosition += 5;
  });

  yPosition += 15;

  // Key Findings Box
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPosition, contentWidth, 45, 'F');
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.rect(margin, yPosition, contentWidth, 45, 'S');

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("KEY FINDINGS", margin + 10, yPosition + 10);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);

  const findings = [
    `${completedCount} operational capabilities currently implemented`,
    `${totalItems - completedCount} improvement opportunities identified`,
    `${categories.length} capability dimensions assessed`
  ];

  findings.forEach((finding, index) => {
    doc.text(`• ${finding}`, margin + 10, yPosition + 22 + (index * 7));
  });

  yPosition += 60;

  // === CATEGORY PERFORMANCE ===
  doc.addPage();
  yPosition = margin;

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Category Performance", margin, yPosition);
  yPosition += 20;

  categories.forEach((category) => {
    checkForNewPage(35);

    const catItems = category.items.length;
    const catCompleted = category.items.filter(
      item => checklistState[checklistId]?.[item.id]
    ).length;
    const catProgress = catItems > 0 ? Math.round((catCompleted / catItems) * 100) : 0;

    // Category Box
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(1);
    doc.rect(margin, yPosition, contentWidth, 28, 'S');

    // Category Title
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(category.title, margin + 8, yPosition + 10);

    // Metrics
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    doc.text(`${catCompleted} of ${catItems} criteria met`, margin + 8, yPosition + 18);

    // Score Badge
    const scoreX = pageWidth - margin - 50;
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(`${catProgress}%`, scoreX, yPosition + 14);

    // Progress Bar
    const progBarX = pageWidth - margin - 50;
    const progBarY = yPosition + 20;
    const progBarWidth = 45;
    const progBarHeight = 4;

    doc.setFillColor(200, 200, 200);
    doc.rect(progBarX, progBarY, progBarWidth, progBarHeight, 'F');

    const fillWidth = (progBarWidth * catProgress) / 100;
    doc.setFillColor(0, 0, 0);
    doc.rect(progBarX, progBarY, fillWidth, progBarHeight, 'F');

    yPosition += 35;
  });

  // === DETAILED CRITERIA ===
  doc.addPage();
  yPosition = margin;

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Assessment Criteria", margin, yPosition);
  yPosition += 15;

  categories.forEach((category, catIndex) => {
    checkForNewPage(25);

    // Category Header
    doc.setFillColor(0, 0, 0);
    doc.rect(margin, yPosition, contentWidth, 12, 'F');

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(`${catIndex + 1}. ${category.title}`, margin + 6, yPosition + 8);

    yPosition += 18;

    // Items
    category.items.forEach((item) => {
      checkForNewPage(12);

      const isChecked = checklistState[checklistId]?.[item.id] || false;

      // Checkbox
      const boxSize = 4;
      const boxX = margin + 4;
      const boxY = yPosition - 3;

      if (isChecked) {
        doc.setFillColor(0, 0, 0);
        doc.rect(boxX, boxY, boxSize, boxSize, 'F');
        
        // Check mark
        doc.setDrawColor(255, 255, 255);
        doc.setLineWidth(0.6);
        doc.line(boxX + 0.8, boxY + 2, boxX + 1.6, boxY + 3);
        doc.line(boxX + 1.6, boxY + 3, boxX + 3.2, boxY + 1);
      } else {
        doc.setFillColor(255, 255, 255);
        doc.rect(boxX, boxY, boxSize, boxSize, 'F');
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.5);
        doc.rect(boxX, boxY, boxSize, boxSize, 'S');
      }

      // Item Text
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(isChecked ? 60 : 0, isChecked ? 60 : 0, isChecked ? 60 : 0);
      
      const itemLines = doc.splitTextToSize(item.label, contentWidth - 15);
      itemLines.forEach((line: string, idx: number) => {
        doc.text(line, margin + 12, yPosition + (idx * 4));
      });

      yPosition += Math.max(itemLines.length * 4, 6);
    });

    yPosition += 10;
  });

  // === RECOMMENDATIONS ===
  doc.addPage();
  yPosition = margin;

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Recommendations", margin, yPosition);
  yPosition += 15;

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
      title: "Consider Professional Support",
      text: "Schedule a consultation with CWT Studio for comprehensive assessment and planning."
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

    const footerY = pageHeight - 15;

    // Line
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(margin, footerY, pageWidth - margin, footerY);

    // Left - Company
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("CWT STUDIO", margin, footerY + 6);

    // Center - Website
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    doc.text("cwtstudio.com", pageWidth / 2, footerY + 6, { align: 'center' });

    // Right - Page
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, footerY + 6, { align: 'right' });
  }

  // Save
  const fileName = `CWT-Studio-Assessment-${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};
