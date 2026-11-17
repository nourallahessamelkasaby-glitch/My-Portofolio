
const themeButton = document.getElementById("themeBtn");
const buttonLabel = themeButton.querySelector("span:first-child");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const darkModeEnabled = document.body.classList.contains("dark");

    buttonLabel.textContent = darkModeEnabled ? "Light Mode" : "Dark Mode";
});
