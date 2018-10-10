import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './../../assets/logo.svg';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: "Hanh.tv"
    }
  }

  componentWillMount() {
    this.props.fetchTodos()
  }
  
  render() {
    const { todos } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.state.user_name} to React</h1>
        </header>
        <div className="content">
          <p className="todos">
            List todo:
          </p>
          {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch({ type: 'FETCH_TODOS' })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
