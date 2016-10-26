var content = [
{ title: 'Riga' },
{ title: 'Cesis' },
{ title: 'Ventspils' },
{ title: 'Liepāja' },


// etc
];

$('.ui.search').search({
    source: content,
    type: 'standard',
    selectFirstResult: true,

    onSelect: function (event) {
        
        var selectedLocation = $('.title').text();
        $('#Selected').text(selectedLocation);


        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+selectedLocation+"&mode=json&units=metric&APPID=4660600a9227d784359e1776e14bad28", true);
        xhr.onload = function (getData) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                    var response = JSON.parse(xhr.responseText);
                    $('#TempID').text(response.main.temp);
                    $('#Location').text(response.name + ", " + response.sys.country);
                    $('#Conditions').text(response.weather[0].main + ", " + response.weather[0].description);

                } else {
                    $('#TempID').text(xhr.statusText);
                }
            }
        };
        xhr.onerror = function (getData) {
            console.error(xhr.statusText);
        };

        xhr.send(null);




        return 'default';
    }

});



