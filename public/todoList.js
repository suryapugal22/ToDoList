var user = new userServices;

$(function () {
    let date = new Date();
    console.log(moment(date).format("Do MMM YY"));
    $("#date").append(moment(date).format("Do MMM YY"));


    user.list(data => {
        console.log(data);
        let content = '';
        data.forEach(e => {
            // console.log(e);
            content += `<li> <p> ${e.list} </p> <button class="btn btn-primary" id="${e.id}" onclick=del(${e.id})> <i class="fa fa-trash-o" aria-hidden="true"></i> </button>
            </li>`
        });
        $("#tList").append(content);
    });

});

$("#newList").keydown(e => {
    if (e.keyCode === 13) {
        let list = $("#newList").val();

        if (list.trim() !== null && list.trim() !== "") {
            user.send(list);
            window.location.reload();
        } else {
            Swal.fire({
                title: 'Nothing',
                text: 'You Entered Nothing',
                showCloseButton: true
            });
        }
    }
});

function del(id) {
    user.delete(id, data => {
        console.log(data);

        // window.location.reload();
    });
    window.location.reload();
}

function getEvent(event) {
    console.log(event);
}

window.mySwipe = $('#mySwipe').Swipe().data('Swipe');