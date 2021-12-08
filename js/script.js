var date= $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'))
var currenttime=moment().hours()
console.log(currenttime)

//create save button that reads the task description text area and places it into local storage.setitem
$(".savebutton").on("click",function(){
var descriptionvalue= $(this).siblings(".taskDescription").val()
var timekey= $(this).parent().attr("id")

localStorage.setItem(timekey,descriptionvalue)


})
//Grab the values of anything of saved to local storage.getitem and have them render in their appropriate text areas based in local id
$("#9 .taskDescription").val(localStorage.getItem("9"))
$("#10 .taskDescription").val(localStorage.getItem("10"))
$("#11 .taskDescription").val(localStorage.getItem("11"))
$("#12 .taskDescription").val(localStorage.getItem("12"))
$("#13 .taskDescription").val(localStorage.getItem("13"))
$("#14 .taskDescription").val(localStorage.getItem("14"))
$("#15 .taskDescription").val(localStorage.getItem("15"))
$("#16 .taskDescription").val(localStorage.getItem("16"))
$("#17 .taskDescription").val(localStorage.getItem("17"))


//create function to conditionally render the correct colors to the time blocks based on if they are in past present and future

function changecssbytime(){

$(".time-block").each(function(){
    var divid=$(this).attr("id")

    if(divid < currenttime){
$(this).addClass("past")
    }
else if (divid == currenttime ){
$(this).addClass("present")

}
else if (divid > currenttime){
$(this).addClass("future")
}

})
}

changecssbytime()