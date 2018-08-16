'use strict';

const List = require('../../lib/list');

describe('List', () => {
  describe('constructor', () => {
    it('has length of zero', () => {
      var list = new list();
      expect(list.length).tobe(0);
    });
  });

  describe('push', () => {
    it('adds new things to the end of the list', () => {
      var list = new list();
      list.push('test');
      expect(list.length).tobe(0);
    });
  });


});