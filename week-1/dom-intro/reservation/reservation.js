const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function CheckReservation() {
  let answer = document.getElementById("text").value;
  answer = capitalizeFirstLetter(answer);
  if (reservations[answer] && !reservations[answer].claimed) {
    alert(`Welcom, ${answer}`);
    reservations[answer].claimed = true;
  } else if (reservations[answer] && reservations[answer].claimed) {
    alert("Hmm, someone already claimed this reservation");
  } else {
    alert("You have no reservation");
  }
}
