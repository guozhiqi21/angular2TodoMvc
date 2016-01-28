/**
 * Created by guozhiqi on 2016/1/28.
 */
import {Component} from 'angular2/core';
import {FormBuilder,FORM_BINDINGS,FORM_DIRECTIVES,Validators} from 'angular2/common';
import {TodoService} from './todoService';

@Component({
    selector: 'todo-app-header',
    templateUrl: 'app/todoAppHeader.html',
    bindings: [FORM_BINDINGS],
    directives: [FORM_DIRECTIVES]
})

export class ToDoAppHeader {
    newTodo:string;
    todoService:TodoService;

    constructor(formBuilder:FormBuilder,todoService:TodoService) {
         this.newTodo="";

        this.todoService=todoService;

    }

    submit($event)
    {
        $event.preventDefault();
        if(this.newTodo)
        {
            this.todoService.add(this.newTodo);
            this.newTodo="";
        }
    }



}


