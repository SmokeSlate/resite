document.addEventListener("DOMContentLoaded", () => {
    fetch("../php/get-site-info.php")
        .then(response => response.json())
        .then(data => {
            document.getElementById("site-name").innerText = data.site_name;
        });

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            document.getElementById("profile-pic").src = user.photoURL;
        }
    });
});

function requestSite() {
    const request = document.getElementById("site-request").value;
    fetch("../php/request-site.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ request })
    });
}
