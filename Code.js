//comentario desde VS Code
function leerDatos() {
  
  var libro = SpreadsheetApp.getActive();
  
  var hoja = libro.getSheetByName("items");
  
  var form = FormApp.create('Test 1');
  
  var pregunta = "";
  
  var texto = "";
    
  for(i=1;i<=180;i++){
   
    pregunta = i + ". " + hoja.getRange(i,2).getValue();
    Logger.log(pregunta);
    form.addMultipleChoiceItem()
    .setTitle(pregunta)
    .setChoiceValues(['Sí','?','No'])
    .showOtherOption(false);
    
    
  }

  
}
