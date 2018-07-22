/*
 * @Author: RocWong 
 * @Date: 2018-07-22 16:04:44 
 * @Last Modified by:   RocWong 
 * @Last Modified time: 2018-07-22 16:04:44 
 */

var Event = {
    on: function (evtName, callback) {
        if (!this.handlers) this.handlers = {};
        if (!this.handlers[evtName]) this.handlers[evtName] = [];
        this.handlers[evtName].push(callback);
    },
    emit: function (evtName) {
        var args = Array.prototype.slice.call(arguments, 1);
        var events = this.handlers[evtName];
        var self = this;
        events.forEach(function (func, i) {
            func.call(self, args[i]);
        })
    }
}
// test code
Event.on('test',function(result){
    console.log(result);
});

Event.on('test',function(){
    console.log('world');
});
Event.emit('test','Hello');//Hello world