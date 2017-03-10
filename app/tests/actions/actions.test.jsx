import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });
  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123abc',
        text: 'Something',
        completed: false,
        createdAt: 123456
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });
  it('should generate updateTodo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 123456,
      updates: { completed: false }
    };
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });
  it('should generate addTodos action', () => {
    var todos = [{
      id: 111,
      text: 'Test task',
      completed: true,
      completedAt: undefined,
      createdAt: 123456
    }];
    var action = {
      type: 'ADD_TODOS',
      todos: todos
    };
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate LOGIN action', () => {
    var uid = '123456';
    var action = {
      type: 'LOGIN',
      uid: uid
    };
    var res = actions.login(uid);
    expect(res).toEqual(action);
  });

  it('should generate LOGOUT action', () => {
    var action = {
      type: 'LOGOUT'
    };
    var res = actions.logout();
    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');
      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();

        testTodoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 123456
        })
      })
      .then(() => done())
      .catch(done);;
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should call startAddTodos and dispatch ADD_TODOS action', (done) => {
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'ADD_TODOS'
        });
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('Something to do');
        done();
      }, done);
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done);
    });
  });
});
