function SelfCout() {
    var counter = 0;
    function CountIncrement() { counter++, console.log(counter)};
    return CountIncrement;
}
var myFun= SelfCout();
var myFun2= SelfCout();
 
myFun(); 
myFun();
myFun();
myFun();
 