var LoginViewModel = function (isLoggedIn, toastr) {
    var username = ko.observable();
    var password = ko.observable();

    var login = function () {
        if (username() == "byron@acklenavenue.com") {
            toastr.success("Logged in as " + username() + ".");
            isLoggedIn(true);
        } else {
            toastr.error("There was a problem with your username or password.");
            username("");
            password("");
        }
    };

    var logout = function () {
        toastr.info("User " + username() + " logged out.");
        isLoggedIn(false);
    };

    return {
        Username: username,
        Password: password,
        Login: login,
        Logout: logout,
        IsLoggedIn: isLoggedIn        
    };
};
