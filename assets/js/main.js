setInterval(currentTime, 1000);

function currentTime() {
    let t = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentTime").text(t);
}

//Initialize Firebase
var config = {
    apiKey: "AIzaSyCUtBavexVKCdgC6lu1qLHvL8xqoxNTaz8",
    authDomain: "anytimeistraintime-05192018.firebaseapp.com",
    databaseURL: "https://anytimeistraintime-05192018.firebaseio.com",
    projectId: "anytimeistraintime-05192018",
    storageBucket: "anytimeistraintime-05192018.appspot.com",
    messagingSenderId: "725294297761"
};
firebase.initializeApp(config);
//database triggered via firebase
var database = firebase.database();

//Create Firebase event for adding train to the database and a row in the html when a user adds an entry


database.ref().on("child_added", function (res, prevChildKey) {


    //store everything into a variable
    var trainName3 = res.val().name;
    var trainDestination3 = res.val().destination;
    var trainFirstTrain3 = res.val().firstTrain;
    var trainFrequency3 = res.val().frequency;

    var firstTimeConverted = moment(trainFirstTrain3, "HH:mm").subtract(1, "years");
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var tRemainder = diffTime % trainFrequency3;
    var tMinTillTrain = trainFrequency3 - tRemainder;
    var nextTrain = moment().add(tMinTillTrain, "minutes");

    //Add each train's data into the table
    $("#train-table > tbody").append("<tr><td>" + trainName3 + "</td><td>" + trainDestination3 + "</td><td>" + trainFrequency3 + "</td><td>" + moment(nextTrain).format("hh:mm") + "</td><td>" + tMinTillTrain + "</td></tr>");
    

});