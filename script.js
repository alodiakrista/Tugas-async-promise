var formDataArray =  [];

function saveData() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var storage = document.getElementById("storage").value;

    var data = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        address: address,
        storage: storage,
    };

    formDataArray.push(data);

    if (storage === "session") {
        sessionStorage.setItem("formData", JSON.stringify(formDataArray));
    } else if (storage === "cookie") {
        document.cookie = "formData" + JSON.stringify(formDataArray);
    }

    // reset form
    document.getElementById("myForm").reset();
}

// reset data
function resetData() {
    sessionStorage.removeItem("formData");
    document.cookie = "formData=;expires=Thu, 01 Jan 1970 00:00:00 UTC";

    document.getElementById("data").innerHTML = "";
}

// display data
function displayData() { 
    var saveData = sessionStorage.getItem("formData") || getCookie("formData");

    if (saveData) {
        var data = JSON.parse(saveData);

        var output = "";

        for (var i = 0; i < data.length; i++) {
            output += "Data" + (i+1) + ":<br>" +
                      "First Name: " + data[i].firstName + "<br>" +
                      "Last Name: " + data[i].lastName + "<br>" +
                      "Gender: " + data[i].gender + "<br>" + 
                      "Address: " + data[i].address + "<br>" + 
                      "Storage: " + data[i].storage + "<br><br>";
        }

        document.getElementById("data").innerHTML = output;
    } else {
        document.getElementById("data").innerHTML = "tidak ada data";
    }
}

function getCookie(name) {
    var cookieArr = document.cookie.split(",");

    for (var i = 0; i <cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }

    return null;
}