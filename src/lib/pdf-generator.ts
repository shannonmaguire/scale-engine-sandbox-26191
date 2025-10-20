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
  // Add subtle background accent
  doc.setFillColor(250, 245, 245);
  doc.rect(0, 0, pageWidth, 100, 'F');
  
  yPosition = 40;

  // Company Name
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(139, 0, 0); // Burgundy
  doc.text("CWT STUDIO", margin, yPosition);
  yPosition += 7;

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  doc.text("TECHNICAL SYSTEMS & REVENUE INFRASTRUCTURE", margin, yPosition);
  yPosition += 40;

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

  // Score Box with gradient effect
  const boxWidth = contentWidth;
  const boxHeight = 80;
  
  // Background with subtle shadow effect
  doc.setFillColor(245, 245, 245);
  doc.rect(margin + 2, yPosition + 2, boxWidth, boxHeight, 'F');
  
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(139, 0, 0); // Burgundy border
  doc.setLineWidth(2);
  doc.rect(margin, yPosition, boxWidth, boxHeight, 'FD');

  // Score Label
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(120, 120, 120);
  doc.text("OVERALL MATURITY SCORE", margin + 15, yPosition + 15);

  // Score Value with color coding
  doc.setFontSize(52);
  doc.setFont("helvetica", "bold");
  // Color based on score
  if (overallProgress >= 75) {
    doc.setTextColor(34, 139, 34); // Green
  } else if (overallProgress >= 50) {
    doc.setTextColor(255, 165, 0); // Orange
  } else {
    doc.setTextColor(139, 0, 0); // Burgundy/Red
  }
  doc.text(`${overallProgress}%`, margin + 15, yPosition + 48);

  // Metrics
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const completedCount = categories.reduce((sum, cat) => 
    sum + cat.items.filter(item => checklistState[checklistId]?.[item.id]).length, 0);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  doc.text(`${completedCount} of ${totalItems} criteria met`, margin + 15, yPosition + 58);

  // Visual Progress Bar (right side) - improved
  const barX = pageWidth - margin - 95;
  const barY = yPosition + 20;
  const barWidth = 85;
  const barHeight = 45;

  // Background
  doc.setFillColor(240, 240, 240);
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(1);
  doc.roundedRect(barX, barY, barWidth, barHeight, 3, 3, 'FD');
  
  // Fill
  const fillHeight = (barHeight * overallProgress) / 100;
  if (overallProgress >= 75) {
    doc.setFillColor(34, 139, 34);
  } else if (overallProgress >= 50) {
    doc.setFillColor(255, 165, 0);
  } else {
    doc.setFillColor(139, 0, 0);
  }
  doc.roundedRect(barX, barY + (barHeight - fillHeight), barWidth, fillHeight, 3, 3, 'F');

  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(`${overallProgress}%`, barX + barWidth / 2, barY + barHeight / 2 + 5, { align: 'center' });

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

  // Key Findings Box - improved
  doc.setFillColor(250, 245, 245);
  doc.roundedRect(margin, yPosition, contentWidth, 50, 3, 3, 'F');
  doc.setDrawColor(139, 0, 0);
  doc.setLineWidth(1);
  doc.roundedRect(margin, yPosition, contentWidth, 50, 3, 3, 'S');

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(139, 0, 0);
  doc.text("KEY FINDINGS", margin + 10, yPosition + 12);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);

  const findings = [
    `${completedCount} operational capabilities currently implemented`,
    `${totalItems - completedCount} improvement opportunities identified`,
    `${categories.length} capability dimensions assessed`
  ];

  findings.forEach((finding, index) => {
    doc.text(`• ${finding}`, margin + 10, yPosition + 26 + (index * 8));
  });

  yPosition += 70;

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
    const catCompleted = category.items.filter(
      item => checklistState[checklistId]?.[item.id]
    ).length;
    const catProgress = catItems > 0 ? Math.round((catCompleted / catItems) * 100) : 0;

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

    // Category Header with gradient effect
    doc.setFillColor(139, 0, 0);
    doc.roundedRect(margin, yPosition, contentWidth, 14, 2, 2, 'F');

    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(`${catIndex + 1}. ${category.title}`, margin + 8, yPosition + 9);

    yPosition += 20;

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
