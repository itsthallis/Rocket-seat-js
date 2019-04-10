
var listElement = document.querySelector( '#app ul' );
var inputElement = document.querySelector( '#app input' );
var buttonElement = document.querySelector( '#app button' );
var todos = JSON.parse(localStorage.getItem( 'list_todos' )) || [];


// Renderiza todos
function renderTodos(){

    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement( 'li' );
        var todoText = document.createTextNode( todo );
        var excluir = document.createElement( 'a' );
        var excluirText = document.createTextNode( 'Excluir' );
        var pos = todos.indexOf( todo );

        excluir.setAttribute( 'onclick', 'deleteTodo( '+ pos +' )' );
        excluir.setAttribute( 'href', '#' );
        excluir.appendChild( excluirText );

        todoElement.appendChild( todoText );
        todoElement.appendChild( excluir );

        listElement.appendChild( todoElement );
    }
}

renderTodos();


// Adiciona todos
function addTodo() {
    var todoText = inputElement.value;
    
    todos.push( todoText );
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;


// Deleta todos
function deleteTodo( pos ) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}


// Salva no local storage
function saveToStorage() {
    localStorage.setItem( 'list_todos', JSON.stringify( todos ) );
}