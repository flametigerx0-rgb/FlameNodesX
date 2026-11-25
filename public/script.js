
const statusBox = document.getElementById("status");
const consoleBox = document.getElementById("console");

function log(message) {
  consoleBox.textContent += "\n" + message;
}

document.getElementById("create").addEventListener("click", () => {
  statusBox.textContent = "Status: Setup required";
  log("SMP creation requested.");
  log("Cloud hosting backend is not connected yet.");
});

document.getElementById("start").addEventListener("click", () => {
  log("Start requested. Waiting for cloud server connection.");
});

document.getElementById("stop").addEventListener("click", () => {
  statusBox.textContent = "Status: Offline";
  log("Stop requested.");
});

async function checkStatus() {
  try {
    const response = await fetch("/api/status");
    const data = await response.json();
    log("API status: " + data.status);
  } catch {
    log("API is not connected yet.");
  }
}

checkStatus();
