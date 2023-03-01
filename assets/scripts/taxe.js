// Return total amount of tax
function fnCalcTaxe(iSalary, iTaxe){
    return iSalary / iTaxe;
}

// Returns Employe Fee as number
function fnCalcEmployersFee(iSalary){
    return 0;
}


/* Skatteverket API */

async function fnCalcAmountOfTax(tableNum, minNum, maxNum) {
    let taxData1; // define the variable here
    console.log(salaryInput.value)
    if(salaryInput.value >= minNum && salaryInput.value <= maxNum)
    {
      const url = `https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95?tabellnr=${tableNum}&inkomst%20t.o.m.=${maxNum}&%C3%A5r=2023&inkomst%20fr.o.m.=${minNum}`;
      console.log(minNum)
      const response = await fetch(url);
      const data1 = await response.json();
    console.log(data1);
  
      taxData1  = await data1.results[0]["kolumn 1"];
    }

}