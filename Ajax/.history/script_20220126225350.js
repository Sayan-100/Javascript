function fetchRandomDogImage() {
    var xhrRequest = XMLHttpRequest();

    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
}

$('#fetch-dog-image-button').click(fetchRandomDogImage);