var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers')

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Hello world'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
    it('should toggle todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      var todoArr = [{
        id: 1,
        text: 'Test Task',
        completed: false,
        createdAt: 123456,
        completedAt: undefined
      }];
      var res = reducers.todosReducer(df(todoArr), df(action));
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toBeA('number');

      res = reducers.todosReducer(df(res), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});
