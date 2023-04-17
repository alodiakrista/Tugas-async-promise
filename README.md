
# WEB STORAGE


##  **index.html**
```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebStorage</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form id="myForm">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName">

        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName">

        <label for="gender">Gender</label>
        <select name="gender" id="gender">
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>

        <label for="address">Address</label>
        <textarea name="address" id="address" cols="10" rows="5"></textarea>

        <label for="storage">Storage</label>
        <select name="storage" id="storage">
            <option value="session">Session Storage</option>
            <option value="cookie">Cookie Storage</option>
        </select>

        <button type="button" onclick="saveData()">Save Data</button>
        <button type="button" onclick="displayData()">Display Data</button>
        <button type="button" onclick="resetData()">Reset Data</button>
    </form>

    

    <div id="data"></div>

    <script src="script.js"></script>
    
</body>
</html>
```


##  **script.js**

```
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
```

##  **style.css**
```
label {
  display: block;
  font-family: Arial, sans-serif;
  font-weight: bold;
  margin-bottom: 5px;
}

  
input[type="text"], select, textarea {
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 5px;
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
}
  
select option {
  font-family: Arial, sans-serif;
}
  
/* buttons */
button {
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: rgb(94, 154, 226);
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 14px;
  /* margin-bottom: 15px; */
  padding: 14px 20px;
  margin-right: 12px;
}
  
button:hover {
  background-color: burlywood;
}
  
/* div data */
#data {
  font-family: Arial, sans-serif;
  font-size: 14px;
  margin-top: 20px;
}
  
#data br {
  display: none;
}
```




