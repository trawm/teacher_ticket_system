function openSettings() {
    document.getElementById("frontpage").style.display = "none";
    document.getElementById("settingspage").style.display = "block";
}

function closeSettings() {
    document.getElementById("frontpage").style.display = "block";
    document.getElementById("settingspage").style.display = "none";
}

function sendFunction() {
    document.getElementById("inputarea").value = "";
    document.getElementById("plan").selectedIndex = 0;
}