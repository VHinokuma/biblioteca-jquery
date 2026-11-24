alert("Carregou o JS");

$(document).ready(function() {
    alert("Carregou o JQuery");
    
    $("#demo").html("Inserido com JQuery");
    // A linha abaixo foi comentada para não apagar o texto inserido acima:
    // document.getElementById("demo").innerHTML = "Inserindo com HTML";

    /* Com o método text(), não é possível inserir tags de formatação */
    $("#demo2").html("<b>Inserido com jquery - metodo html</b>");

    /* Exibe o conteúdo do campo de id nome */
    alert($("#nome").val());
    alert("Alterando o nome");
    $("#nome").val("Novo nome...");

    $("#area").on("mousemove", function(event) {
        $("#coordenadas").text("X: " + event.pageX + " | Y: " + event.pageY);
    });

    $("#area").on("click", function(event){
        alert("Clicou na div area");
    });

    $("#clique").on("dblclick", function(event){
        alert("Clicou no button 2x");
    });

});