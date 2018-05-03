import React, { Component } from 'react';
import { Tabs, Tab, Well } from 'react-bootstrap';

import AddTodo from './addTodo/AddTodo';
import TodoList from './todoList/TodoList';
import SearchTodo from './search/SearchTodo';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      items: [
        { value: 'demo1', completed: false, edit: false },
        { value: 'demo2', completed: false, edit: false },
        { value: 'demo3', completed: false, edit: false },
      ],
      key: 1
    };
  }

  handleSelect(key) {
    this.setState({ key });
  }

  addTodo(value) {
    if (value) {
      this.setState({ items: [...this.state.items, value] });
    }
  }

  toggleEdit(index) {
    const todos = this.state.items.map((todo, i) => {
      if (i === index) {
        todo.edit = true
      }
      return todo;
    });
    this.setState({ items: todos });
  }

  editTodo(index, value) {
    const todos = this.state.items.map((todo, i) => {
      if (i === index) {
        todo.edit = false;
        todo.value = value;
      }
      return todo;
    });
    this.setState({ items: todos });
  }

  removeTodo(index) {
    const remainder = this.state.items.filter((todo, i) => {
      return i !== index;
    });
    this.setState({ items: remainder });
  }

  completeTodo(index, checked) {
    const todos = this.state.items.map((todo, i) => {
      if (i === index) {
        todo.completed = checked
      }
      return todo;
    });
    this.setState({ items: todos });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO APP</h1>
        </header>
        <div className="container">
          <div className="row">
            <Tabs
              activeKey={this.state.key}
              justified
              animation={false}
              onSelect={this.handleSelect}
              id="controlled-tab-example">
              <Tab eventKey={1} title="Add Todo">
                <Well>
                  <AddTodo addTodo={this.addTodo.bind(this)} />
                  <TodoList todos={this.state.items}
                    toggleEdit={this.toggleEdit.bind(this)}
                    editTodo={this.editTodo.bind(this)}
                    removeTodo={this.removeTodo.bind(this)}
                    completeTodo={this.completeTodo.bind(this)} />
                </Well>
              </Tab>
              <Tab eventKey={2} title="Search">
                <Well>
                  <SearchTodo todos={this.state.items} />
                </Well>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
