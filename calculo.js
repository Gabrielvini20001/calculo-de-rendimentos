const butt=document.getElementById("botao");
const but=document.getElementById("bot"); 
const ju=document.getElementById("juros")
const ju1=document.getElementById("juros1")


          const select=document.createElement("select");  
          select.id="meuselect";
          const opcoes =["11,72%-CDI/CDB", "6%", "escolher"]
          
          opcoes.forEach((texto, index) => {
                 const option = document.createElement("option");
                 option.value = index;
                 option.textContent = texto;
                 select.appendChild(option);
          });
          const se= select.cloneNode(true); 

          const input=document.createElement("input");
          input.type="number";
          input.placeholder="digite a %";
          input.id="inputmanual";
          input.style.display="none";
         
          const j1=input.cloneNode(true);
         
          ju.appendChild(input);
          ju1.appendChild(j1);
          
          select.addEventListener("change", ()=>
          { if (select.value === "2"){
            input.style.display = "inline-block";
          }else {
            input.style.display = "none";
             j1.style.display = "none";
          }}
          ) 
          se.addEventListener("change", ()=>
          { if (se.value === "2"){
            j1.style.display ="inline-block";
          } else {
              j1.style.display = "none";
          }}
          ) 

          ju.appendChild(select);
          const j=ju1.appendChild(se);

         
  
butt.addEventListener("click", function(){
    const capital = parseFloat(document.getElementById('capital').value);
    
    const tempo = parseInt(document.getElementById('tempo').value);
   
    let valorse = select.value;
          let result;
          if (valorse == 0) {
            result = 11.72 / 100;
          } else if (valorse == 1) {
            const i=(parseFloat(input.value));
            result = i / 100;
          } else {
            result = 8 / 100;
          }
  
    if(isNaN(capital)){
        alert('por gentileza preencher o campo 1');
      };
     if (isNaN(tempo)){
        alert('por gentileza preencher o campo 3');
      };      
     
    const montante = capital * result * tempo;

    document.getElementById('resultado').textContent =`Seu patrimonio em ${tempo} anos, será ${montante}`});
  

but.addEventListener("click", function(){
      
        
      
        const capitall = parseFloat(document.getElementById('capital1').value);
        
        const tempoo = parseInt(document.getElementById('tempo1').value);
    
          let valorse2 = j.value;
          let result1;
          if (valorse2 == 0) {
            result1 = 11.72 / 100;
          } else if (valorse2 == 1) {
            const jh=(parseFloat(j1.value));
          
            result1 = jh / 100;
          } else {
            result1 = 8 / 100;
          }
    
          if(isNaN(capitall)){
        alert('por gentileza preencher o campo 1');
      };
     if (isNaN(tempoo)){
        alert('por gentileza preencher o campo 3');
      };      
        
        const montant = capitall * (result1 + 1) ** tempoo;
    
        document.getElementById('resultad').textContent = `Seu patrimonio em ${tempoo} anos, será ${montant.toFixed(2)}`});