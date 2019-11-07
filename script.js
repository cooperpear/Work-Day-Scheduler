$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
})
$("#hour-9 .description").val(localStorage.getItem("hour-9"));

function hourupdater() {
    var currenthour = moment().hours()
    $(".time-block").each(function () {
        var blockhour = parseInt($(this).attr("id").split("-")[1])
        if (blockhour < currenthour) { $(this).addClass("past") }
        else if (blockhour === currenthour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }

        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    });
}

hourupdater();

var interval = setInterval(hourUpdater, 15000);

