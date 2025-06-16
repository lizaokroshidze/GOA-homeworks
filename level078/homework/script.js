function changeImage() {
    let img = document.getElementById("myImage");
    if (img.src.includes("https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg")) {
        img.src = "https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/17d49270-1b2a-4511-80a8-1c5dbd41e8c8/article-cat-vet-visit-guide.jpg";
    } else {
        img.src = "https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg";
    }
}