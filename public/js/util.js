let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let players = {};
let readyStates = {};

function waitForYoutubeApi(videoIds) {
  if (typeof YT !== "undefined") {
    videoIds.forEach((videoId) => {
      try {
        players[videoId] = new YT.Player(videoId, {
          height: "100%",
          width: "100%",
          videoId: videoId,
        });
        readyStates[videoId] = true;
      } catch (e) {
        console.log(e);
      }
    });
  } else {
    setTimeout(() => waitForYoutubeApi(videoIds), 100);
  }
}

/* -------------------------------------------------------------------------- */
/*                          ID dos Vídeos do Youtube                          */
/* -------------------------------------------------------------------------- */

const videoIds = [
  "zW5wpJY1rgQ",
  "5HsTGE-tl4o",
  "1oahTaVIQvk",
  "9r8VtP5kdoo",
  "K5Ni6Zh6MCY",
  "jrTMMG0zJyI",
];
waitForYoutubeApi(videoIds);

videoIds.forEach((videoId) => {
  const trailerButton = document.getElementById(`trailer-button-${videoId}`);
  const trailerModal = document.getElementById(`trailer-modal-${videoId}`);

  trailerButton.addEventListener("click", function () {
    trailerModal.showModal();
    try {
      if (readyStates[videoId]) {
        players[videoId].playVideo();
      }
    } catch (e) {
      console.log(e);
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".trailer-button") && trailerModal.open) {
      if (readyStates[videoId]) {
        players[videoId].pauseVideo();
      }
      trailerModal.close();
    }
  });
});

/* -------------------------------------------------------------------------- */
/*                                  ScrollBar                                 */
/* -------------------------------------------------------------------------- */

const body = document.querySelector("body");

window.addEventListener(
  "scroll",
  () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      body.classList.add("scroll-bottom");
    } else if (window.scrollY === 0) {
      body.classList.add("scroll-top");
    } else {
      body.classList.remove("scroll-top");
      body.classList.remove("scroll-bottom");
    }
  },
  { passive: true },
);
