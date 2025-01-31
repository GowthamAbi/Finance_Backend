const json2csv = require("json2csv").parse;

const generateCsv = (data) => {
  const fields = ["category", "amount", "description", "date"];
  const opts = { fields };
  return json2csv(data, opts);
};

module.exports = generateCsv;