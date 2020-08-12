const $form = document.querySelector("#my-form9");
const $planned9 = document.querySelector("#planned9");
const $button9 = document.querySelector("#button9");

let filled = localStorage.getItem("filled");
if(filled) {
    filled = JSON.parse(filled);
} else {
    filled = {};
}

console.log(filled);

$form.addEventListener("submit", function (e){
    e.preventDefault();
    
    const area0900 = $planned9.value;
    
    filled.push({//instead of filled.push use 
        area0900: area0900,
    });
    console.log(filled);
    localStorage.setItem("filled", JSON.stringify(filled));
    

    //somewhere in data store the time, where it references the time it's for
    //how to associate the text area with 9:00
    //how to get it to stick
    // let p = document.querySelector("planned9 p");
    // p.textContent = document.getElementById("area").value;
});
setInterval(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    );
});
