const enfilarBotao= document.querySelector("#botao-enfilar");
const desenfilarBotao= document.querySelector("#botao-desenfilar");
const esvaziarBotao= document.querySelector("#botao-esvaziar");
const elementoFilaInput= document.querySelector("#elemento-fila");
const elementosFilaDiv= document.querySelector("#elementos-fila");

let elementos;
const MAX_ELEMENTOS= 10;

iniciar();

function iniciar(){
    elementos= [];
    limparInput();
    inativarBotao(desenfilarBotao);
    inativarBotao(esvaziarBotao);
}

enfilarBotao.addEventListener('click', () => {

    if(elementoFilaInput.value === ""){
        elementoFilaInput.classList.add("obrigatorio");

        setTimeout(() => {
            elementoFilaInput.classList.remove("obrigatorio");
        }, 2000);

    }else{    
        if(elementos.length !== MAX_ELEMENTOS){

            elementos.push(elementoFilaInput.value);

            const novo= document.createElement("div");
            novo.classList.add("enfilado");
            novo.innerHTML= elementoFilaInput.value;
            elementosFilaDiv.append(novo);

            limparInput();

            ativarBotao(desenfilarBotao);
            ativarBotao(esvaziarBotao);
            
            if(elementos.length === MAX_ELEMENTOS){
                elementosFilaDiv.classList.add("elementos-cheio");
                inativarBotao(enfilarBotao);
                elementoFilaInput.classList.add("sem-entradas");
                elementoFilaInput.disabled= true;
            }
        }    
    }
});

desenfilarBotao.addEventListener('click', () => {
    
    elementosFilaDiv.removeChild(elementosFilaDiv.firstElementChild);
    elementoFilaInput.value= elementos.shift();

    elementoFilaInput.classList.add("saiu");
    elementoFilaInput.disabled= true; 
    inativarBotao(enfilarBotao);
    inativarBotao(desenfilarBotao);
    inativarBotao(esvaziarBotao);
    
    setTimeout( () => {
        elementoFilaInput.classList.remove("saiu");
        limparInput();
        elementoFilaInput.disabled= false;
        ativarBotao(enfilarBotao);
        ativarBotao(desenfilarBotao);
        ativarBotao(esvaziarBotao);

        permitirInsercao();    
        if(elementos.length === 0)
            iniciar();
    }, 2000);    

    
});
            
esvaziarBotao.addEventListener('click', () => {
    elementosFilaDiv.innerHTML= "";
    iniciar();
    permitirInsercao();
});

function limparInput(){
    elementoFilaInput.value= "";
}

function inativarBotao(botao){

    const nome= botao.innerHTML;
    botao.classList.add("inativo");
    botao.classList.add(`inativo-${nome}`);
}

function ativarBotao(botao){
    const nome= botao.innerHTML;
    botao.classList.remove("inativo");
    botao.classList.remove(`inativo-${nome}`);
}

function permitirInsercao(){
    if(elementosFilaDiv.classList.contains("elementos-cheio")){
        elementosFilaDiv.classList.remove("elementos-cheio");
        ativarBotao(enfilarBotao);
        elementoFilaInput.classList.remove("sem-entradas");
        elementoFilaInput.disabled= false;   
    }    
}