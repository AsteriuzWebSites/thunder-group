// let tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";
// let firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let players = {};
let readyStates = {};

function WaitForVideoBackground() {
  if (typeof VideoBackgrounds !== "undefined") {
    const heroVideo = new VideoBackgrounds("[data-vbg]");
  } else {
    setTimeout(WaitForVideoBackground, 100);
  }
}

WaitForVideoBackground();

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
        // console.log(e);
      }
    });
  } else {
    setTimeout(() => waitForYoutubeApi(videoIds), 100);
  }
}

function waitForVimeoApi(videoIds) {
  if (typeof Vimeo !== "undefined") {
    videoIds.forEach((videoId) => {
      try {
        const iframe = document.getElementById(`iframe-${videoId}`);
        players[videoId] = new Vimeo.Player(iframe);
        readyStates[videoId] = true;
      } catch (e) {
        // console.log(e);
      }
    });
  } else {
    setTimeout(() => waitForVimeoApi(videoIds), 100);
  }
}

/* -------------------------------------------------------------------------- */
/*                          ID dos Vídeos do Youtube                          */
/* -------------------------------------------------------------------------- */

const youtubeIds = [
  "naMB8YJ5yps", // Trailer
  "LYL0-9-Zb5s", // Daniel Penim
];
waitForYoutubeApi(youtubeIds);

youtubeIds.forEach((videoId) => {
  const videoButton = document.getElementById(`trailer-button-${videoId}`);
  const videoModal = document.getElementById(`trailer-modal-${videoId}`);

  videoButton.addEventListener("click", function () {
    videoModal.showModal();
    try {
      if (readyStates[videoId]) {
        players[videoId].playVideo();
      }
    } catch (e) {
      // console.log(e);
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".trailer-button") && videoModal.open) {
      if (readyStates[videoId]) {
        players[videoId].pauseVideo();
      }
      videoModal.close();
    }
  });
});

/* -------------------------------------------------------------------------- */
/*                           ID dos Vídeos do Vimeo                           */
/* -------------------------------------------------------------------------- */

const vimeoIds = [
  "993750211", // Daiso
  "993770374", // Daiso
  "993770393", // Nelson
  "993770328", // Studio
  "993770350", // Studio Kolles
];
waitForVimeoApi(vimeoIds);

vimeoIds.forEach((videoId) => {
  const videoButton = document.getElementById(`trailer-button-${videoId}`);
  const videoModal = document.getElementById(`trailer-modal-${videoId}`);

  videoButton.addEventListener("click", function () {
    try {
      if (readyStates[videoId]) {
        players[videoId].play();
      }
    } catch (e) {
      // console.log(e);
    }
    videoModal.showModal();
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".trailer-button") && videoModal.open) {
      if (readyStates[videoId]) {
        players[videoId].pause();
      }
      videoModal.close();
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

/* -------------------------------------------------------------------------- */
/*                                Contact Form                                */
/* -------------------------------------------------------------------------- */

// document.getElementById("contactForm").addEventListener("input", function () {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;
//   const mailtoLink = document.getElementById("mailtoLink");
//   const subject = `Message from ${name}`;
//   const body = `Email: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
//   mailtoLink.href = `mailto:contact@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
// });

document.getElementById("mailtoLink").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const mailtoLink = document.getElementById("mailtoLink");
  const subject = `Message from ${name}`;
  const body = `Email: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
  mailtoLink.href = `mailto:contatogrupothunder@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});
