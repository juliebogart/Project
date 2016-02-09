

$(document).ready(function() {
  $(".btn").on("click", addItem);

  $("ol").on("click", ".link-delete", deleteItem);
});


function addItem() {

  var text = window.prompt("Please leave your review here");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  //
  var numItems = $("li").length;
{ $(".total").html(numItems + " items"); }


}
  


function deleteItem(event) {
  console.info(event);

  $(event.target).parent().remove();
}
