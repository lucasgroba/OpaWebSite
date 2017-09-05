

var switchContent = function (page) {
    $.ajax({
        url: page,
    }).done(function (data) {
        $(".container").html(data);
    });
};


switchContent('templates/deals/dealList.html');


