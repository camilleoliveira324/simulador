function simulação() {
    // Declaração de variáveis
    var fv, pmt, i, n, nome;

    // Entrada de dados
    //nota1 = document.getElementById("nota1").value;
    pmt = document.getElementById("valordoinvestimento").value; //Aporte mensal
    n = document.getElementById("meses").value;  //meses
    i= 0.08; //taxa de juros
    nome = document.getElementById("nomedapessoa").value;
    
    // Processamento de Dados
    fv = (pmt * (1+ i) * ((Math.pow(1+i,n)-1)/i)).toFixed(2);
    juros.toString  ();

    // Saída de Dados
    // document.getElementsByClassName("form-notas").classList.add("d-none");
    // document.getElementsByClassName("show-result").classList.remove("d-none");
    

    $(".form-dados").addClass("d-none");
    $(".show-result").removeClass("d-none");
    $(".result-value").html(parseInt(fv));
    //document.write ("Olá, " + nome);
    //document.write (" juntando R$" +pmt);
   // document.write (" todos os meses, você terá " +fv)
   // document.write (" em " +n)
    
    $("pessoa").html("Olá," +nome);
    $("textinho").html("juntando R$" +pmt); 
    //$(" textão").html(" todo mês, você terá R$" +fv
    //$(" textoo").html( " em " +n)
    console.log("Média é igual a "+media);
    //alert("Média é igual a "+media);
}

function simular_novamente() {
	$("input").val("");

	$(".form-dados").removeClass("d-none");
    $(".show-result").addClass("d-none");
    $(".result-value").html("...");
}