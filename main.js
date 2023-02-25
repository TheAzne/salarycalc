let netSalary;
let taxData;
const tableNum = document.getElementById("tableNum");
const salaryInput = document.getElementById("salary");
const taxDataElement = document.getElementById("result");
let salaryTo;
let salaryFrom;

async function getTax(tableNum, salaryInput) {
  // const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${salaryInput}&%C3%A5r=2023&_limit=100&_offset=0`;
  //const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&%C3%A5r=2023&inkomst%20fr.o.m.=${salaryInput}&_limit=100&_offset=0`;
  if (salaryInput.endsWith(01)) {
    const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${salaryInput}&%C3%A5r=2023&_limit=100&_offset=0`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    taxData = await data.results[0]["kolumn 1"];
  } else {
    const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&%C3%A5r=2023&inkomst%20fr.o.m.=${salaryInput}&_limit=100&_offset=0`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    taxData = await data.results[0]["kolumn 1"];
  }
}

async function calculateSalary() {
  const salary = salaryInput.value;
  const selectedTableNum = tableNum.value;


  await getTax(selectedTableNum, salary);



  if (salary >= 1800) {
    netSalary = salary - taxData;
    taxDataElement.innerText = `Lön efter skatt ${netSalary}.`;
  } else {
    taxDataElement.innerText = `Försök igen`;
  }
  console.log(taxData);
}

// function displayTaxData() {
//   const taxDataElement = document.getElementById("result");
//   taxDataElement.innerText = `Lön efter skatt ${netSalary}.`;
// }
