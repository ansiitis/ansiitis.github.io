function GoogleShortenURLAPI() {
    $.ajax({
        url: "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyClb1gbn3hFP1-PNIcC9N9QGattF9xkZ2Q",
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: '{ longUrl:"' + longURL.value + '"}',
        success: function (response) {
            $('#ShortURL').text(response.id);
            $("#ShortURL").attr("href", response.id);
        },
        error: function (msg) { alert(msg); }
    });
};