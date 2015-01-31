var List = require('complex-list');

function Stack(){
  List.call(this);
  this.tail = this.head;
}
Stack.prototype = Object.create(List.prototype,{constructor:{
  value: Stack,
  enumerable: false,
  configurable: false,
  writable: false
}});
Stack.prototype.destroy = function(){
  this.tail = null;
  List.prototype.destroy.call(this);
};
Stack.prototype.push = function(obj){
  this.add(obj);
};
Stack.prototype.pop = function(){
  var ret = this.head.content;
  this.removeOne(this.head);
  return ret;
};


module.exports = Stack;
