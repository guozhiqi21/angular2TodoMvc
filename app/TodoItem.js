System.register(["angular2/core", 'angular2/common', './todoService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, todoService_1;
    var TodoItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (todoService_1_1) {
                todoService_1 = todoService_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem(todoService) {
                    this.todoService = todoService;
                }
                TodoItem.prototype.destroy = function () {
                    this.todoService.remove(this.todo);
                };
                TodoItem = __decorate([
                    core_1.Component({
                        selector: 'todo-item',
                        inputs: ['todo'],
                        directives: [common_1.CORE_DIRECTIVES],
                        templateUrl: 'app/todoItem.html'
                    }), 
                    __metadata('design:paramtypes', [todoService_1.TodoService])
                ], TodoItem);
                return TodoItem;
            })();
            exports_1("TodoItem", TodoItem);
        }
    }
});
//# sourceMappingURL=TodoItem.js.map