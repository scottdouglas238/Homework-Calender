for(i=9; i<=17; i++){
    $('#planned' + i).val(localStorage.getItem("button" + i));
}
$('.saveBtn').on('click', function(e){
    e.preventDefault();
    let id = $(this).attr('id');
    let i = id.substring(6);
    localStorage.setItem($(this).attr('id'), $('#planned' + i).val());
});

setInterval(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    );
});
const currentHour = parseInt(moment().format("H"));
$(".time-block").each(function(){
    const hour = parseInt($(this).attr("id").replace("hour-", ""));
    console.log(hour)
    if (hour < currentHour) {
        $(".time-block").addClass("past")
    }else if (currentHour === hour) {
        $(".time-block").addClass("present")
    } else{
        $(".time-block").addClass("past")
    }
})

// const $form = document.querySelector("#my-form9");
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




