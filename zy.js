Function.Prototype.myCall = function(context) {
    context.fn = this;
    context.fn();
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args + ')');
    delete context.fn; 
}

Function.prototype.myApply = function(context, arr){
     var context = context || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn()
    } else {
        var args = [];
        for(var i = 1, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')');
    }

    delete context.fn;
    return result;

}