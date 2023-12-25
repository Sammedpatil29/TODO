import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = '';
  desc: string = '';
  addtitle: string = '';
  addDesc: string = '';
  todos: { title: string, description: string }[] = [];
  newTodo: { title: string, description: string } = { title: '', description: '' };

  constructor() { }

  addTodo() {
    if (this.newTodo.title && this.newTodo.description) {
      this.todos.push({ ...this.newTodo });
      this.saveToLocalStorage();
      this.newTodo.title = '';
      this.newTodo.description = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  ngOnInit(): void {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  }
