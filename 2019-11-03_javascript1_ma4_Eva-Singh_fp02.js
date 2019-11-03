async function callApi() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const json = await response.json();
        todoLoop(json);
    }
    catch (error) {
        console.log(error);
    }
}

callApi();


function todoLoop(json){

    const todoCards = document.querySelector(".todos");
    const todos = json.results;

    for (let i = 0; i < todos.length; i++) {
        todoCards.innerHTML += "<div>UserID: " + todos[i].userId + " Id: " + todos[i].id + " Title: " + todos[i].title + " Completed: " + todos[i].completed + "</div>";
    }
}

