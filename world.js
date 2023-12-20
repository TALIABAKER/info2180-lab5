window.onload = function () {

    var look_up = document.getElementById("lookup");
    var input = document.getElementById("country");
    var result = document.getElementById("result");
    var city_btn = document.getElementById("cities");

    look_up.addEventListener("click", function (e) {
        e.preventDefault();

        var httpRequest = new XMLHttpRequest();
        var url = "http://localhost:8888/info2180-lab5/world.php";
        var info = input.value;
        var exec = '?country=' + info;

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var rspns = httpRequest.responseText;
                    result.innerHTML = rspns;
                } else {
                    alert("Unable to process request");
                }
            }
        }
        httpRequest.open('GET', url + exec, true);
        httpRequest.send();
    });

    city_btn.addEventListener("click", function (e) {
        e.preventDefault();

        var httpRequest = new XMLHttpRequest();
        var url = "http://localhost:8888/world.php";
        var info = input.value;
        var city_details = '&context=city_btn'
        var exec = '?country=' + info + city_details;

        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var rspns = httpRequest.responseText;
                    result.innerHTML = rspns;
                } else {
                    alert("Unable to process request");
                }
            }
        }
        httpRequest.open('GET', url + exec, true);
        httpRequest.send();
    });
}