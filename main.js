let netSalary;
let taxData = 0;
let salaryTo;
let salaryFrom;
let changedValue;
const tableNum = document.getElementById("tableNum");
const salaryInput = document.getElementById("userSalary");
const taxDataElement = document.getElementById("result");
const submitButton = document.getElementById("submitSalary");

async function getTax(tableNum, changedValue) {
  // const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${salaryInput}&%C3%A5r=2023&_limit=100&_offset=0`;
  //const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&%C3%A5r=2023&inkomst%20fr.o.m.=${salaryInput}&_limit=100&_offset=0`;
  //const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${salaryInput}&%C3%A5r=2023&_limit=100&_offset=0`;
  //const url = `https://skatteverket.entryscape.net/rowstore/dataset/c67b320b-ffee-4876-b073-dd9236cd2a99?kommun=${tableNum}&%C3%A5r=2023&_limit=100&_offset=0`;

  //const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${salaryTo}&%C3%A5r=2023&inkomst%20fr.o.m.=${salaryFrom}&_limit=100&_offset=0`;
  //const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&%C3%A5r=2023&inkomst%20fr.o.m.=${salaryInput}&_limit=100&_offset=0`;
  const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${changedValue}&%C3%A5r=2023&_limit=100&_offset=0`;
  const response = await fetch(url);
  const data = await response.json();

  taxData = await data.results[0]["kolumn 1"];
  console.log(taxData);
}

submitButton.addEventListener("click", async () => {
  if (salaryInput.value.slice(2) != "00") {
    changedValue = parseInt(salaryInput.value);

    changedValue = changedValue - (changedValue % 100);
    salaryInput.value = changedValue;
  }
  const salary = changedValue;
  const selectedTableNum = tableNum.value;

  await getTax(selectedTableNum, salary);

  if (changedValue >= 1800) {
    netSalary = salary - taxData;
    displayTaxData(salary, netSalary);
  } else {
    taxDataElement.innerText = `Försök igen`;
  }
});

function displayTaxData(salary, netSalary) {
  const result = document.getElementById("result");
  const sum = document.getElementById("sum");
  result.innerText = `Uträkning ${salary} - ${taxData}. `;
  sum.innerText = `Lön efter skatt ${netSalary}.`;
}
