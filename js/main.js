let btn=document.getElementById('btn');
let par1=document.createElement('p');
let par2=document.createElement('p');

document.body.prepend(par1);
document.body.prepend(par2);




function podajLiczby(){
    let komunikat=window.prompt('Podaj liczbę 1:');
    let komunikat2=window.prompt('Podaj liczbę 2:');
    par1.innerText=`Liczba 1 to ${komunikat}`;
    par2.innerText=`Liczba 2 to ${komunikat2}`
}

btn.addEventListener('click', podajLiczby);