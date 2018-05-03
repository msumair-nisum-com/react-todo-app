import React, { Component } from 'react';

class SearchTodo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: props.todos,
      query: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      todos: nextProps.todos
    })
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value
    }, () => {
      if (this.state.query) {
        let todos = this.props.todos.filter((todo) => {
          var regEx = new RegExp(this.state.query, 'i');
          return todo.value.search(regEx) > -1;
        })
        this.setState({ todos });
      }
    })
  }

  render() {

    const todoNode = this.state.todos.map((todo, index) => <li className="list-group-item" key={index}>{todo.value}</li>);

    return (
      <div className="row">
        <form>
          <div className="col-md-12">
            <input type="text" className="form-control add-todo" placeholder="Search todo"
              onChange={this.handleInputChange} />
          </div>
        </form>

        <div className="col-md-12">
          <ul className="list-group" style={{ marginTop: '30px' }}>{todoNode}</ul>
        </div>
      </div>
    );
  }
}

export default SearchTodo;
