'use strict';

var queue = (function() {
  var _private = {
    events : []
  };

  var _public = {
    on : function(eventName, callback) {
      var event = {'eventName' : eventName,
                   'callback' : callback};
      _private.events.push(event);
    },

    remove : function(eventName) {
      var newList = _private.events.filter(function(event) {
        return event.eventName !== eventName;
      });
      this.events = newList;
    },

    trigger : function(eventName, args) {
      _private.events.forEach(function(event) {
        if (event.eventName === eventName) {
          if (typeof arguments !== 'undefined') {
            event.callback.call(null, args);
          }
          else {
            event.callback();
          }
        }
      });
    },

  };

  return _public;

} ());

queue.on('PANIC_EVENT', function() {
    console.log('PANIC_EVENT HAPPENED!');
});
queue.on('PANIC_EVENT', function() {
    console.log('PANIC_EVENT HAPPENED AGAIN!');
});

queue.trigger('PANIC_EVENT');
