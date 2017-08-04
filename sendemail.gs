function sendWeeklyReportEmails(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var categoryrange = sheet.getRange(6,1,sheet.getLastRow()-6,1);
  var subcategoryrange = sheet.getRange(6,3,sheet.getLastRow()-6,1);
  var taskrange = sheet.getRange(6,5,sheet.getLastRow()-6,2);

  //var taskrange = taskrangearray(categorymeredrange);
  //var taskmergedrange = taskrangearray();
  var categorynamearray = categoryrange.getValues();
  var subcategorynamearray = subcategoryrange.getValues();
  var tasknamearray = taskrange.getValues();
  Logger.log(categorynamearray);
  Logger.log(categorynamearray[1][0]);
  Logger.log(subcategorynamearray[1][0]);
  Logger.log(tasknamearray.length);
  Logger.log(trimarray(categorynamearray));
  Logger.log(trimarray(subcategorynamearray));
  Logger.log(trimarray(tasknamearray));
}

function trimarray(array){
  var newarray = new Array();
  var j = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i][0]!=""){
     newarray[j] = array[i][0];
      j++;
    }
 
 }
  return newarray;
 
}
