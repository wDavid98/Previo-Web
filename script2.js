function show() {
    //document.getElementById("nombre2"). = localStorage.getItem('name');
    document.getElementById("nombre2").textContent = localStorage.getItem('name')
    document.getElementById("email2").value = localStorage.getItem('email');
    document.getElementById("telefono2").value = localStorage.getItem('telefono');
    document.getElementById("gusto2").value = localStorage.getItem('gusto');
    document.getElementById("prt2").value = localStorage.getItem('editprt');
}

show();