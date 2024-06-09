const palabra = 'KOTXUKIVBIKOEOVXEIÑBKI';
let total  = 0;
const cuerpo = document.getElementById('form');
const pista = document.getElementById('pista');

if(!localStorage.getItem('pista')){
    for (let i in palabra){
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.addEventListener('keyup', function(){
                valor = input.value.toUpperCase();
                if(valor === palabra[i]){
                    input.disabled = 'true';
                    total++;
                }
        })
        cuerpo.appendChild(input);
    }
} else {
    form.style.display = 'none';
    pista.style.display = 'block';
}

if(total === 0){
    localStorage.setItem('pista', true);
}

function copiar(){
        navigator.clipboard.writeText(texto);
}