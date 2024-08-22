const gifImages = [
    "/my website/assets/images/gif/2023-03.gif",
    "/my website/assets/images/gif/2023-04.gif",
    "/my website/assets/images/gif/2023-08.gif",
    "/my website/assets/images/gif/2023-09.gif",
    "/my website/assets/images/gif/2023-10.gif",
    "/my website/assets/images/gif/2023-11.gif",
    "/my website/assets/images/gif/2023-50.gif",
    "/my website/assets/images/gif/2023-100.gif",
    "/my website/assets/images/gif/2024-01.gif",
    "/my website/assets/images/gif/2024-02.gif",
    "/my website/assets/images/gif/2024-02.gif",
    "/my website/assets/images/gif/2024-03.gif",
    "/my website/assets/images/gif/2024-50.gif",
    "/my website/assets/images/gif/Top_100_Liked.gif"
];
const containerl = document.querySelector(".MyBadges .container .lBadges");

gifImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    containerl.appendChild(img);
});
