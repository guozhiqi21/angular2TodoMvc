System.register(['angular2/core', './todoService', "angular2/common", './TodoItem'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todoService_1, common_1, TodoItem_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todoService_1_1) {
                todoService_1 = todoService_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (TodoItem_1_1) {
                TodoItem_1 = TodoItem_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(todoService) {
                    this.todoService = todoService;
                    this.TodoList = this.todos;
                    this.TodoList = this.todoService.TodoList;
                    console.log("传递的数据为" + this.TodoList);
                }
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        bindings: [],
                        inputs: ['todos'],
                        templateUrl: 'app/todolist.html',
                        directives: [common_1.CORE_DIRECTIVES, TodoItem_1.TodoItem]
                    }), 
                    __metadata('design:paramtypes', [todoService_1.TodoService])
                ], TodoList);
                return TodoList;
            })();
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=TodoList.js.map