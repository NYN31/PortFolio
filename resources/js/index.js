
var MenuItems = document.getElementById("MenuItems") ;
MenuItems.style.maxHeight = "0px" ;

function menutoggle() {
    if(MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "300px" ;
    }else {
        MenuItems.style.maxHeight = "0px" ;
    }
}


   
var expItems1 = document.getElementById("expItems-1") ;
let exp_a1 = 1 ;
function exptoggle1() {
    if(exp_a1 == 1) { expItems1.style.display = "inline" ; exp_a1 = 0 ; console.log("2: ", exp_a1) ;}
    else { expItems1.style.display = "none" ; exp_a1 = 1 ;}
            
}

var expItems2 = document.getElementById("expItems-2") ;
let exp_a2 = 1 ;
function exptoggle2() {
    if(exp_a2 == 1) { expItems2.style.display = "inline" ; exp_a2 = 0 ; console.log(exp_a2) ;}
    else { expItems2.style.display = "none" ; exp_a2 = 1 ;}
}

var expItems3 = document.getElementById("expItems-3") ;
let exp_a3 = 1 ;
function exptoggle3() {
    if(exp_a3 == 1) { expItems3.style.display = "inline" ; exp_a3 = 0 ; }
    else { expItems3.style.display = "none" ; exp_a3 = 1 ;}
}

var expItems4 = document.getElementById("expItems-4") ;
let exp_a4 = 1 ;
function exptoggle4() {
    if(exp_a4 == 1) { expItems4.style.display = "inline" ; exp_a4 = 0 ; }
    else { expItems4.style.display = "none" ; exp_a4 = 1 ;}
}

var expItems5 = document.getElementById("expItems-5") ;
let exp_a5 = 1 ;
function exptoggle5() {
    if(exp_a5 == 1) { expItems5.style.display = "inline" ; exp_a5 = 0 ; }
    else { expItems5.style.display = "none" ; exp_a5 = 1 ;}
}

