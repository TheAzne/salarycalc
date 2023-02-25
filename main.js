let netSalary;
let taxData = 0;
const tableNum = document.getElementById("tableNum");
const salaryInput = document.getElementById("userSalary").value;
const taxDataElement = document.getElementById("result");
let salaryTo;
let salaryFrom;
let changedValue;







async function getTax(tableNum, changedValue) {
  // const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${salaryInput}&%C3%A5r=2023&_limit=100&_offset=0`;
  //const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&%C3%A5r=2023&inkomst%20fr.o.m.=${salaryInput}&_limit=100&_offset=0`;
  //const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${salaryInput}&%C3%A5r=2023&_limit=100&_offset=0`;
  //const url = `https://skatteverket.entryscape.net/rowstore/dataset/c67b320b-ffee-4876-b073-dd9236cd2a99?kommun=${tableNum}&%C3%A5r=2023&_limit=100&_offset=0`;

  //const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${salaryTo}&%C3%A5r=2023&inkomst%20fr.o.m.=${salaryFrom}&_limit=100&_offset=0`;
  //const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&%C3%A5r=2023&inkomst%20fr.o.m.=${salaryInput}&_limit=100&_offset=0`;
  const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${changedValue}&%C3%A5r=2023&_limit=100&_offset=0`;

  // if (salaryInput.toString().slice(2) !== "00") {
  //    changedValue = salaryInput.toString().slice(0, -2) + "00";
 
  //  console.log( changedValue);


    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);


    taxData = await data.results[0]['kolumn 1'];
    console.log( taxData);
  // }

 
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
}

// function displayTaxData() {
//   const taxDataElement = document.getElementById("result");
//   taxDataElement.innerText = `Lön efter skatt ${netSalary}.`;
// }
