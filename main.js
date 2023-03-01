let netSalary;
let taxData;
let taxData1;
let changedValue;
let minNum;
let maxNum;
const tableNum = document.getElementById("tableNum");
const salaryInput = document.getElementById("userSalary");
const taxDataElement = document.getElementById("result");
const submitButton = document.getElementById("submitSalary");
let anum;

async function testTax(tableNum, minNum, maxNum) {
  const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&%C3%A5r=2023`;
  const response = await fetch(url);
  const data1 = await response.json();

  console.log(data1);
  console.log(minNum);
  console.log(maxNum);

  taxData1  = await data1.results[0]["kolumn 1"];
  console.log(taxData1);

  return { data1, minNum, maxNum };
}

async function getTax(tableNum, changedValue) {
  const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${changedValue}&%C3%A5r=2023&_limit=100&_offset=0`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.resultCount == 0) {
    changedValue += 100;
    return getTax(tableNum, changedValue);
  }
  console.log(changedValue);

  return { data, changedValue };
}

submitButton.addEventListener("click", async () => {
  if (salaryInput.value.slice(2) != "00") {
    changedValue = parseInt(salaryInput.value);
    changedValue = changedValue - (changedValue % 100);
  }

  let { data } = await getTax(tableNum.value, changedValue);
  taxData = await data.results[0]["kolumn 1"];
  displayTaxData(changedValue, netSalary, taxData);
});

submitButton.addEventListener("click", async () => {


  let { data1 } = await testTax(tableNum.value, minNum, maxNum);

  console.log(minNum);
  console.log(maxNum);
});

function displayTaxData(salary, netSalary, taxData) {
  netSalary = salary - taxData;
  const result = document.getElementById("result");
  const sum = document.getElementById("sum");
  result.innerText = `Uträkning ${salary} - ${taxData}. `;
  sum.innerText = `Lön efter skatt ${netSalary}.`;
}
