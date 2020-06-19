function onLoadFuncs() {
    basicSyntax();
    stringTypes();
}

function basicSyntax() {
    var x, y, z;
    x = 5; y = 6; z = x + y;

    document.getElementById("out1").innerHTML = z;
}

function stringTypes() {
    document.getElementById("DoubQuotes").innerHTML = "John Doe";
    document.getElementById("SingleQuotes").innerHTML = 'John Doe';
}