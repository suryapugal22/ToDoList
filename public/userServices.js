class userServices {

    get(callBack) {
        var url = "https://5e6cfb3e4e86f8001618c887.mockapi.io/todoList";
        $.get(url, function (data) {
            callBack(data);
            return;
        });
    }


    send(data) {
        var formData = data;
        console.log(data);
        var url = "https://5e6cfb3e4e86f8001618c887.mockapi.io/todoList";
        $.post(url, formData, function (data) {
            console.log(data);
            return;
        });
    }

    
    delete(data, callBack) {
        $.ajax({
            url: 'https://5e6cfb3e4e86f8001618c887.mockapi.io/todoList/' + data,
            type: 'DELETE',
            // data: JSON.stringify(data),
            // traditional: true,
            // dataType: 'json',
            success: function (result) { callBack(result); },
            error: function (result) { callBack(result); }
        });
    }
}