console.log("running app.js");
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
        const $tick = $(`
            <div class="status col-xs-2">
                <i class="fa fa-check-circle fa-lg" aria-hidden="true"></i>
            </div>
            `);
        const $cross = $(`
            <div class="delete col-xs-2">
                <i class="fa fa-minus-circle fa-lg" aria-hidden="true"></i>
            </div>
            `);

        const $li = $(`
        <li>
            <div class="col-xs-8 text">${ele.value}</div>
            <div class="buttons">
            <div>
        </li>
        `);

        $cross.click(function() {
            console.log(todo_arr);
            const $par = $(this).parents()[1];
            const $index = todo_arr.indexOf($par);
            todo_arr.splice($index, 1);
            $($par).remove();
            console.log(todo_arr);
        });

        $tick.click(function(){
            $li.children('div').toggleClass("toggleText");
            $tick.children('i').toggleClass("fa-check-circle fa-retweet");
        });

        $($li.children('.buttons')[0]).append($tick).append($cross);
        todo_arr.push($li[0]);
        $('.item-list ul').append($li);
    }
}
