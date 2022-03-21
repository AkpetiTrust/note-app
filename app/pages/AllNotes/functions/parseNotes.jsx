import moment from "moment";

function parseNotes(notes) {
  let finalNotes = [];
  if (!notes.length) return finalNotes;
  let latestMonth = moment(notes[0].timestamp).format("MMM, YYYY");
  finalNotes.push({ month: latestMonth, notes: [] });
  let index = 0;
  notes.forEach((note) => {
    if (moment(note.timestamp).format("MMM, YYYY") === latestMonth) {
      finalNotes[index].notes.push(note);
    } else {
      latestMonth = moment(note.timestamp).format("MMM, YYYY");
      finalNotes.push({ month: latestMonth, notes: [note] });
      index++;
    }
  });

  return finalNotes;
}

export default parseNotes;
