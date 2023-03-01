/* Elements */
let elemTable;
let elemName,elemSalary, elemTaxe;

/* Vars */
let iTableCurrent = 1;


/* Entry Point */
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded');

    elemTable = document.getElementById('tblSalary');

    document.getElementById('btnAdd').addEventListener('click', fnAdd);
});

function fnAdd(e){
    e.preventDefault();
    // Get value from form
    elemName = document.getElementById('inputName').value;
    elemSalary = document.getElementById('inputSalary').value;
    elemTaxe = document.getElementById('inputTaxe').value;
    console.log('Adding:' + elemName, 'Salary:' + elemSalary, 'Taxe:' + elemTaxe );

    // Validate input and sanitize
   
    
    // Process input / data
    let iTaxe = CalcTaxe(elemSalary, elemTaxe);
    
    
    
    // Add to table
    fnTableAdd(elemName, elemSalary, iTaxe);

}

function fnTableAdd(strName, iSalary, iTaxe) {
    var row = elemTable.insertRow(iTableCurrent);
    row.insertCell(0).innerHTML = iTableCurrent;
    row.insertCell(1).innerHTML = strName;
    row.insertCell(2).innerHTML = iSalary;
    row.insertCell(3).innerHTML = iTaxe;
    row.insertCell(4).innerHTML = iTaxe;


}

// Remvoes all entry from table
function fnResetTable(){

}

