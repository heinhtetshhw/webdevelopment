function question10(x) {
  var hr = 0;
  var min = 0;
  var sec = 0;
  if (x <= 59) {
    sec = x;
    console.log(x + " sec");
  } else if (x <= 3540) {
    min = Math.trunc(x / 60);
    sec = x % 60;
    if (sec == 0) {
      console.log(min + " min");
    } else console.log(min + " min " + sec + " sec");
  } else {
    hr = Math.trunc(x / 3600);
    min = Math.trunc((x % 3600) / 60);
    sec = (x % 3600) % 60;
    if (x % 3600 == 0) {
      console.log(hr + " hr");
    } else if (min == 0) {
      console.log(hr + " hr " + sec + " sec");
    } else if (sec == 0) {
      console.log(hr + " hr " + min + " min");
    } else if (hr == 0) {
      console.log(min + " min " + sec + " sec");
    } else console.log(hr + " hr " + min + " min " + sec + " sec");
  }
}

question10(4568);
