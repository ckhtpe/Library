const strValue = process.argv.slice(2);

const foolproofs = {
  0: { rule: !strValue[0], reminder: `請輸入內容` },
  1: { rule: !/^[0-9]*.?[0-9]*$/.test(strValue[0]), reminder: `請輸入數字` },
  2: { rule: +strValue[0] > 1e20, reminder: `數字過大` },
  3: { rule: !/^\d+.?\d{0,2}$/.test(strValue[0]), reminder: `小數點不能超過兩位` }
};

const isAlertItem = Object.values(foolproofs).find(item => item.rule);

if (isAlertItem) return console.log(isAlertItem.reminder);
console.log(`你所輸入的數字為${strValue[0]}`);
