function clock() {
    // We create a new Date object and assign it to a variable called "time".
var time = new Date(),

    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),

    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),


    seconds = time.getSeconds();

document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);

var todo_arr = [];

function insert(ele)
{
    if(event.key === 'Enter')
    {
        todo_arr.push(ele.value);
        var fn = ele.value;
        console.log(fn);
        if(todo_arr.length > 0)
        {
            $('.item-list ul').append('<div class="col-xs-8"><li>' +fn+ '</div></li> <div class="status col-xs-2"><i class="fa fa-check-circle fa-lg" aria-hidden="true"></i></div> <div class="delete col-xs-2"><i class="fa fa-minus-circle fa-lg" aria-hidden="true"></i>');
        }
        else {
            $('.item-list ul').append('<li>No ToDos Yet!></li>');
        }

    }

}

$(".delete").children('i').click(function() {

});

$(".item-list ul").children('i').click(function() {
    console.log("hi");
    $(this).toggleClass("fa-check-circle fa-retweet");
});
