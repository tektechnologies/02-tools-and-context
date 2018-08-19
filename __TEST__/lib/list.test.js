'use strict';

const List = require('../../lib/list');

describe('List', () => {
  describe('constructor', () => {
    it('has length of zero', () => {
      var list = new List();
      expect(list.length).toBe(0);
    });
  });

  describe('push', () => {
    it('adds new things to the end of the list', () => {
      var list = new List();
      list.push('test');
      expect(list.length).toBe(1);
      expect(list[0]).toBe('test');

      list.push('testTwo');
      expect(list.length).toBe(2);
      expect(list[0]).toBe('test');
      expect(list[1]).toBe('testTwo');

      list.push('testThree');
      expect(list.length).toBe(3);
      expect(list[2]).toBe('testThree');
    });
  });

  //pop
  // describe('pop', () => {
  //   it('removes last list element', () => {
  //     var list = new List();
  //     list.push('A');
  //     list.push('B');

  //     expect(list['broccoli', 'cauliflower']).toBe('cauliflower');
  //   });
  // });
  //slice
  describe('slice', () => {
    it('returns sliced elements from array', () => {
      let list = new List();
      list.push('A');
      list.push('B');
      list.push('C');
      list.push('D');
      list.push('E');
      let sliceIt = list.slice(0);
      let diceIt =  list.slice(4);
      expect(sliceIt).toBe({'0': 'A', 'length': 1});
      expect(diceIt).toBe({'0': 'D','1': 'E', 'length': 2});
    });
  });








  
  describe('foreach', () => {
    it('returns callback to elements in list', () => {
      var list = new List();
      list.push('iMac');
      list.push('iPod');
      list.push('Apple2E');
      list.push('');
      list.foreach(element => element.length);
      expect(list).toEqual({'0': 4, '1': 4, '2': 7, '3': 0, 'length':4});
    });
  });


  describe('map', () => {
    it('returns a new list', () => {
      var list = new List();
      var res = list.map(element => element);
      expect(res.length).toBe(list.length);
      expect(res).not.toBe(list);
    });
    it('returns new list with result callback', () => {
      var list = new List();
      list.push('iPhone');
      list.push('iWatch');
      var res = list.map(apple => apple.length);
      expect(res.length).toBe(list.length);
      expect(res[0]).toBe(6);
      expect(res[1]).toBe(6);

    });
    it('map calls callback with element and index', () => {
      var list = new List();
      list.push('ubiquity');
      list.push('unbuntu');
      var res = list.map((element, index) => ({element, index}));
      expect(res.length).toBe(list.length);
      expect(res[0]).toEqual({element: 'ubiquity', index: 0});
      expect(res[1]).toEqual({element: 'unbuntu', index: 1});
    });
  });
});