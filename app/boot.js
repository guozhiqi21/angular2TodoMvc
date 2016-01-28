System.register(["angular2/core", 'angular2/platform/browser', 'angular2/common', './ToDoAppHeader', './TodoAppFooter', './todoService', './TodoList'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, common_1, ToDoAppHeader_1, TodoAppFooter_1, todoService_1, TodoList_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ToDoAppHeader_1_1) {
                ToDoAppHeader_1 = ToDoAppHeader_1_1;
            },
            function (TodoAppFooter_1_1) {
                TodoAppFooter_1 = TodoAppFooter_1_1;
            },
            function (todoService_1_1) {
                todoService_1 = todoService_1_1;
            },
            function (TodoList_1_1) {
                TodoList_1 = TodoList_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(todoService) {
                    this.todoService = todoService;
                    this.visibleTodos = this.todoService.TodoList;
                    console.log("数据位" + this.visibleTodos);
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'todo-app',
                        directives: [common_1.CORE_DIRECTIVES, ToDoAppHeader_1.ToDoAppHeader, TodoAppFooter_1.TodoAppFooter, TodoList_1.TodoList],
                        templateUrl: 'app/todoApp.html'
                    }), 
                    __metadata('design:paramtypes', [todoService_1.TodoService])
                ], App);
                return App;
            })();
            exports_1("App", App);
            browser_1.bootstrap(App, [todoService_1.TodoService]);
        }
    }
});
//# sourceMappingURL=boot.js.map