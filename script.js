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

    }
    else
    {
        gusto = document.getElementById("gusto").value;
        var count = 0;
        var edit = "editar";
    
        document.getElementById('head-gusto').innerHTML += `<td id='"+${gusto}+"name'>${gusto}</td>`;
        document.getElementById('head-prtg').innerHTML += `<td id='"+${gusto}+"prt'>0</td>`;
        document.getElementById('head-edit').innerHTML += `<td id='"+${gusto}+"'><a type='button' onclick='"transformarEditable()"'>Editar</a></td>`;
        
    }
}



function transformarEditable(){
        let rowSelected = document.getElementById("#"+gusto+"name");
        alert(rowSelected)
    }

$("#btn-gustos").on('click',editar);
$("#"+gusto).on("click",transformarEditable)
