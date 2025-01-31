const PdfPrinter = require("pdfmake");

const generatePdf = (data) => {
  const fonts = {
    Helvetica: {
      normal: "Helvetica",
      bold: "Helvetica-Bold",
      italics: "Helvetica-Oblique",
      bolditalics: "Helvetica-BoldOblique",
    },
  };

  const printer = new PdfPrinter(fonts);
  const docDefinition = {
    content: [
      { text: "Expense Report", style: "header" },
      ...data.map((expense) => ({
        text: `${expense.category}: $${expense.amount} - ${expense.description}`,
      })),
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
    },
  };

  return printer.createPdfKitDocument(docDefinition);
};

module.exports = generatePdf;