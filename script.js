const countwords = () => {
  let noc = document.getElementById("words").value.length;
  let now = document.getElementById("words").value;
  now = now.match(/\w+/g);
  now = now.length;
  document.getElementById("presentData").innerHTML =
    "Total characters are: " + noc;
  document.getElementById("presentDataa").innerHTML = "Total Words are: " + now;
};
