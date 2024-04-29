var MainDiagram;
var AllChangingElements;

window.addEventListener("load", function() { 
    MainDiagram = document.getElementById("main-diagram");
    AllChangingElements = MainDiagram.querySelectorAll(".secDriver, .primDriver, .sec-arrow, .prim-arrow"); // OR

    const secDriverRects = document.getElementById("main-diagram").querySelectorAll(".secDriver");   
    const primDriverRects = document.getElementById("main-diagram").querySelectorAll(".primDriver"); 

    secDriverRects.forEach(driver => {
        driver.addEventListener("mouseover", hoverOn);
        driver.addEventListener("mouseout", hoverOff);
    });

    primDriverRects.forEach(driver => {
        driver.addEventListener("mouseover", hoverOn);
        driver.addEventListener("mouseout", hoverOff);
    });
    
});


function hoverOn(evt){

    var target;
    if(evt.target.classList.contains("hoverEl")){
        target = evt.target
    }
    else{
        target= evt.target.parentNode;
    }

   var driverName = target.id;

    AllChangingElements.forEach(el => {
        if (!el.classList.contains(driverName)) {
            el.classList.remove('opaque');
            el.classList.add('transparent');
        }   
        else{
            el.classList.remove('transparent');
            el.classList.add('opaque');
        }
        
    });

    target.classList.remove('transparent');
    target.classList.add('opaque');
}    


function hoverOff(evt){

    AllChangingElements.forEach(el => {
        el.classList.remove('transparent');
        el.classList.add('opaque');
    });

}  
