function Copy() {

 var sss = SpreadsheetApp.openById('1_YTGFBa-E-E8IeuQaYuXJOK_Z70C5WFW_AjmjczU5lk'); //replace with source ID
 var ss = sss.getSheetByName('Sheet1'); //replace with source Sheet tab name
 var range = ss.getRange('A:B'); //assign the range you want to copy
 var data = range.getValues();

 var tss = SpreadsheetApp.openById('1TdxiQYp50T5JDXHFcr5_pXuwZibSgECL2-LmUBbnn1U'); //replace with destination ID
 var ts = tss.getSheetByName('Sheet1'); //replace with destination Sheet tab name
 ts.getRange(ts.getLastRow()+1, 1, data.length, data[0].length).setValues(data);
}

// sheets for reference
// source - https://docs.google.com/spreadsheets/d/1_YTGFBa-E-E8IeuQaYuXJOK_Z70C5WFW_AjmjczU5lk/edit#gid=0
// destination - https://docs.google.com/spreadsheets/d/1TdxiQYp50T5JDXHFcr5_pXuwZibSgECL2-LmUBbnn1U/edit#gid=0