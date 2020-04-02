const fs = require("fs");
const path = require("path");

const version = "1.0.3";

const args = process.argv.slice(2);

const foolproof = str => /^\d+.\d+.\d+$/.test(str);

const alertOptions = {
  0: { condition: !args[0], reminder: `請輸入版本號` },
  1: { condition: !foolproof(args[0]), reminder: `版本號格式不正確` }
};

(function() {
  const isAlert = Object.values(alertOptions).find(item => item.condition);
  if (isAlert) return console.log(isAlert.reminder);
  const filePath = path.join(__dirname, "setVersion.js");
  const fileOriginData = fs.readFileSync(filePath).toString();
  const newContents = `version = "${args[0]}";`;
  const fileNewData = fileOriginData.replace(/version.*;/, newContents);
  fs.writeFileSync(filePath, fileNewData);
  console.log(`版本號已更新為${args[0]}`);
})();
