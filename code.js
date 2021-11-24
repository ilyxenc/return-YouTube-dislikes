let returnDislike = (videoId) => {
    let apiUrl = "https://return-youtube-dislike-api.azurewebsites.net"

    let url = new URL(window.location.href)

    fetch(`${apiUrl}/votes?videoId=${videoId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: "Bearer ",
        },
    })
        .then((response) => response.json())
        .then((response) => {
            let newFormatter = new Intl.NumberFormat()
            let formattedDislikes = newFormatter.format(response.dislikes)

            let dislike = document.querySelector("span")
            dislike.innerText = "👎 " + formattedDislikes + " 👎"
        })
        .catch();
}

document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector("button");

    btn.addEventListener("click", function () {
        let val = document.querySelector("input").value

        returnDislike(val)
    });
});