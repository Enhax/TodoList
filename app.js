import { TodoList } from "./components/todoList.js";
import { fetchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try{
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=4')
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))

}catch(e){
    const alertElement = createElement('div', {
        class: 'alert alert-primary m-2',
        role: 'alert'
    })
    alertElement.innerText = 'Impossible de charger les données'
    document.body.prepend(alertElement)
    console.error(e)
}