if (FlyingTopHat === undefined) var FlyingTopHat = {};

/**
 * @namespace FlyingTopHat
 */

FlyingTopHat.PaintApplication = (function (SquarePaintCommand,
    CirclePaintCommand,
    ClearCanvasCommand) {
        
    /**
     * Handles the application's functionality
     * @constructor FlyingTopHat.PaintApplication
     * @param {CanvasRenderingContext2D} context2d 
     * @param {FlyingTopHat.Command.CommandInvoker} commandInvoker
     */
    function PaintApplication(context2d, commandInvoker) {
        this.initialise(context2d, commandInvoker);
    }
    
    var p = PaintApplication.prototype;
    
    /**
     * @private
     * @var {CanvasRenderingContext2D} FlyingTopHat.PaintApplication#_context2d
     * 
     * @private
     * @var {FlyingTopHat.CommandInvoker} FlyingTopHat.PaintApplication#_commandInvoker
     */

    /**
     * Initialises the instance
     * @protected
     * @function #initialise
     * @memberOf FlyingTopHat.PaintApplication
     * @param {CanvasRenderingContext2D} context2d
     * @param {FlyingTopHat.CommandInvoker} commandInvoker
     */
    p.initialise = function(context2d, commandInvoker) {
        this._context2d = context2d;
        this._commandInvoker = commandInvoker;
    };

    /**
     * @public
     * @function #drawRandomShape
     * @memberOf FlyingTopHat.PaintApplication
     * @param {integer} x
     * @param {integer} y
     */
    p.drawRandomShape = function (x, y) {
        var cmd = (Math.random() > 0.5)
            ? new SquarePaintCommand(this._context2d)
            : new CirclePaintCommand(this._context2d);

        cmd.x = x;
        cmd.y = y;
        
        this._commandInvoker.addAndExecute(cmd);
    };
    
    /**
     * @public
     * @function #clearAll
     * @memberOf FlyingTopHat.PaintApplication  
     */
    p.clearAll = function() {
        this._commandInvoker.addAndExecute(
            new ClearCanvasCommand(this._context2d)
        );
    };
    
    /**
     * @public
     * @function #undo
     * @memberOf FlyingTopHat.PaintApplication  
     */
    p.undo = function() {
        this._commandInvoker.removeLast();
        
        new ClearCanvasCommand(this._context2d).execute();

        this._commandInvoker.executeAll();
    };
    
    p.getExecutedCommandNames = function () {
        var commandNames = new Array();
        
        var commands = this._commandInvoker.getCommands();
        for(var i = 0; i < commands.length; i++) {
            commandNames.push(commands[i].toString());
        }
        
        return commandNames;
    };

    return PaintApplication;
    
}(FlyingTopHat.Command.SquarePaintCommand, 
  FlyingTopHat.Command.CirclePaintCommand, 
  FlyingTopHat.Command.ClearCanvasCommand));