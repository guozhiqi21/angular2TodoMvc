/**
 * Created by guozhiqi on 2016/1/28.
 */
import {Component} from 'angular2/core';
import {TodoService} from './todoService';
import {CORE_DIRECTIVES} from "angular2/common";
import {TodoItem} from './TodoItem';

@Component({
    selector: 'todo-list',
    bindings: [],
    inputs: ['todos'],
    templateUrl: 'app/todolist.html',
    directives: [CORE_DIRECTIVES,TodoItem]
})

export class TodoList {
    todos:string[];
    TodoList:string[];
    todoService:TodoService;

    constructor(todoService:TodoService) {
        this.todoService = todoService;
        this.TodoList = this.todos;
        this.TodoList=this.todoService.TodoList;
        console.log("传递的数据为"+this.TodoList);
    }
}

