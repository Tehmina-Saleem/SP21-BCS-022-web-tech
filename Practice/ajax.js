// console.log("code started")
// // will be executed when the function has been loaded
// $(function(){
//     console.log("doing bindings")
// $("#load").click(sendajax);
// });
// function sendajax(){
// console.log("Sending ajax request");
// //send requset here
// $.get("students.txt", handleresponse)
// console.log("Request sent");
// }
// function handleresponse(response){
//     console.log("Response received");
// $("#result").empty();
// //the response will be append here that is in students.txt file
// $("#result").append(response);
// }
// console.log("code finished")




//this is the simplified code
$(function(){
    $("#load").click(function(){
        $.get("students.txt", function(response){
        $("#result").empty();
        $("#result").append(response);
    });
});
});