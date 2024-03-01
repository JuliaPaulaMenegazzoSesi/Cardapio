function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "flex"
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }else{
        document.getElementById("error").style.display = "flex"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal(){
    var selectPrato = document.getElementById("selectPrato");
    var selectBebida = document.getElementById("selectBebida");
    var selectSobremesa = document.getElementById("selectSobremesa");
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;

    switch (selectPrato.value) {
        case "quiche":
            total += 15.00
            prato = 15.00
            break;
        case "bife":
            total += 25.00
            prato = 25.00
            break;
        case "tomate":
            total += 20.00
            prato = 20.00
            break;
    }
    switch (selectBebida.value) {
        case "sangria":
            total += 7.00
            bebida = 7.00
            break;
        case "shirley-temple":
            total += 9.00
            bebida = 9.00
            break;
        case "refresco":
            total += 10.00
            bebida = 10.00
            break;
    }
    switch (selectSobremesa.value) {
        case "mimosa":
            total += 8.50
            sobremesa = 8.50
            break;
        case "panqueca":
            total += 9.50
            sobremesa = 9.50
            break;
        case "pretty5":
            total += 12.50
            sobremesa = 12.50
            break;
    }
    resultadoSpan.textContent = `R$${total.toFixed(2)}`
    document.getElementById("prato-pronto").innerHTML = `R$${prato.toFixed(2)}`;
    document.getElementById("bebida-pronto").innerHTML = `R$${bebida.toFixed(2)}`;
    document.getElementById("sobremesa-pronto").innerHTML = `R$${sobremesa.toFixed(2)}`;

    const limpar = () => {
        document.getElementById("select-div").style.display = "none";
        document.getElementById("exampleFormControlInput1").value = "";
        document.getElementById("resultado").value = "";
        document.getElementById("selectPrato").value = "Selecione um prato";
        document.getElementById("selectBebida").value = "Selecione uma bebida";
        document.getElementById("selectSobremesa").value = "Selecione uma sobremesa";
        document.getElementById("prato-pronto").textContent = "";
        document.getElementById("bebida-pronto").textContent = "";
        document.getElementById("sobremesa-pronto").textContent = "";
    }
}
