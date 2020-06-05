function revers(str) {
  if (str.length < 1) {
    console.log("Text Tidak Boleh Kosong");
    return false;
  }

  console.log(str.split("").reverse().join(""));
}

revers("mas nakam");
