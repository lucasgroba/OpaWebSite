
function getCategories(){
  var cat = read("/categories",loadCategories);
}
// var loadCategories = function (data)
var loadCategories = function(cat){
  var tree = [];
  for (var key in cat) {
    var element = cat[key];
    var nodo = new Object();
    nodo.text = element.Name;
    nodo.href = 'http://localhost:3000/templates/deals?name='+element.Name;
    tree.push(nodo);
  }
  var test_tree=JSON.stringify(tree);
  $('#Tree').treeview({onNodeSelected :  function ( event , data ) {console.log('entre al evento');},data: test_tree, borderColor:"#050528", multiSelect: false , backColor:"rgba(19, 110, 117,0.8)" ,onhoverColor:"#5d5e60", color:"#070707",showCheckbox:false});
}


  


  $('#Tree').on("nodeSelected", function(event, data){
    alert(data);
    console.log('entre al evento');
  });




getCategories();