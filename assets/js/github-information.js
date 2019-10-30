function fetchGitHubInformation(event) {
    var username = $("#gh-username").val();
    if(!username) {
        $("#gh-user-data").html(`<2h>Please enter a GitHub username</2h>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..."/>
        </div>`);  

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
    ) .then (
        function(response) {
            var userData = response;
            $("#gh-user-data").html(userInformationHTML(userData));
        },
        function (errorResponse) {
            if(errorResponse.status === 404) {
                $("#hg-user-data").html(
                    `<h2>No info found for user ${username}</h2>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<h2>Error: ${errorResponseJSON.message}</h2>`);
            }
        });
       
}
 