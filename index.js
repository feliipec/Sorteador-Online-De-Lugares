const LugaresParaSair = ["Quintalzinho", "BluFood", "3 Vassouras"]



function RetornaConteudo(LugarParaSair) {
    var conteudo = document.getElementById("conteudo")
    conteudo.innerHTML = LugarParaSair
}
function SortearConteudo() {
    var QuantidadesLugares = LugaresParaSair.length
    var NumeroAleatorio = Math.floor(Math.random() * QuantidadesLugares)
    console.log(LugaresParaSair[NumeroAleatorio])
    RetornaConteudo(LugaresParaSair[NumeroAleatorio])
    RemoverLugarParaSair(NumeroAleatorio)
    console.log(LugaresParaSair)   
}
function RemoverLugarParaSair(posicaoLugarParaSair) {
    LugaresParaSair.splice(posicaoLugarParaSair, 1)
}
function AdicionarLugarParaSair() {
    var input = document.getElementById("EntradaDeNovosLugaresParaSair")
    var ValorDoInput = input.value
    if(ValorDoInput != "") {
        LugaresParaSair.push(ValorDoInput)
        input.value=""
        AdicionarMensagem("LUGAR ADICIONADO!")

    }
    else{
        AdicionarMensagem("O Campo Novo Lugar está vazio!")
    }
}
function AdicionarMensagem(TextoDaMensagem) {
    var mensagem = document.getElementById("MensagemDoSistema")
    mensagem.innerHTML = TextoDaMensagem
    
}
function escreverArquivo() {  

    var fso  = new ActiveXObject("Scripting.FileSystemObject");
    
    var fh = fso.CreateTextFile("C:\Teste.txt", true); 
    
    fh.WriteLine("Coloque todo o conteudo que voce deseja nesse trecho...");
    
    fh.Close(); 
    
}