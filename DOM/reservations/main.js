const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const checking = function () {
  const name = document.getElementById("name").value;
  const note = document.createElement("p");
  let str = "";
  if (reservations[name]) {
    if (reservations[name].claimed) {
      str = "Hmm, someone already claimed this reservation";
    } else {
      str = "welcome, " + name;
    }
  } else {
    str = "You have no reservation";
  }
  note.innerHTML = str;
  document.body.appendChild(note);
};
