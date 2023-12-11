// $(function(){
// loadrecipies();
// });
// function loadrecipies(){
// //$.ajax is genarilize methd has same syntax for all requests get post put and delete
// $.ajax({
// url:"https://usman-fake-api.herokuapp.com/api/recipes", 
// method:"GET",
// success:function(response){
//     console.log(response);
//     var recipies= $("#recipies");
//     recipies.empty();
//     for(i=0;i<response.length;i++){
//         var rec=response[i];
//     }
//     `<div class="recipe"><h3>${rec.title}</h3><p><button class="btn btn-danger btn-sm float-right">delete</button> ${rec.body}</p></div>`;
// }
// });
// }


$(function() {
    loadRecipies();
  });
  function loadRecipies() {
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/recipes",
      method: "GET",
      success: function(response) {
        console.log(response);
        var recipies = $("#recipies");
        recipies.empty();
        for (var i = 0; i < response.length; i++) {
          var rec = response[i];
          recipies.append(
            `<div class="recipe"><h3>${rec.title}</h3><p><button class="btn btn-danger btn-sm float-right">delete</button> ${rec.body}</p></div>`
          );
          // recipes.append("<div><h3>" + rec.title + "</h3></div>");
        }
      }
    });
  }