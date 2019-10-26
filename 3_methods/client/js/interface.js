function postReqFunction() {

    axios.post('http://127.0.0.1:8000/postReq')
        .then(function (response) {
            document.getElementById("clickMsg").innerHTML = response.data;
        })
        .catch(function (error) {
            console.log("Exception occured: " + error);
        })
}

function putReqFunction() {
    axios.put('http://127.0.0.1:8000/putReq')
        .then(function (response) {
            document.getElementById("clickMsg").innerHTML = response.data;
        })
        .catch(function (error) {
            console.log("Exception occured: " + error);
        })
}

function deleteReqFunction() {
    axios.delete('http://127.0.0.1:8000/deleteReq')
        .then(function (response) {
            document.getElementById('clickMsg').innerHTML = response.data;
        })
        .catch(function (error) {
            console.log("Exception occured: " + error);
        })
}