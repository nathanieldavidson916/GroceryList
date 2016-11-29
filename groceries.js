var myList = [];

function addItem(){
    var input = document.getElementById("newItem").value;
    if(myList.indexOf(input) == -1){
        myList.push(input);
        console.log(myList);
        var list = document.getElementById("listDisplay");

        var item = document.createElement("li");
        var btnClose = document.createElement("button");
        var itemName = document.createTextNode(input);

        //add class btn to btnClose
        btnClose.classList.add("btn");
        btnClose.classList.add("btn-danger");
        btnClose.classList.add("btn-xs");

        btnClose.addEventListener("click", removeParentListItem)

        //creating iconClose and it's classes
        var iconClose = document.createElement("span");
        iconClose.classList.add("glyphicon");
        iconClose.classList.add("glyphicon-remove");


        item.appendChild(btnClose);
        item.appendChild(itemName);
        list.appendChild(item);
        document.getElementById("newItem").value = '';
    }
    
}
function removeParentListItem(){
    var mom = this.parentNode;
    var grandma = mom.parentNode;

    //remove item from array
    var itemRemove = mom.lastChild.nodeValue;
    console.log("itemRemove: " + itemRemove);
    var itemIndex = myList.indexOf(itemRemove);
    console.log("itemIndex: " + itemIndex);
    myList.splice(itemIndex, 1);
    console.log(myList);

    grandma.removeChild(mom);

}
//save list
function saveList(){
    var convertedArray = "";
    for(var i = 0; i < myList.length; ++i){
        if(i != (myList.length-1))
            convertedArray += (myList[i] + ',');
        else
            convertedArray += myList[i];
    }
    setCookie('convertedArray', convertedArray, 10000);
}
//clear list
function clearList(){
    var list = document.getElementById("listDisplay");
    list.innerHTML = "";
    myList=[];
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
