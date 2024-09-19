const horsEl = document.getElementById("hour");

const minuteEl = document.getElementById("minutes");

const secondEl = document.getElementById("seconds");

const amPmEl = document.getElementById("amPm");

let timeFormate = 12;

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let amPm = "AM";

  if (timeFormate === 12) {
    if (h > 12) {
      h = h - 11;
      amPm = "PM";
    } else if (h === 0) {
      h = 1;
    }
  }
// وضع اصفار قبل الارقام ف الساعه
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  horsEl.innerHTML = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  amPmEl.innerText = amPm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

// الفنكشن دي بتحول الساعه من 12 ل 24 والعكس
function changeFormate() {
  if (timeFormate === 12) {
    timeFormate = 24;
  } else {
    timeFormate = 12;
  }
}


