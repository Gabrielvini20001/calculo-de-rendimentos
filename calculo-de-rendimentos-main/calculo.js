// ==========================================
// 1. SELEÇÃO DE ELEMENTOS DO DOM (HTML)
// ==========================================
const butt = document.getElementById("botao");
const but = document.getElementById("bot");
const ju = document.getElementById("juros");
const ju1 = document.getElementById("juros1");

// ==========================================
// 2. CRIAÇÃO DINÂMICA DO SELECT DE OPÇÕES
// ==========================================
const select = document.createElement("select");
select.id = "meuselect";
const opcoes = ["11,72%-CDI/CDB", "escolha", "8%"];

// Preenche o select com as opções do array
opcoes.forEach((texto, index) => {
    const option = document.createElement("option");
    option.value = index; // Define o valor como 0, 1 ou 2
    option.textContent = texto;
    select.appendChild(option);
});

// ==========================================
// 3. CRIAÇÃO E CLONAGEM DOS INPUTS MANUAIS
// ==========================================
const input = document.createElement("input");
input.type = "number";
input.placeholder = "digite a %";
input.id = "inputmanual";
input.style.display = "none"; // Começa escondido

// Clona o input para o segundo bloco de juros
const input2 = input.cloneNode(true);
input2.id = "inputmanual2"; // Garante um ID único para o clone

// Clona o select para o segundo bloco de juros
const select2 = select.cloneNode(true);

// Adiciona os elementos criados nas respectivas divs do HTML
ju.appendChild(input);
ju1.appendChild(input2);
ju.appendChild(select);
ju1.appendChild(select2);

// ==========================================
// 4. EVENTOS PARA MOSTRAR/ESCONDER O INPUT
// ==========================================

// Monitora o primeiro select (se escolher a opção "1", mostra o input)
select.addEventListener("change", () => {
    if (select.value === "1") {
        input.style.display = "inline-block";
    } else {
        input.style.display = "none";
    }
});

// Monitora o segundo select
select2.addEventListener("change", () => {
    if (select2.value === "1") {
        input2.style.display = "inline-block";
    } else {
        input2.style.display = "none";
    }
});

// ==========================================
// 5. LÓGICA DO PRIMEIRO BOTÃO (JUROS SIMPLES)
// ==========================================
butt.addEventListener("click", function() {
    // Captura os valores digitados pelo usuário
    const capital = parseFloat(document.getElementById('capital').value);
    const tempo = parseInt(document.getElementById('tempo').value);
    let valorse = select.value;
    let result;

    // Define a taxa de juros com base na opção selecionada
    if (valorse == 0) {
        result = 11.72 / 100;
    } else if (valorse == 1) {
        // Se escolheu preencher manualmente, pega o valor do input digitado
        result = parseFloat(input.value) / 100;
    } else {
        result = 8 / 100;
    }

    // Validações de campos vazios
    if (isNaN(capital)) {
        alert('por gentileza preencher o campo 1');
        return; // Para a execução se houver erro
    }
    if (isNaN(tempo)) {
        alert('por gentileza preencher o campo 3');
        return; // Para a execução se houver erro
    }

    // Cálculo de Juros Simples (Nota: Juros Simples = C * i * t)
    // Para renderizar o montante total seria: capital + (capital * result * tempo)
    const montante = capital * result * tempo;

    // Exibe o resultado na tela
    document.getElementById('resultado').textContent = `Seu patrimonio em ${tempo} anos, será ${montante.toFixed(2)}`;
});

// ==========================================
// 6. LÓGICA DO SEGUNDO BOTÃO (JUROS COMPOSTOS)
// ==========================================
but.addEventListener("click", function() {
    // Captura os valores do segundo bloco
    const capitall = parseFloat(document.getElementById('capital1').value);
    const tempoo = parseInt(document.getElementById('tempo1').value);
    let valorse2 = select2.value;
    let result1;

    // Define a taxa de juros do segundo bloco
    if (valorse2 == 0) {
        result1 = 11.72 / 100;
    } else if (valorse2 == 1) {
        // Pega o valor do segundo input manual
        result1 = parseFloat(input2.value) / 100;
    } else {
        result1 = 8 / 100;
    }

    // Validações de campos vazios
    if (isNaN(capitall)) {
        alert('por gentileza preencher o campo 1');
        return;
    }
    if (isNaN(tempoo)) {
        alert('por gentileza preencher o campo 3');
        return;
    }

    // Cálculo de Juros Compostos: M = C * (1 + i)^t
    const montant = capitall * (result1 + 1) ** tempoo;

    // Exibe o resultado formatado com duas casas decimais
    document.getElementById('resultad').textContent = `Seu patrimonio em ${tempoo} anos, será ${montant.toFixed(2)}`;
});