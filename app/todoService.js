System.register([], function(exports_1) {
    var TodoService;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by guozhiqi on 2016/1/28.
             */
            TodoService = (function () {
                function TodoService() {
                    this.TodoList = ["郭志奇", "袁金舟", "郭语晨"];
                }
                TodoService.prototype.add = function (item) {
                    this.TodoList.push(item);
                };
                TodoService.prototype.remove = function (item) {
                    for (var i = 0; i < this.TodoList.length; i++) {
                        if (this.TodoList[i] === item) {
                            this.TodoList.splice(i, 1);
                        }
                    }
                };
                return TodoService;
            })();
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todoService.js.map