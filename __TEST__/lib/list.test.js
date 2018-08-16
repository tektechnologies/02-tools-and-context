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