function filterNotes(notes, filter) {
  filter = filter.toLowerCase();
  if (!filter) return notes;
  return notes.filter((note) => {
    if (
      note.text.toLowerCase().includes(filter) ||
      note.title.toLowerCase().includes(filter)
    ) {
      return true;
    }

    let final = false;

    filter.split(" ").every((word) => {
      if (note.text.toLowerCase().split(" ").includes(word)) {
        final = true;
        return true;
      } else {
        final = false;
        return false;
      }
    });

    if (final) return final;

    filter.split(" ").every((word) => {
      if (note.title.toLowerCase().split(" ").includes(word)) {
        final = true;
        return true;
      } else {
        final = false;
        return false;
      }
    });

    return final;
  });
}

export default filterNotes;

// Might implement regex for the search
