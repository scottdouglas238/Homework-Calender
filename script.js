const $form = document.querySelector("#my-form9");
// const $planned9 = document.querySelector("#planned9");
// const $button9 = document.querySelector("#button9");

// $("#planned9").val(localStorage.getItem("tree"));
// $('#button9').click(function(){
//     localStorage.setItem("tree", $('#planned9').val());
// });
// $form.addEventListener("submit", function (e){
//     e.preventDefault();
//     localStorage.setItem("tree", $('#planned9').val());
// });
setInterval(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    );
});
for(i=9; i<=17; i++){
    $('#planned' + i).val(localStorage.getItem("button" + i));
}
$('.saveBtn').on('click', function(){
    let id = $(this).attr('id');
    let i = id.substring(6);
    console.log('here: ' + i);
    localStorage.setItem($(this).attr('id'), $('#planned' + i).val());
});