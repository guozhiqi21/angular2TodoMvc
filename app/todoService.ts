/**
 * Created by guozhiqi on 2016/1/28.
 */
export  class  TodoService
{
    TodoList:string[];
    constructor(){
        this.TodoList=["郭志奇","袁金舟","郭语晨"];
    }

    add(item:string)
    {
        this.TodoList.push(item);
    }

    remove(item:string)
    {
      for(let i=0;i<this.TodoList.length;i++)
      {
          if(this.TodoList[i]===item)
          {
              this.TodoList.splice(i,1);
          }
      }
    }
}