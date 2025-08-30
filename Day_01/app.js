function change_text() {
  let text1 = "Hello World";
  let text2 = "Profile Page!!!";
  let content = document.getElementById("demo").innerHTML;
  if (content == text1) {
    document.getElementById("demo").innerHTML = text2;
  } else {
    document.getElementById("demo").innerHTML = text1;
  }
}
