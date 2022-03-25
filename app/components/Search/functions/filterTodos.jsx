function filterTodos(todos, filter) {
  filter = filter.toLowerCase();
  if (!filter) return todos;
  return todos.filter((todo) => {
    if (
      todo.description.toLowerCase().includes(filter) ||
      todo.title.toLowerCase().includes(filter)
    ) {
      return true;
    }

    let final = false;

    filter.split(" ").every((word) => {
      if (todo.description.toLowerCase().split(" ").includes(word)) {
        final = true;
        return true;
      } else {
        final = false;
        return false;
      }
    });

    if (final) return final;

    filter.split(" ").every((word) => {
      if (todo.title.toLowerCase().split(" ").includes(word)) {
        final = true;
        return true;
      } else {
        final = false;
        return false;
      }
    });

    if (
      todo.subtasks.some((subtask) =>
        subtask.text.toLowerCase().includes(filter)
      )
    )
      final = true;

    return final;
  });
}

export default filterTodos;

// Might implement regex for the search
