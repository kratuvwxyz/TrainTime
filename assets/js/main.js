setInterval(currentTime, 1000);

function currentTime() {
    let t = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentTime").text(t);
}

//Initialize Firebase
const config = {
    apiKey: "AIzaSyCUtBavexVKCdgC6lu1qLHvL8xqoxNTaz8",
    authDomain: "anytimeistraintime-05192018.firebaseapp.com",
    databaseURL: "https://anytimeistraintime-05192018.firebaseio.com",
    projectId: "anytimeistraintime-05192018",
    storageBucket: "anytimeistraintime-05192018.appspot.com",
    messagingSenderId: "725294297761"
};
firebase.initializeApp(config);
//database triggered via firebase
let database = firebase.database();

// calling database for getting stored information from Firebase
database.ref().on("child_added", function (res, prevChildKey) {
    // res = response from Firebase

    let firstTimeConverted = moment(res.val().firstTrain, "HH:mm").subtract(1, "years");
    let diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    let tRemainder = diffTime % res.val().frequency;
    let tMinTillTrain = res.val().frequency - tRemainder;
    let nextTrain = moment().add(tMinTillTrain, "minutes");


    $("#train-table > tbody").append(`
        <tr>
            <td>${res.val().name}</td>
            <td>${res.val().destination}</td>
            <td>${res.val().firstTrain}</td>
            <td>${res.val().frequency}</td>
            <td>${tMinTillTrain}</td>
        </tr>
    `);
    

});