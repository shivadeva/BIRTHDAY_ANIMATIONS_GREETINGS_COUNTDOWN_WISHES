// targets
const day = document.getElementById("up-days");
const hour = document.getElementById("up-hours");
const min = document.getElementById("up-mins");
const sec = document.getElementById("up-secs");
const hideSection = document.querySelector(".hide-on-date")
const showMsg = document.querySelector(".show-on-date")


// show in webpage
function showTime(days, hours, mins, secs) {
  day.textContent = days;
  hour.textContent = hours;
  min.textContent = mins;
  sec.textContent = secs;
}

const countDownDate = new Date(`Nov 2, 2021 23:59:00`).getTime();
const countDown = setInterval(function () {
  const currentTime = new Date().getTime();
  const timeLeft = countDownDate - currentTime;

  // remaining
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

  //update time
  showTime(days, hours, mins, secs);
  
  //while time is over
  if (timeLeft < 0) {
    clearInterval(countDown);
    showTime("0", "0", "0", "0");
    document.querySelector("link[rel='shortcut icon").href =
      "./favicon_io/favicon-after.ico";
    document.title = "Teddy HappyBirthday"; 
    hideSection.style.display = 'none'; 
    showMsg.style.display = 'block';
  }
}, 1000);
