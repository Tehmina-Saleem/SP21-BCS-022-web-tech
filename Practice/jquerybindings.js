//it will be exceuted after page load
$(function(){
$("#addbutton").click(handlebtnclick);
// $("#todos li").click(removeme)
$("#todos").on("click", "li", removeme)
});
function handlebtnclick(){
    var newtodo= $("#newtodo").val();
    if(!newtodo){
        //form handling
        $("#newtodo").addClass("error");
        return;
    }
    $("#newtodo").removeClass("error");
    $("#newtodo").val("")
$("#todos").append("<li>"+newtodo+"</li>")
$("#todos li").click(removeme)
}
function removeme() {
    $(this).remove();
  }