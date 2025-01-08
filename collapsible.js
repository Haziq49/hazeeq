document.addEventListener("DOMContentLoaded", function () {
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach((button) => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector(".icon");

            // Toggle content visibility
            if (content.classList.contains("open")) {
                content.classList.remove("open");
                content.style.maxHeight = null;
                icon.textContent = "➕";
            } else {
                content.classList.add("open");
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = "➖";
            }
        });
    });
});
