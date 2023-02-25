let netSalary;
let taxData;
const tableNum = document.getElementById("tableNum");
const salaryInput = document.getElementById("salary");

// async function getTax(tableNum, salaryInput) {
//   const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${salaryInput}&%C3%A5r=2023&_limit=100&_offset=0`;

//   const response = await fetch(url);
//   const data = await response.json();

//   if (data.resultCount <= 0) {
//     console.log("Prova skriv annan siffra!");
//   } else {
//     taxData = data.results[0]["kolumn 1"];
//   }
// }

async function calculateSalary() {
  const salary = salaryInput.value;
  const selectedTableNum = tableNum.value;
	var taxData = 4000;
//   await getTax(selectedTableNum, salary);

  netSalary = salary - taxData;
  console.log((netSalary = salary - taxData));
  displayTaxData();
}

function displayTaxData() {
	const taxDataElement = document.getElementById("result");
	taxDataElement.innerText = `Lön efter skatt ${netSalary}.`;

  }