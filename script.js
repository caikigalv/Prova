const correct = document.getElementById("correct");
const wrong1 = document.getElementById("wrong1");
const wrong2 = document.getElementById("wrong2");
const wrong3 = document.getElementById("wrong3");
const wrong4  = document.getElementById("wrong4");




correct.addEventListener('click', ()=>{
    const check = document.querySelector('.check')
    check.style.display = 'flex';
    correct.disabled = true;
    wrong1.disabled = true;
    wrong2.disabled = true;
    wrong3.disabled = true;
    wrong4.disabled = true;
    let intervalo = setInterval(()=>{
        alert('RESPOSTA CORRETA')
    },2000)
    setTimeout(function(){
        clearInterval(intervalo);
    },3000)
    
});

wrong1.addEventListener('click', ()=>{
    const wrong1 = document.querySelector('.wrong1')
    wrong1.style.display = 'flex';
    wrong1.disabled = true;
    correct.disabled = true;
    wrong2.disabled = true;
    wrong3.disabled = true;
    wrong4.disabled = true;
    let intervalo1 = setInterval(()=>{
        alert('RESPOSTA INCORRETA')
    },2000)
    setTimeout(function(){
        clearInterval(intervalo1);
    }, 3000)
    setTimeout(function(){
        location.reload();
    },9000)
});


wrong2.addEventListener('click', ()=>{
    const wrong2 = document.querySelector('.wrong2')
    wrong2.style.display = 'flex';
    wrong2.disabled = true;
    correct.disabled = true;
    wrong1.disabled = true;
    wrong3.disabled = true;
    wrong4.disabled = true;
    let intervalo2 = setInterval(()=>{
        alert('RESPOSTA INCORRETA')
    },2000)
    setTimeout(function(){
        clearInterval(intervalo2);
    },3000)
    setTimeout(function(){
        location.reload();
    },9000)
});


wrong3.addEventListener('click', ()=>{
    const wrong3 = document.querySelector('.wrong3')
    wrong3.style.display = 'flex';
    wrong3.disabled = true;
    correct.disabled = true;
    wrong1.disabled = true;
    wrong2.disabled = true;
    wrong4.disabled = true;
   let intervalo3 = setInterval(()=>{
        alert('RESPOSTA INCORRETA')
    },2000)
    setTimeout(function(){
        clearInterval(intervalo3);
    },3000)
    setTimeout(function(){
        location.reload()
    },9000)
});



wrong4.addEventListener('click', ()=>{
    const wrong4 = document.querySelector('.wrong4')
    wrong4.style.display = 'flex';
    wrong4.disabled = true;
    correct.disabled = true;
    wrong1.disabled = true;
    wrong2.disabled = true;
    wrong3.disabled = true;
    let intervalo4 = setInterval(()=>{
        alert('RESPOSTA INCORRETA')
    },2000)
    setTimeout(function(){
        clearInterval(intervalo4)
    },3000)
    setTimeout(function(){
        location.reload()
    },9000)
});

