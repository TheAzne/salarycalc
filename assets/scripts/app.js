/* Elements */
let elemPrint;

let elemTable;
let elemName, elemSalary, elemTaxe;
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

    // Events
    document.getElementById('btnPrint').addEventListener('click', fnPrint);
    document.getElementById('btnAdd').addEventListener('click', fnAdd);
    document.getElementById('btnTableReset').addEventListener('click', fnAppReset);

    // DOM changes Todo


});

/*  */
function fnAppRenewEvent() {
    console.log('Renew event');
    document.querySelectorAll('.btn-table-delete').forEach(
        tableBtnDelete => tableBtnDelete.addEventListener('click', fnTableDeleteEntry)
    );
    document.querySelectorAll('.btn-table-edit').forEach(
        tableBtnDelete => tableBtnDelete.addEventListener('click', fnTableDeleteEntry)
    );
}
/* 'App' Reset */
function fnAppReset() {
    fnTableReset();
    iTotalExpense = 0;
}

function fnAdd(e) {
    e.preventDefault();
    // Get value from form
    elemName = document.getElementById('inputName').value;
    elemSalary = document.getElementById('inputSalary').value;
    elemTaxe = document.getElementById('inputTaxe').value;
    console.log('Adding:' + elemName, 'Salary:' + elemSalary, 'Taxe:' + elemTaxe);

    // Validate input and sanitize


    // Process input / data
    let iTaxe = fnCalcTaxe(elemSalary, elemTaxe);


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
    row.insertCell(5).innerHTML = fnTableAddBtn('delete', iTableCurrent);
    row.insertCell(6).innerHTML = fnTableAddBtn('edit', iTableCurrent);

    // Increase off set
    iTableCurrent = iTableCurrent + 1;

    // Renew event
    fnAppRenewEvent();

}

// Remvoes all entry from table
function fnTableReset() {
    console.log('Table reset');
    var tableHeaderRowCount = 1;
    var rowCount = elemTable.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        elemTable.deleteRow(tableHeaderRowCount);
    }
    iTableCurrent = 1;

}

// Edit Entry
function fnTableEditEntry(e){

}

// Delete Single Entry
// ToDo: add some kind of check before deleting
function fnTableDeleteEntry(e) {
    elemTable.deleteRow(this.getAttribute('data-url'));
    iTableCurrent = iTableCurrent - 1;
}

// Add/Remove btn for table entry
function fnTableAddBtn(fnBtnType, iEntryId) {
    if (fnBtnType == 'delete')
        return '<button class="btn btn-outline-danger btn-table-delete"' + fnTableBtnGetDataUrl(iEntryId) + '><i class="bi bi-trash"></i></button>';
    if (fnBtnType == 'edit')
        return '<button class="btn btn-outline-info"' + fnTableBtnGetDataUrl(iEntryId) + 'data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-pen"></i></button>'
}

// Naming D:
function fnTableBtnGetDataUrl(iEntryId) {
    return 'data-url="' + iEntryId + '"';
}

/* Extra logic / functions */

// Total cost
function fnTotalExpense(strInput) {
    elemTotalExpense.textContent = strInput;
}

