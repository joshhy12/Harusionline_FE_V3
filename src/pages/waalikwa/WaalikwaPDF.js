import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generateWaalikwaPDF = (visitorsData) => {
  // Initialize PDF document
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(16);
  doc.text('Wageni Waalikwa Report', 14, 15);
  
  // Define the table columns
  const tableColumn = ['No', 'Jina', 'Namba ya Simu', 'Ahadi', 'Mchango/Cash', 'Kadi', 'Aina ya Kadi', 'Mahudhurio'];
  
  // Map the visitors data to table rows
  const tableRows = visitorsData.map((visitor, index) => [
    index + 1,
    visitor.name,
    visitor.phone,
    visitor.ahadi || '',
    visitor.mchango || '',
    visitor.cardNumber || '',
    visitor.cardType || '',
    visitor.mahudhurio || ''
  ]);

  // Generate the table
  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: 25,
    styles: {
      fontSize: 10,
      cellPadding: 3,
      lineWidth: 0.5,
      textColor: [0, 0, 0]
    },
    headStyles: {
      fillColor: [36, 54, 107],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245]
    }
  });

  // Save the PDF
  doc.save('wageni-waalikwa.pdf');
};