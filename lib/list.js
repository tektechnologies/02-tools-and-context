'use strict';

class List {
  constructor() {
    this.length = 0;
  }
  push(element){
    this[this.length++] = element;
    
  }

  map(callback){
    var result = new List();
    for(let x = 0; x < this.length; x++){
      result.push(
        callback(this[x], x)
      );

    }
    return result;
  }









}

module.exports = List;