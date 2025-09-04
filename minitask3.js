for (let i = 0; i < 5; i++) {
  let baris = "";
  for (let j = 0; j < 5; j++) {
    if (i == 0 || i == 4 || j == 0 || j == 4) {
      baris = baris + " *";
    } else {
      baris = baris + "  ";
    }
  }
  console.log(baris);
}

// segitiga
for (let s = 0; s < 5; s++) {
  let segitiga = "";
  for (let t = 0; t < 9; t++) {
    if (s + t == 4 && t < 5) {
      segitiga = segitiga + "*";
    } else if (s + t == 6 && t < 6) {
      segitiga = segitiga + "*";
    } else if (s + t == 8 && t < 7) {
      segitiga = segitiga + "*";
    } else if (s + t == 10 && t < 8) {
      segitiga = segitiga + "*";
    } else if (s + t == 12) {
      segitiga = segitiga + "*";
    } else {
      segitiga = segitiga + " ";
    }
  }
  console.log(segitiga);
}

//
for (let l = 0; l < 5; l++) {
  let labirin = "";
  for (b = 0; b < 6; b++) {
    if (l == 0 || l == 4) {
      labirin = labirin + "* ";
    } else if (l == 2 || b == 5) {
      labirin = labirin + "* ";
    } else if (l == 1 && b == 4) {
      labirin = labirin + "* ";
    } else {
      labirin = labirin + "  ";
    }
  }
  console.log(labirin);
}
