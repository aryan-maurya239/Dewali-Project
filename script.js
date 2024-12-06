const fireWorkBtn = document.getElementById("fireWorkBtn");
const getBlesBtn = document.getElementById("getBlesBtn");
const blasingsSection = document.getElementById("blasings");
const fireWorkContainer = document.getElementById("firework-container");
// const fireWorkContainar = document.getElementById("firework-containar");

getBlesBtn.addEventListener("click", () => {
  const rect = blasingsSection.getBoundingClientRect();
  window.scrollTo(0, rect.y);
});

let song = 1;
getBlesBtn.addEventListener("click", () => {
  if (song === 3) song = 1;
  fireWorkContainer.style.opacity = 1;
  fireWorkContainer.innerHTML = `<audio src="/img/gifs/song ${song}.mp3" autoplay></audio>`;

  setTimeout(() => {
    fireWorkContainer.style.opacity = 0;
  }, 2500);
  song++;
});


let crackerNum = 1;
fireWorkBtn.addEventListener("click", () => {
  if (crackerNum === 5) crackerNum = 1;
  fireWorkContainer.style.opacity = 1;
  fireWorkContainer.innerHTML = `
  <img src="/img/gifs/Cracker ${crackerNum}.gif" alt="Cracker ${crackerNum}" />
  <audio src="/img/gifs/bumm ${crackerNum}.mp3" autoplay></audio>
`;

  setTimeout(() => {
    fireWorkContainer.style.opacity = 0;
  }, 2500);
  crackerNum++;
});


const receiverName = document.querySelector("#receiver");
        const senderName = document.querySelector("#sender");
        receiverName.innerText = new URLSearchParams(location.search).get(
          "receiver"
        );
        senderName.innerText = new URLSearchParams(location.search).get("sender") || 'Anurag';