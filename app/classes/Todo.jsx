class Todo {
  constructor(
    title,
    description,
    subtasks,
    date,
    id,
    timestamp,
    done,
    dueDate
  ) {
    this.title = title;
    this.description = description;
    this.subtasks = subtasks;
    this.date = date;
    this.id = id;
    this.timestamp = timestamp;
    this.done = done;
    this.dueDate = dueDate;
  }
}

export default Todo;
