var oldd = null;
var slider = document.getElementById("abelislider");

slider.oninput = function () {
  oldd = testNum(this.value);
};

function testNum(neww) {
  if (Number(neww) == 1) {
    document.getElementById("abelImage").src = canap.src;
  } else {
    if (Number(neww) == 20) {
      document.getElementById("abelImage").src = hacker.src;
    } else {
      if (Number(neww) % 2 == 0) {
        if (Number(neww) < oldd) {
          document.getElementById("abelImage").src = g1.src;
        } else {
          document.getElementById("abelImage").src = d1.src;
        }
      } else {
        if (Number(neww) < oldd) {
          document.getElementById("abelImage").src = g2.src;
        } else {
          document.getElementById("abelImage").src = d2.src;
        }
      }
    }
  }

  return Number(neww);
}

var canap = new Image();
canap.src = "img/grandMere.jpg";

var d1 = new Image();
d1.src = "img/Marche1-a.png";

var d2 = new Image();
d2.src = "img/Marche2-a.png";

var g1 = new Image();
g1.src = "img/Marche1-r.png";

var g2 = new Image();
g2.src = "img/Marche2-r.png";

var hacker = new Image();
hacker.src = "img/Hackerbel.jpg";
