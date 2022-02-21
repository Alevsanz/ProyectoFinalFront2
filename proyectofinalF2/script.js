const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display="flex";
    fulImg.src = reference;
}

function closeImg(){
    fulImgBox.style.display="none";
}

function abrir(){
    document.getElementById("vent").style.display="block";
}

function cerrar(){
    document.getElementById("vent").style.display="none";
}

function enviar(){
    txt_1 = document.getElementById("txt_1").value;
    txt_2 = document.getElementById("txt_2").value;
    select = document.getElementById("select").value;
    selectb = document.getElementById("selectb").value;
    val=0;
    if(txt_1==""){
        val++;
    }
    if(txt_2==""){
        val++;
    }
    if(select==""){
        val++;
    }
    if(selectb==""){
        val++;
    }
    if(val==0){
        document.getElementById("btn").disabled=false;
    }
    else{
        document.getElementById("btn").disabled=true;
    }    
}
document.getElementById("txt_1").addEventListener("keyup",enviar);
document.getElementById("txt_2").addEventListener("keyup",enviar);
document.getElementById("select").addEventListener("change",enviar);
document.getElementById("selectb").addEventListener("change",enviar);
document.getElementById("btn").addEventListener("click", ()=>{
    alert("Haz enviado tu pedido exitosamente, en 30 minutos podras disfrutar de la mejor comida del Perú")
})
