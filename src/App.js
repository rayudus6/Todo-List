import React, { Component } from 'react';
import './App.css';
import TodoApp from './Components/TodoApp';
import Header from './Components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Todo App"/>
        <TodoApp />
      </div>
    );
  }
}
