function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $('#Vards').text("Hello, " + profile.getName() + "!");
    $("#googlePicture").attr("src", profile.getImageUrl());
    $("#googlePictureModal").attr("src", profile.getImageUrl());
    $("#Epasts").text(profile.getEmail());

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        $('#Vards').text("Hello Stranger!");
        $("#googlePicture").attr("src", "");
        $("#Epasts").text("");
    });
}


function showModal()
{
    $('.ui.modal')
     .modal('show')
}
                      
                    