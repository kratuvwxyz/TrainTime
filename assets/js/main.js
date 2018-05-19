// JavaScript Document


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

//Button for adding Trains
$("#add-train-btn").on("click", function(event){
	
	event.preventDefault();
	
	//Grabs user input
	var trainName = $("#train-name-input").val().trim();
	var trainDesti = $("#destination-input").val().trim();
	var trainFirst = $("#first-train-input").val().trim();
//	var firstTimeConverted = moment(trainFirst, "HH:mm").subtract(1, "years");
//	var currentTime = moment();
//	var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
	var trainFrequency = $("#frequency-input").val().trim();
//	var tRemainder = diffTime % trainFrequency;
//	var tMinTillTrain = trainFrequency - tRemainder;
//	var nextTrain = moment().add(tMinTillTrain, "minutes");
	
	//Creates local "temporary" object for holding train data
	
	var newTrain2 = {
		name: trainName,
		destination: trainDesti,
		firstTrain: trainFirst,
		frequency: trainFrequency
	};
	
	//Uploads train data to the database
	database.ref().push(newTrain2);
	
	//Alert
	alert("Train information successfully added");
	
	//Clears all of the text-boxes
	$("#train-name-input").val("");
	$("#destination-input").val("");
	$("#first-train-input").val("");
	$("#frequency-input").val("");
	
});

//Create Firebase event for adding train to the database and a row in the html when a user adds an entry

database.ref().on("child_added", function(childSnapshot, prevChildKey){
	
	//store everything into a variable
	var trainName3 = childSnapshot.val().name;
	var trainDestination3 = childSnapshot.val().destination;
	var trainFirstTrain3 = childSnapshot.val().firstTrain;
	var trainFrequency3 = childSnapshot.val().frequency;
	
	var firstTimeConverted = moment(trainFirstTrain3, "HH:mm").subtract(1, "years");
	var currentTime = moment();
	var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
	var tRemainder = diffTime % trainFrequency3;
	var tMinTillTrain = trainFrequency3 - tRemainder;
	var nextTrain = moment().add(tMinTillTrain, "minutes");
	
	//Add each train's data into the table
	$("#train-table > tbody").append("<tr><td>"+trainName3+"</td><td>"+trainDestination3+"</td><td>"+trainFrequency3+"</td><td>"+moment(nextTrain).format("hh:mm")+"</td><td>"+tMinTillTrain+"</td></tr>");
	$(".currentTime").append(currentTime);
	
});