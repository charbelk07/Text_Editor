const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let defualtPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";
  defPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", () => {
  if (defualtPrompt) {
    defualtPrompt.prompt();
    defualtPrompt.userChoice.then((selectedResult) => {
      if (selectedResult.outcome === "accepted") {
        butInstall.setAttribute("disabled", true);
        butInstall.textContent = "Successfully installed";
      } else {
        console.log("Why no install me?");
      }
    });
  }

  console.log("click");
  console.error("there was an issue installing");
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Clear prompt
  butInstall.textContent = "Application Installed, and its ready to be used!";
});
