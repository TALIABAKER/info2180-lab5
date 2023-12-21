window.onload = function () {
    var lookup = document.getElementById("lookup");
    var input = document.getElementById("country");
    var result = document.getElementById("result");
    var cityBtn = document.getElementById("cities");

    lookup.addEventListener("click", function (e) {
        e.preventDefault();

        var httpRequest = new XMLHttpRequest();
        var url = "http://localhost:8888/info2180-lab5/world.php";
        var info = input.value;
        var exec = '?country=' + info;

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    result.innerHTML = response;
                } else {
                    alert("Unable to process request");
                }
            }
        };

        httpRequest.open('GET', url + exec, true);
        httpRequest.send();
    });

    cityBtn.addEventListener("click", function (e) {
        e.preventDefault();

        var httpRequest = new XMLHttpRequest();
        var url = "http://localhost:8888/world.php";
        var info = input.value;
        var cityDetails = '&context=city_btn';
        var exec = '?country=' + info + cityDetails;

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    result.innerHTML = response;
                } else {
                    alert("Unable to process request");
                }
            }
        };

        httpRequest.open('GET', url + exec, true);
        httpRequest.send();
    });
};
