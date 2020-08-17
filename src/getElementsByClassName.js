// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {

  let results = [];
  let body = document.body;
  let hasClass = function(node) {
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }

    for (let i = 0; i < node.childNodes.length; i++) {
      hasClass(node.childNodes[i]);
    }
  };

  hasClass(body);

  return results;

};
