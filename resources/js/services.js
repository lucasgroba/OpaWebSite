/*Services facade to connect to backend*/
var categoriesURI = "/categories";
var paymentMethods = "/paymentMethods";
var deals = "/deals";

var baseUrl = "http://localhost:3000";

function read(resourceUrl , callback) {
    $.ajax({
        url: returnRequestUrl(resourceUrl),
        contentType: "application/json"
    }).done(function(data) {
        console.log(data);
        callback(data);
    });
}

function create(resourceUrl, resourceData) {
    $.ajax({
        url: returnRequestUrl(resourceUrl),
        data: resourceData,
        type: 'POST'
    }).done(function(data) {
        console.log(data);
        return data;
    });
}

function update(resourceUrl, id, resourceData) {
    $.ajax({
        url: returnRequestUrl(resourceUrl + "/" + id),
        data: resourceData,
        type: 'PUT'
    }).done(function(data) {
        console.log(data);
        return data;
    });
}

function remove(resourceUrl, id) {
    $.ajax({
        url: returnRequestUrl(resourceUrl + "/" + id),
        type: 'DELETE'
    }).done(function(data) {
        console.log(data);
        return data;
    });
}

function returnRequestUrl(resourceUrl) {
    return baseUrl + resourceUrl;
}

var categories = function() {
    var url = returnRequestUrl(categoriesURI);

    return getResource(url);
};