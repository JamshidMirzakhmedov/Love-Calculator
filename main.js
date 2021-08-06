function mathRandom() {
    var n = Math.random();
    n = Math.floor(n * 100) + 1;
   document.getElementById("result").innerHTML = n + "%";
}