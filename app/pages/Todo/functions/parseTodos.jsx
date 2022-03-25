import moment from "moment";

function parseTodos(todos) {
  let finalTodos = [];
  if (!todos.length) return finalTodos;
  let latestMonth = moment(todos[0].timestamp).format("MMM, YYYY");
  finalTodos.push({ month: latestMonth, todos: [] });
  let index = 0;
  todos.forEach((todo) => {
    if (moment(todo.timestamp).format("MMM, YYYY") === latestMonth) {
      finalTodos[index].todos.push(todo);
    } else {
      latestMonth = moment(todo.timestamp).format("MMM, YYYY");
      finalTodos.push({ month: latestMonth, todos: [todo] });
      index++;
    }
  });

  return finalTodos;
}

export default parseTodos;
