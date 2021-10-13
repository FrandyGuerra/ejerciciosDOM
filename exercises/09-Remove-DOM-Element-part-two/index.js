let parent= document.querySelector('#parentLi');
var childs= parent.childNodes;

parent.removeChild(childs[3]);

console.log(parent);
