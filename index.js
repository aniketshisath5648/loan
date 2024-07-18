
const pending = document.getElementById('pens');
pending.addEventListener('click',()=>{
    let activeted = document.getElementsByClassName('activeted')[0];
    if (activeted) {
        activeted.classList.remove('pending-activeted', 'submit-activeted', 'evaluate-activeted', 'activeted');
    }
    pending.classList.add('activeted', 'pending-activeted');
})

const submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    let activeted = document.getElementsByClassName('activeted')[0];
    if (activeted) {
        activeted.classList.remove('pending-activeted', 'submit-activeted', 'evaluate-activeted', 'activeted');
    }
    submit.classList.add('activeted', 'submit-activeted');
})

const evaluate = document.getElementById('evaluate');
evaluate.addEventListener('click',()=>{
    let activeted = document.getElementsByClassName('activeted')[0];
    if (activeted) {
        activeted.classList.remove('pending-activeted', 'submit-activeted', 'evaluate-activeted', 'activeted');
    }
    evaluate.classList.add('activeted', 'evaluate-activeted');
})






const pending1 = document.getElementById('pens1');
pending1.addEventListener('click',()=>{
    let activeted1 = document.getElementsByClassName('activeted1')[0];
    if (activeted1) {
        activeted1.classList.remove('pending-act', 'submit-act', 'evaluate-act', 'activeted1');
    }
    pending1.classList.add('activeted1', 'pending-act');
})

const submit1 = document.getElementById('submit1');
submit1.addEventListener('click',()=>{
    let activeted1 = document.getElementsByClassName('activeted1')[0];
    if (activeted1) {
        activeted1.classList.remove('pending-act', 'submit-act', 'evaluate-act', 'activeted1');
    }
    submit1.classList.add('activeted1', 'submit-act');
})

const evaluate1 = document.getElementById('evaluate1');
evaluate1.addEventListener('click',()=>{
    let activeted1 = document.getElementsByClassName('activeted1')[0];
    if (activeted1) {
        activeted1.classList.remove('pending-act', 'submit-act', 'evaluate-act', 'activeted1');
    }
    evaluate1.classList.add('activeted1', 'evaluate-act');
})
