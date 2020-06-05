function revers(str) {
  if (str.split(' ').length < 2) {
    console.log("Text Tidak Boleh Kosong / Kurang Dari 2");
    return false;
  }

  console.log(str.split(' ').reverse().join(' '));
}

revers('saya makan bakso');
