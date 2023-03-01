/* Elements */
let elemPrint;

let elemTable;
let elemName,elemSalary, elemTaxe;
let elemTotalExpense;

/* Vars */
let iTableCurrent = 1;
let iTotalExpense;



/* Entry Point */
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded');
    elemPrint = document.getElementById('btnPrint');
    elemTable = document.getElementById('tblSalary');
    elemTotalExpense = document.getElementById('totalExpense');

    document.getElementById('btnPrint').addEventListener('click', fnPrint);
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

    // Update total expense
    iTotalExpense = elemSalary;
    fnTotalExpense(iTotalExpense);

}

function fnTableAdd(strName, iSalary, iTaxe) {
    var row = elemTable.insertRow(iTableCurrent);
    row.insertCell(0).innerHTML = iTableCurrent;
    row.insertCell(1).innerHTML = strName;
    row.insertCell(2).innerHTML = iSalary;
    row.insertCell(3).innerHTML = iTaxe;
    row.insertCell(4).innerHTML = iTaxe;

    // Edit / Delete entry button
    row.insertCell(5).innerHTML = fnTableAddBtn('delete',iTableCurrent);
    row.insertCell(6).innerHTML = fnTableAddBtn('edit',iTableCurrent);


    // Increase off set
    iTableCurrent = iTableCurrent + 1;

}

// Remvoes all entry from table
function fnResetTable(){

}

// Edit Entry

// Delete Entry

// Add/Remove btn for table entry
function fnTableAddBtn(fnBtnType, iEntryId){
    if(fnBtnType == 'delete')
    return '<button class="btn btn-outline-danger"'+ fnTableBtnGetDataUrl(iEntryId) +'><i class="bi bi-trash"></i></button>';
    if(fnBtnType == 'edit')
    return '<button class="btn btn-outline-info"'+ fnTableBtnGetDataUrl(iEntryId) +'><i class="bi bi-pen"></i></button>'
}

// Naming D:
function fnTableBtnGetDataUrl(iEntryId){
    return 'data-url="'+ iEntryId +'"';
}

// Total cost
function fnTotalExpense(strInput){
    elemTotalExpense.textContent = strInput; 
}
