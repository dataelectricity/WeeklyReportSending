function myFunction() {
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

Logger.log(sheet.getSheetId());
Logger.log(sheet.getSheetName());
  
for (var i=1; i<40; i++){
  sheet.copyTo(ss); }
  
  var s_array=ss.getSheets();
  
for (var j=3; j<43; j++){
  ss.setActiveSheet(s_array[j]);
  
  ///////////////ss.deleteActiveSheet();
  var n=j+6;
  var weeknumber= "Week "+n;
    
  ss.renameActiveSheet(weeknumber);
  }
 
    
 
}
