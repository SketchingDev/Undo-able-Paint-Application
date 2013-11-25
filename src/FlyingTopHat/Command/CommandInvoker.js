if (FlyingTopHat === undefined) var FlyingTopHat = {};
if (FlyingTopHat.Command === undefined) FlyingTopHat.Command = {};

/**
 * @namespace FlyingTopHat.Command
 */

FlyingTopHat.Command.CommandInvoker = (function(){
  
    /**
     * Invokes Commands.
     * @constructor FlyingTopHat.Command.CommandInvoker
     */
    function CommandInvoker(){
        this.initialise();
    }

    var p = CommandInvoker.prototype;
 
    /**
     * @private
     * @var {Array} FlyingTopHat.Command.CommandInvoker#_commands
     */

    /**
     * Initialises the instance
     * @protected
     * @function #initialise
     * @memberOf FlyingTopHat.Command.CommandInvoker
     */
    p.initialise = function (){
        this._commands = new Array();
    };

    /**
     * Returns the stack of commands.
     * @public
     * @function #getCommands
     * @memberOf FlyingTopHat.Command.CommandInvoker
     * @todo Return deep clone
     */
    p.getCommands = function (){
        return this._commands;
    };

    /**
     * Adds a command to the stack and then executes it.
     * @public
     * @function #addAndExecute
     * @memberOf FlyingTopHat.Command.CommandInvoker
     * @param {FlyingTopHat.Command.CanvasCommand} command
     */
    p.addAndExecute = function (command){
        if (command.execute !== undefined) {
            this._commands.push(command);

            command.execute();
        }
    };

    /**
     * Executes all the commands, in the order they were added to the stack.
     * @public
     * @function #executeAll
     * @memberOf FlyingTopHat.Command.CommandInvoker
     */
    p.executeAll = function(){
        for (var i = 0; i < this._commands.length; i++) {
            this._commands[i].execute();
        }
    };
    
    /**
     * Removes the last command added to the stack.
     * @public
     * @function #removeLast
     * @memberOf FlyingTopHat.Command.CommandInvoker
     */
    p.removeLast = function(){
        var length = this._commands.length;
        if (length > 0) {
            this._commands = this._commands.slice(0, length-1);
        }
    };
        
    return CommandInvoker;
}());