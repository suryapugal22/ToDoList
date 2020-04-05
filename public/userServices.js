class userServices {

    // def(){
    //     $.ajax({
    //         url: url,
    //         type: type,
    //         async: false,
    //         data: JSON.stringify( _data ),
    //         traditional: true,
    //         datatype: 'json',
    //         success: result => { return callBack(result) },
    //         error: result => { return callBack(result) }
    //     })
    // }




    list(callBack) {
        $.ajax({
            url: "https://5e6cfb3e4e86f8001618c887.mockapi.io/todoList",
            type: 'get',
            async: false,
            // data: JSON.stringify(data),
            // datatype: json,
            // traditional: true,
            success: result => callBack(result),
            error: result => callBack(result)
        })
    }


    send(data) {
        var formData = { "list": data };
        console.log(formData);
        $.ajax({
            url: "https://5e6cfb3e4e86f8001618c887.mockapi.io/todoList",
            type: 'POST',
            async: false,
            data: formData,
            datatype: 'JSON',
            // traditional: true,
            success: result => console.log(result),
            error: result => console.log(result)
        })


    }


    delete(data, callBack) {
        $.ajax({
            url: 'https://5e6cfb3e4e86f8001618c887.mockapi.io/todoList/' + data,
            type: 'DELETE',
            async: false,
            // data: JSON.stringify(data),
            // traditional: true,
            // dataType: 'json',
            success: result => { return callBack(result) },
            error: result => { return callBack(result) }
        });
    }
}