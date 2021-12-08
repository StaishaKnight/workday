var date= $("#currentDay").text(moment().format('MMMM Do YYYY, h:m a'))

//create save button that reads the task description tect area and places it into local storage.setitem
$(".savebutton").on("click",function(){
var descriptionvalue= $(this).siblings(".taskDescription").val()
var timekey= $(this).parent().attr("id")

localStorage.setItem(timekey,descriptionvalue)


})
//Grab the values of anything of saved to local storage.getitem and have them render in their appropriate text areas based in local id

//create function to conditionally render the correct colors to the time blocks based on if they are in past present and future