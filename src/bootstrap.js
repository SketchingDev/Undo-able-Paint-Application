/**
 * @file Bootstrapping process to setup the application.
 * @author Lucas <@flyingtophat.co.uk>
 */

$(document).ready(function() {
    
    (function($,
        PaintApplication, 
        CommandInvoker,
        canvasId, 
        clearButtonId,
        undoButtonId, 
        undoListId) {
        
        var canvas = $(canvasId).get(0);
        
        var context2d = canvas.getContext("2d");
            context2d.lineWidth = 2;
            context2d.strokeStyle = "#FF0000";
        
        var paintApp = new PaintApplication(
            context2d,
            new CommandInvoker()
        );
        
        $(canvas).click(function(event){
            var mouseX = (event.pageX - this.offsetLeft);
            var mouseY = (event.pageY - this.offsetTop);
                
            paintApp.drawRandomShape(mouseX, mouseY); 

            event.preventDefault();
        });
        
        $(clearButtonId).click(function() {
            paintApp.clearAll();
        });
        
        $(undoButtonId).click(function() {
            paintApp.undo();
        });
        
        // Update undo list
        $(canvasId + ", " + clearButtonId + ", " + undoButtonId).click(
            function() {
                function mapCommand (i, commandName){
                    var element = document.createElement("li");
                        element.textContent = commandName;
                        
                    return element;
                }
                
                $(undoListId)
                    .empty()
                    .append($(paintApp.getExecutedCommandNames()).map(mapCommand));
            });
        
    }(jQuery,
      FlyingTopHat.PaintApplication,
      FlyingTopHat.Command.CommandInvoker,
      "#paintCanvas", 
      "#clear", 
      "#undo", 
      "#undoList"
    ));
});