
//Variaveis iniciais//
    var textoareainput;
    var textoareaoutput;
    const contador = document.querySelector("#textoarea1");
    const copia = document.querySelector("#texto__de__saida");
   



//Inicializaçao da Visibilidade do textarea com e sem imagem//
    document.getElementById("area__botao__saida").style.display = "none";
    document.getElementById("texto__saida__com__imagem").style.display = "flex";




 //Evento para quando a caixa de texto de entrada estiver vazia, a imagem inicial na caixa de saida aparecer
    contador.addEventListener("input", () => {
       
        // let count = 0;
        // count = contador.value.length;
      
 
        if(contador.value.length < 1){
 
         document.getElementById("texto__saida__com__imagem").style.display = "flex";
         document.getElementById("area__botao__saida").style.display = "none";
 
         }
 
 
     })
//Funçao de copiar o texto//
     function copiaTexto(){
        navigator.clipboard.writeText(copia.value).then(() =>{    
            //botao de alerta personalizado                  
            Swal.fire(
                'Copiado',
                'Seu Texto ja Pode ser colado',
                'info'
              )
        })
       textoareainput = document.getElementById("textoarea1");
//da foco e seleciona texto atual do textarea para receber o texto copiado
       textoareainput.focus();
       textoareainput.select();
     }

//funçao para encriptar o texto
    function encripta(){

        
        textoareainput = document.getElementById("textoarea1").value;
        var input = textoareainput;
       

        if(input === "" || input === " "){
            input =  textoareainput;
        //botao de alerta personalizado 
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Nao existe nenhum texto para ser criptografado, Digite o texto desejado e tente novamente',
          
              })
            
        textoareainput.focus();  
        }
        else{
        //Troca a Visibilidade do textarea de saida e exibe o texto modificado        
            document.getElementById("texto__saida__com__imagem").style.display = "none";
            document.getElementById("area__botao__saida").style.display = "flex";
         //atualiza os valores capturados   
            textoareainput = document.getElementById("textoarea1").value;
            textoareaoutput = document.getElementById("texto__de__saida").value;
        //muda os caracteres e exibe
            var saida = textoareainput.replace(/e/g, "enter").replace(/i/g,"imes").replace(/a/g , "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
            document.getElementById("texto__de__saida").innerHTML = saida;
   
        
        
    
    }
    }

/*     /funçao para descriptografar o texto */
    function desencripta(){

        textoareainput = document.getElementById("textoarea1").value;
        var input = textoareainput;
       
        //condiçao para nao encriptar texto nulo/vazio
        if(input === "" || input === " "){
            input =  textoareainput;
            //botao de alerta personalizado 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Nao existe nenhum texto para ser criptografado, Digite o texto desejado e tente novamente',
          
              })
              
         textoareainput.focus();    
        }
        else{
         //Troca a Visibilidade do textarea de saida e exibe o texto modificado 
            document.getElementById("texto__saida__com__imagem").style.display = "none";
            document.getElementById("area__botao__saida").style.display = "flex";
        //atualiza os valores capturados    
            textoareainput = document.getElementById("textoarea1").value;
            textoareaoutput = document.getElementById("texto__de__saida").value;
        //muda os caracteres e exibe
            var saida = textoareainput.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g , "a").replace(/ober/g, "o").replace(/ufat/g, "u");
            document.getElementById("texto__de__saida").innerHTML = saida;
        
    }

    


    }



    
