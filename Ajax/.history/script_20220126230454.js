function fetchRandomDogImage() {
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function() {
        console.log(xhrRequest.response);
        // string in from of JSON to JSON object
        var responseJSON = JSON.parse(xhrRequest.response);
        // JSON.str json ->string
        var imageUrl = responseJSON.message;
        $('#dog-image').attr('src', imageUrl);
    };
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    xhrRequest.send();
}

$('#fetch-dog-image-button').click(fetchRandomDogImage);