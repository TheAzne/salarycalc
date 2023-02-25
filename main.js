let value;
let netSalary;
let taxData;
const hours = document.getElementById("hours").value;
const salaryHour = document.getElementById("salaryHour").value;
const salaryMonthly = document.getElementById("salaryMonthly").value;

// async function getTax() {
//     // const api_url = 'https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=34&inkomst%20t.o.m.=25000&%C3%A5r=2023&_limit=100&_offset=0';
//     // const api_url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?inkomst%20t.o.m.=${salary}&%C3%A5r=2023&_limit=100&_offset=0`;
//     const response = await fetch(api_url);
//     const data = await response.json();
// 	 taxData = data.results[0]["kolumn 1"];
//     console.log(data);

// }

 async function getTax(table, salary) {
  const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${table}&inkomst%20t.o.m.=${salary}&%C3%A5r=2023&_limit=100&_offset=0`;

  const response = await fetch(url);
  const data = await response.json();
}

async function calculateSalary() {


  var grossSalary = hours * salaryHour;

  var city = document.getElementById("city").value;
  switch (city) {
    case "sundsvall":
      await getTax(); // call getTax() to retrieve the taxData value
      break;
  }

  if (grossSalary <= 0) {
    netSalary = salaryMonthly - taxData;
  } else {
    netSalary = grossSalary - taxData;
  }

  document.getElementById(
    "salary"
  ).innerHTML = `Your net salary is $${netSalary.toFixed(2)}.`;
}
