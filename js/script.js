console.log("Cześć!");

let delateHeaderButton = document.querySelector(".js-delateHeaderButton");
let header = document.querySelector(".js-header");

let radiuseImageButton = document.querySelector(".js-radiuseImageButton");
let imageHubert = document.querySelector(".js-imageHubert");


delateHeaderButton.addEventListener("click", () => {
    if (delateHeaderButton.innerText === "usuń nagłówek") {
        delateHeaderButton.innerText = "nagłówek zniknął";
    }

    header.remove();

});

radiuseImageButton.addEventListener("click", () => {
    radiuseImageButton.innerText === "zaokrąglij zdjęcie" ? "normalne zdjęcie" : "zaokrąglij zdjęcie";

    imageHubert.classList.toggle("main__imageHubertRadius");

});
