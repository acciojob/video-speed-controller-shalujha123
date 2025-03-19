const video = document.getElementById("video");
      const playPauseBtn = document.getElementById("playPauseBtn");
      const rewindBtn = document.getElementById("rewindBtn");
      const forwardBtn = document.getElementById("forwardBtn");
      const volumeSlider = document.getElementById("volume");
      const speedSlider = document.getElementById("playbackSpeed");
      const progress = document.querySelector(".progress");
      const progressFilled = document.querySelector(".progress__filled");

      // Play/Pause Toggle
      playPauseBtn.addEventListener("click", () => {
        if (video.paused) {
          video.play();
          playPauseBtn.textContent = "❚ ❚";
        } else {
          video.pause();
          playPauseBtn.textContent = "►";
        }
      });

      // Update Progress Bar
      video.addEventListener("timeupdate", () => {
        const percent = (video.currentTime / video.duration) * 100;
        progressFilled.style.width = `${percent}%`;
      });

      // Volume Control
      volumeSlider.addEventListener("input", () => {
        video.volume = volumeSlider.value;
      });

      // Playback Speed Control
      speedSlider.addEventListener("input", () => {
        video.playbackRate = speedSlider.value;
      });

      // Rewind 10 seconds
      rewindBtn.addEventListener("click", () => {
        video.currentTime = Math.max(0, video.currentTime - 10);
      });

      // Forward 25 seconds
      forwardBtn.addEventListener("click", () => {
        video.currentTime = Math.min(video.duration, video.currentTime + 25);
      });

      // Click to Seek in Progress Bar
      progress.addEventListener("click", (e) => {
        const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = newTime;
      });