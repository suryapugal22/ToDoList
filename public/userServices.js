class userServices {

    get(callBack) {
        var url = "http://5e6cfb3e4e86f8001618c887.mockapi.io/todoList";
        $.get(url, function (data) {
            callBack(data);
            return;
        });
    }


    send(data){
        var formData = data;
        console.log(data);
        var url = "http://5e6cfb3e4e86f8001618c887.mockapi.io/todoList";
        $.post(url,formData, function (data) {
            console.log(data);
            return;
        });

    }


}