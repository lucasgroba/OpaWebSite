

var switchContent = function (page) {
    $.ajax({
        url: page,
    }).done(function (data) {
        $(".containerD").html(data);
    });
};
var switchTreeContent = function (page) {
    $.ajax({
        url: page,
    }).done(function (data) {
        $(".container-tree").html(data);
    });
};

switchContent('templates/deals/dealList.html');
switchTreeContent('templates/categories/tree_Categories.html');


