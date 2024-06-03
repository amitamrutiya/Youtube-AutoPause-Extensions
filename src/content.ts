function pauseYouTubeVideo() {
  const video: HTMLVideoElement | null = document.querySelector('video');
  if (video && !document.hidden) {
    video.pause();
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    pauseYouTubeVideo();
  }
});

pauseYouTubeVideo();
