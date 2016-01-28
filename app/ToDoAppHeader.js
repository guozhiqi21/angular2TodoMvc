System.register(['angular2/core', 'angular2/common', './todoService'], function(exports_1) {
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
    var ToDoAppHeader;
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
            ToDoAppHeader = (function () {
                function ToDoAppHeader(formBuilder, todoService) {
                    this.newTodo = "";
                    this.todoService = todoService;
                }
                ToDoAppHeader.prototype.submit = function ($event) {
                    $event.preventDefault();
                    if (this.newTodo) {
                        this.todoService.add(this.newTodo);
                        this.newTodo = "";
                    }
                };
                ToDoAppHeader = __decorate([
                    core_1.Component({
                        selector: 'todo-app-header',
                        templateUrl: 'app/todoAppHeader.html',
                        bindings: [common_1.FORM_BINDINGS],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, todoService_1.TodoService])
                ], ToDoAppHeader);
                return ToDoAppHeader;
            })();
            exports_1("ToDoAppHeader", ToDoAppHeader);
        }
    }
});
//# sourceMappingURL=ToDoAppHeader.js.map