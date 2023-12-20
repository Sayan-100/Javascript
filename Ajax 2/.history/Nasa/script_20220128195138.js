function displayImage(data) {
    $('<img>', {
        src: data.url
    });
}


$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
    method: 'GET',
    success: displayImage
})