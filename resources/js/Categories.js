
function getCategories(){
  var cat = read("/categories",loadCategories);
  console.log(cat);
}
// var loadCategories = function (data)
function loadCategories(){
  var test_tree=[
          {
            icon: "glyphicon glyphicon-list",
            text: "Categorias",
            nodes: [
            {
              text: "Articulos Informaticos",
              nodes: [
                {
                  text: "Software"
                },
                {
                  text: "Hardware"
                }
              ]
            },
            {
              text: "Cocina",
              nodes: [
              {
                text:"Cocina Francesa"
              },
              {
                text:"Cocina Mediterranea"
              },
              {
                text:"Cocina al Aire Libre"
              },
              {
                text:"Accesorios de cocina"
              }
              ]
            }
          ]
        }
      ];
      console.log(test_tree);
   $('#tree').treeview({data: test_tree, borderColor:"#050528", multiSelect: false , backColor:"rgba(19, 110, 117,0.8)" ,onhoverColor:"#5d5e60", color:"#070707",showCheckbox: true});
}

loadCategories();