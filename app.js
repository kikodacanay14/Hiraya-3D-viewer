const viewer = document.querySelector("#hiraya-viewer");
const viewerShell = document.querySelector("#viewer-shell");
const loadingLabel = document.querySelector("#loading-label");
const loadingProgress = document.querySelector("#loading-progress");
const loadingFill = document.querySelector("#loading-fill");
const errorState = document.querySelector("#error-state");
const fullscreenLabel = document.querySelector("#fullscreen-label");

const initialView = Object.freeze({
  orbit: "35deg 70deg 115%",
  target: "auto auto auto",
  fieldOfView: "35deg",
});

viewer.addEventListener("progress", ({ detail }) => {
  const percentage = Math.round(detail.totalProgress * 100);
  loadingFill.style.width = `${percentage}%`;
  loadingProgress.setAttribute("aria-valuenow", String(percentage));
  loadingLabel.textContent = `Loading Hiraya 3D model… ${percentage}%`;
});

viewer.addEventListener("load", () => {
  loadingFill.style.width = "100%";
  loadingProgress.setAttribute("aria-valuenow", "100");
});

viewer.addEventListener("error", () => {
  errorState.hidden = false;
});

document.querySelector("#reset-view").addEventListener("click", () => {
  viewer.cameraOrbit = initialView.orbit;
  viewer.cameraTarget = initialView.target;
  viewer.fieldOfView = initialView.fieldOfView;
  viewer.resetTurntableRotation();
  viewer.resetInteractionPrompt();
});

document.querySelector("#fullscreen").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await viewerShell.requestFullscreen();
    }
  } catch {
    errorState.hidden = false;
    errorState.querySelector("h2").textContent = "Fullscreen is unavailable.";
    errorState.querySelector("p").textContent =
      "Your browser or presentation view does not allow fullscreen mode.";
  }
});

document.addEventListener("fullscreenchange", () => {
  fullscreenLabel.textContent = document.fullscreenElement
    ? "Exit fullscreen"
    : "Fullscreen";
});

document.querySelector("#reload-page").addEventListener("click", () => {
  window.location.reload();
});
