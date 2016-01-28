/**
 * Created by guozhiqi on 2016/1/28.
 */
import {Component,enableProdMode} from "angular2/core";
import {bootstrap} from 'angular2/platform/browser';
import {CORE_DIRECTIVES} from 'angular2/common';

import {ToDoAppHeader} from './ToDoAppHeader';
import {TodoAppFooter} from './TodoAppFooter';
import {TodoService} from './todoService';
import {TodoList}  from './TodoList';




@Component({
    selector: 'todo-app',
    directives: [CORE_DIRECTIVES, ToDoAppHeader, TodoAppFooter, TodoList],
    templateUrl: 'app/todoApp.html'
})
export class App {
    todoService:TodoService;
    visibleTodos:string[];

    constructor(todoService:TodoService) {
        this.todoService = todoService;
        this.visibleTodos = this.todoService.TodoList;
        console.log("数据位" + this.visibleTodos);
    }
}
bootstrap(App, [TodoService]);
