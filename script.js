/*$(document).ready(function(){   
    let gto = $('#gusto').val();

    function addGusto(){
        gto= $('#gusto').val();
        let gtos = [];
        

        if(gto == "" || gtos.includes(gto))
        {
            alert("Valor repetido o vacio")
        }
        else
        {
            

            $('#head-gusto').append(
                $('<tr>',{'text':gto,'id':gto+"name"})
                )
    
            $('#head-prtg').append(
                $('<tr>',{'text':'%','id':gto+"%"})
                ) 
            
            $('#head-edit').append(
                $("<tr><td><a  id-data:'"+gto+"' val:'"+gto+"'class='editar' type='button'>Editar</a></td></tr>")
                ) 
            
            //document.getElementById('head-edit').innerHTML += `<td><a href="" type='button' onclick="transformarEditable(this)">Editar</a></td>`;




        }
                   
    }

    //onclick='"+transformarEditable(this)+"'

   

    function transformarEditable(fila)
    {
        var editando = false;
        alert("asdasd")
        if(editando === false)
        {   
            var nodetr= fila.parentNode;
            var nodetd=nodetr.firstElementChild;
            
        }
    }

    

    $("#btn-gustos").on('click',addGusto)

    $("#"+gto).on('click',transformarEditable(this))
    
});
*/

let gusto;

function editar(){
    if(document.getElementById("gusto").value==='')
    {
        alert("Casilla vacía")
    }
    else
    {
        gusto = document.getElementById("gusto").value;
    
        //document.getElementById('head-gusto').innerHTML += `<td id='"+${gusto}+"name'>${gusto}</td>`;
        //document.getElementById('head-prtg').innerHTML += `<td id='"+${gusto}+"prt'>0</td>`;
        //document.getElementById('head-edit').innerHTML += `<td id='"+${gusto}+"'><a onclick="transformarEditable(this)">insert</a></td>`;
        document.getElementById('tablaprincipal').innerHTML += `<td>${gusto}</td><td>0</td><td><a onclick="transformarEditable(this)">insert</a></td>`;
    }
}



function transformarEditable(fila)
    {
        var editando = false;
        
        if(editando === false)
        {   
            var nodetr= fila.parentNode.parentNode;
            var nodestr= nodetr.getElementsByTagName('td');
            var form= document.getElementById('formulario');
            var Gusto=nodestr[0].firstChild.nodeValue;
            var porcentaje=nodestr[1].firstChild.nodeValue
            var codigohtml='<td><input id="editname" type="text" name="gusto"  value="'+Gusto+'"></td>'+
         '<td><input type="text" name="porcentage" id="editprt" value="'+porcentaje+'"></td>'+'<span>En edicion</span></td>'
        }
        nodetr.innerHTML=codigohtml;
        editando=true;
        showTastes()
    

    }

let tst = document.getElementById("oculto");
tst.style.display='none';

function showTastes() {
    var x = document.getElementById("oculto");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
}
    
function noshowTastes(){
    var x = document.getElementById("oculto");
    if (x.style.display != "none") {
        x.style.display = "none";
    } 
}

function cancelar(){
    location.reload();
}



function enviar_formulario(){
    document.formulario1.submit()
    localStorage.setItem('name',document.getElementById('name').value)
    localStorage.setItem('email',document.getElementById('email').value)
    localStorage.setItem('telefono',document.getElementById('telefono').value)
    localStorage.setItem('gusto',document.getElementById('editname').value)
    localStorage.setItem('editprt',document.getElementById('editprt').value) 
 }



$("#btn-gustos").on('click',editar);

