if (FlyingTopHat === undefined) var FlyingTopHat = {};
if (FlyingTopHat.Command === undefined) FlyingTopHat.Command = {};

/**
 * @namespace FlyingTopHat.Command
 */

FlyingTopHat.Command.CanvasCommand = (function(){
    
    /**
     * @constructor FlyingTopHat.Command.CanvasCommand
     * @param {CanvasRenderingContext2D} context2d
     * @mixin FlyingTopHat.Command.CanvasCommand
     */
    function CanvasCommand(context2d){
        this.initialise(context2d);
    }
    
    var p = CanvasCommand.prototype;
    
    /**
     * @protected
     * @var {CanvasRenderingContext2D} FlyingTopHat.Command.CanvasCommand#_context2d
     */
     
    /**
     * Initialises the instance.
     * @protected
     * @function #initialise
     * @memberOf FlyingTopHat.Command.CanvasCommand
     * @param {CanvasRenderingContext2D} context2d
     */
    p.initialise = function(context2d) {
        this._context2d = context2d;
    };
    
    /**
     * @public
     * @function #execute
     * @memberOf FlyingTopHat.Command.CanvasCommand
     */
    p.execute = function(){};
    
    return CanvasCommand;
}());

FlyingTopHat.Command.SquarePaintCommand = (function(CanvasCommand) {
    
    /**
     * @constructor FlyingTopHat.Command.SquarePaintCommand
     * @param {CanvasRenderingContext2D} context2d
     * @mixes FlyingTopHat.Command.CanvasCommand
     */
    function SquarePaintCommand(context2d) {
        this.initialise(context2d);
    }
    
    var p = SquarePaintCommand.prototype = new CanvasCommand();
    
    p.x = 0;
    
    p.y = 0;
    
    /**
     * Draws a square
     * @public 
     * @function #execute
     * @memberOf FlyingTopHat.Command.SquarePaintCommand
     */
    p.execute = function() {
        this._context2d.beginPath();
        this._context2d.rect(this.x, this.y, 20, 20);
        this._context2d.stroke();
    };
    
    /**
     * @public 
     * @function #toString
     * @memberOf FlyingTopHat.Command.SquarePaintCommand
     */
    p.toString = function () { return "Square"; };
    
    return SquarePaintCommand;
}(FlyingTopHat.Command.CanvasCommand));

FlyingTopHat.Command.ClearCanvasCommand = (function(CanvasCommand){

    /**
     * @constructor FlyingTopHat.Command.ClearCanvasCommand
     * @param {CanvasRenderingContext2D} context2d
     * @mixes FlyingTopHat.Command.CanvasCommand
     */
    function ClearCanvasCommand(context2d){
        this.initialise(context2d);
    }
    
    var p = ClearCanvasCommand.prototype = new CanvasCommand();
    
    /**
     * Clears the canvas
     * @public
     * @function #execute
     * @memberOf FlyingTopHat.Command.ClearCanvasCommand
     */
    p.execute = function() {
        var canvas = this._context2d.canvas;
        this._context2d.clearRect(0, 0, canvas.width, canvas.height);
    };
    
    /**
     * @public
     * @function #toString
     * @memberOf FlyingTopHat.Command.ClearCanvasCommand
     */
    p.toString = function () { return "Clear All"; };
    
    return ClearCanvasCommand;
}(FlyingTopHat.Command.CanvasCommand));

FlyingTopHat.Command.CirclePaintCommand = (function(CanvasCommand) {
    
    /**
     * @constructor FlyingTopHat.Command.CirclePaintCommand
     * @param {CanvasRenderingContext2D} context2d
     * @mixes FlyingTopHat.Command.CanvasCommand
     */
    function CirclePaintCommand(context2d){
        this.initialise(context2d);
    }
    
    var p = CirclePaintCommand.prototype = new CanvasCommand();
    
    p.x = 0;
    
    p.y = 0;
    
    /**
     * Draws a circle
     * @public
     * @function #execute
     * @memberOf FlyingTopHat.Command.CirclePaintCommand
     */
    p.execute = function() {
        this._context2d.beginPath();
        this._context2d.arc(this.x, this.y, 10, 0, 2*Math.PI);
        this._context2d.stroke();
    };
    
    /**
     * @public
     * @function #toString
     * @memberOf FlyingTopHat.Command.CirclePaintCommand
     */
    p.toString = function () { return "Circle"; };
    
    return CirclePaintCommand;
}(FlyingTopHat.Command.CanvasCommand));