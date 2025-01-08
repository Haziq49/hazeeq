document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const increaseButton = document.getElementById("increase-progress");
    const resetButton = document.getElementById("reset-progress");
    const simulateButton = document.getElementById("simulate-progress");
    let progress = 0;

    // Increase progress by 10%
    increaseButton.addEventListener("click", function () {
        if (progress < 100) {
            progress += 10;
            updateProgress(progress);
        } else {
            alert("Progress is complete!");
        }
    });

    // Reset progress to 0%
    resetButton.addEventListener("click", function () {
        progress = 0;
        updateProgress(progress);
    });

    // Simulate file upload
    simulateButton.addEventListener("click", function () {
        progress = 0;
        updateProgress(progress);

        const interval = setInterval(function () {
            if (progress < 100) {
                progress += Math.random() * 10; // Simulate random increments
                if (progress > 100) progress = 100;
                updateProgress(progress);
            } else {
                clearInterval(interval);
                alert("Download complete!");
            }
        }, 500); // Simulate progress every 500ms
    });

    function updateProgress(value) {
        progressBar.style.width = value + "%";
        progressBar.style.background = value === 100
            ? "linear-gradient(90deg, #ff9800, #ffc107)"
            : "linear-gradient(90deg, #4caf50, #81c784)";
    }
});
