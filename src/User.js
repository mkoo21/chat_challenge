
var talk = function(){
  console.log('foo');
}

var loop = function(){
  setTimeout(
    function(){
      talk();
      loop();
    }, 
    Math.random() * 5000
  )
};

loop();

export default loop;
