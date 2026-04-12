
function displayLastModified() {
    // I researched the document object here https://www.w3schools.com/jsref/dom_obj_document.asp
    var lastMod = document.lastModified;
    
    // I used the example here https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml_delete to make undrstand innerHTML 
    document.getElementById("last-mod-date").innerHTML = "Last Modified: " + lastMod;
}