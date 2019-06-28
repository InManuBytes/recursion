// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // could be more than one element, so this function returns an array of them
  let elements = []; //in HTML each node is an element
  //A function to check if a node—element has a class 
  //and then do the same for each childNode
    function checkElement(element){
        let classes = element.classList;
        if (classes && classes.contains(className)){
            elements.push(element);
        } 
        element.childNodes.forEach(function(child){
            checkElement(child);
        })
    }
    //invoke the function on the actual <body>
    checkElement(document.body)
  return elements;
};
