const mainContent = document.getElementById("mainContent");
const form = document.getElementById("ticketForm");
const successTicket = document.getElementById("successTicket");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const fullName = formData.get("fname").trim();
    const email = formData.get("email").trim();
    const githubUsername = formData.get("ghusername").trim();
    const avatarFile = formData.get("avatar");

    let isValid = true;

    if (!fullName) {
        isValid = false;
    }

    if (!email) {
        isValid = false;
    }

    if (!githubUsername) {
        isValid = false;
    }

    if (!avatarFile) {
        isValid = false;
    }

    if (isValid) {
        generateTicket(fullName, email, githubUsername, avatarFile);
    }
});

function generateTicket(name, email, github, avatarFile) {
    const avatarUrl = URL.createObjectURL(avatarFile);
    const formattedGithub = github.startsWith("@") ? github : `@${github}`;

    document.getElementById("userName").textContent = name;
    document.getElementById("userEmail").textContent = email;

    document.getElementById("ticketAvatar").src = avatarUrl;
    document.getElementById("ticketAvatar").alt = `${name}'s avatar`
    document.getElementById("ticketName").textContent = name;
    document.getElementById("ticketGithub").textContent = formattedGithub;

    document.getElementById("mainContent").style.display = "none";
    document.getElementById("successTicket").style.display = "flex";
}