const clockTitle = document.querySelector(".xams-timer");

const getXmas = function () {
  const ms = new Date(2022, 11, 25) - new Date();
  const days = String(Math.floor(ms / 86400000)).padStart(2, "0");
  const noDays = ms % 86400000;
  const hours = String(Math.floor(noDays / 3600000)).padStart(2, "0");
  const noHours = noDays % 3600000;
  const minutes = String(Math.floor(noHours / 60000)).padStart(2, "0");
  const noMinutes = noHours % 60000;
  const seconds = String(Math.floor(noMinutes / 1000)).padStart(2, "0");
  const noSeconds = noMinutes % 1000;
  const tenMS = String(Math.floor(noSeconds / 10)).padStart(2, "0");;

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s ${tenMS}`;
};

getXmas();
setInterval(getXmas, 10);