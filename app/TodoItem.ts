/**
 * Created by guozhiqi on 2016/1/28.
 */
import {Component} from "angular2/core";
import {CORE_DIRECTIVES} from 'angular2/common';
import {TodoService} from './todoService';

@Component({
    selector:'todo-item',
    inputs:['todo'],
    directives:[CORE_DIRECTIVES],
    templateUrl:'app/todoItem.html'
})

export  class TodoItem
{
    todo:string;
    editabletodo:string;
    todoService:TodoService;
    constructor(todoService:TodoService){
        this.todoService=todoService;
    }
    destroy()
    {
        this.todoService.remove(this.todo);
    }
}