export async function loadData() {
  const fs = require("fs");
  const fileName = `${process.cwd()}/data.json`;

  let rawdata = fs.readFileSync(fileName);
  let data = JSON.parse(rawdata);

  return data;
}
