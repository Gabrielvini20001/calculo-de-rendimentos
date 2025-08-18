//capturando os butões 
const butt=document.getElementById("botao");
const but=document.getElementById("bot"); 
const ju=document.getElementById("juros")
const ju1=document.getElementById("juros1")

        //criando dinamicamente o select de juros
          const select=document.createElement("select");  
          select.id="meuselect";
        
          const opcoes =["11,72%-CDI/CDB", "6%", "escolher"]
          opcoes.forEach((texto, index) => {
                 const option = document.createElement("option");
                 option.value = index;
                 option.textContent = texto;
                 select.appendChild(option);
          });

        //clonando o select
          const se= select.cloneNode(true); 

        //criando dinamicamente um novo input de juros da opção 'escolher'
          const input=document.createElement("input");
          input.type="number";
          input.placeholder="digite a %";
          input.id="inputmanual";
          input.style.display="none";
                   
        //clonando o input
          const j1=input.cloneNode(true);
        
        //adicionando os inputs aos botões de juros    
          ju.appendChild(input);
          ju1.appendChild(j1);
          
        //Ação de aparecer o input ao clicar na opção 'escolha'  
          select.addEventListener("change", ()=>
          { if (select.value === "2"){
            input.style.display = "inline-block";
          }else {
            input.style.display = "none";
             j1.style.display = "none";
          }}
          ) 
        
        //Adicionando o select nos botões de juros
          ju.appendChild(select);
          const j=ju1.appendChild(se);

         
//adicionando o evento de calculo ao juros simples ao clicar no botão final   
butt.addEventListener("click", function(){
    //capturando os valores
    const capital = parseFloat(document.getElementById('capital').value);
    const tempo = parseInt(document.getElementById('tempo').value);
   
    //calculando as divisões dos juros
    let valorse = select.value;
          let result;
          if (valorse == 0) {
            result = 11.72 / 100;
          } else if (valorse == 2) {
            const i=(parseFloat(input.value));
            result = i / 100;
          } else {
            result = 6 / 100;
          }

    //alertas de campos sem preenchimento 
    if(isNaN(capital)){
        alert('por gentileza preencher o campo 1');
      };
     if (isNaN(tempo)){
        alert('por gentileza preencher o campo 3');
      };      

    //calculo geral 
    const montante = capital * ( 1 + result * tempo);

    //exibindo o valor total 
    document.getElementById('resultado').textContent =`Seu patrimonio em ${tempo} ano(s), será ${montante.toFixed(2)}`});
  
//adicionando o evento de calculo ao juros compostos ao clicar no botão final   
but.addEventListener("click", function(){
      
        //capturando os valores
        const capitall = parseFloat(document.getElementById('capital1').value);
        const tempoo = parseInt(document.getElementById('tempo1').value);

          //calculando as divisões dos juros
          let valorse2 = j.value;
          let result1;
          if (valorse2 == 0) {
            result1 = 11.72 / 100;
          } else if (valorse2 == 2) {
            const jh=(parseFloat(j1.value));
          
            result1 = jh / 100;
          } else {
            result1 = 6 / 100;
          }
    
          //alertas de campos sem preenchimento 
        if(isNaN(capitall)){
        alert('por gentileza preencher o campo 1');
        };
        if (isNaN(tempoo)){
        alert('por gentileza preencher o campo 3');
        };      
        
        //calculo geral
        const montant = capitall * (  1 + result1 ) ** tempoo;

        //exibindo o valor total
        document.getElementById('resultad').textContent = `Seu patrimonio em ${tempoo} ano(s), será ${montant.toFixed(2)}`});