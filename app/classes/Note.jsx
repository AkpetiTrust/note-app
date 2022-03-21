class Note {
  constructor(title, text, category, date, id, timestamp) {
    this.title = title;
    this.text = text;
    this.category = category.name;
    this.date = date;
    this.color = category.color;
    this.id = id;
    this.timestamp = timestamp;
  }
}

export default Note;
