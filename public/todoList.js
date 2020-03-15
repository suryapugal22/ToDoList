var user = new userServices;


$(function () {
    var toDate = new Date();
    console.log(moment(toDate).format("MMM Do YY"));
    $("#date").append(moment(toDate).format("MMM Do YY"));

    user.get(function (data) {
        localStorage.setItem("yourList", JSON.stringify(data));
    })
});


$("#refresh").click(function () {
    $(this).toggleClass("rotate");
});


$(function () {
    var toDoList = JSON.parse(localStorage.getItem("yourList"));
    if (toDoList == null) {
        var toDoList = [];
    }
    appendContent(toDoList, function (callBack) {
        $("#toDoList").append(callBack);

    });
})


$("#list").keydown(function (e) {
    if (e.keyCode === 13) {
        add(this.value);
        var data = {"list":this.value};
        user.send(data);
    }
});


function add(list) {
    var toDoList = JSON.parse(localStorage.getItem("yourList"));
    if (toDoList == null) {
        var toDoList = [];
    }
    toDoList.push({ list });
    localStorage.setItem("yourList", JSON.stringify(toDoList));
    // $("#list").val('');
    window.location.reload();
}



function appendContent(data, callBack) {
    var content = "";
    for (let d of data) {
        content += "<li>";
        content += "<input type='checkbox' name='list' id=''>";
        content += `<label> ${d.list} </label>`;
        content += "</li>";
    }
    callBack(content);
}