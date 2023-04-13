const spnCursor = document.querySelector('.cursor');
const spnText = document.querySelector('.text');
const txt = ['WELCOME','IN MEIN WORLD','WORLD OF THE PROGRAMS...']

let acText = 0;
let acLetter = -15;

const addText = ()=>{
    if (acLetter >= 0){
        spnText.textContent += txt[acText][acLetter];
    }
    acLetter++;
    if(acLetter === txt[acText].length){
        acText++;
        if (acText === txt.length) return;

        return setTimeout(()=>{
            acLetter = -15;
            spnText.textContent = '';
            addText();
        },2000)

    }
    setTimeout(addText,200);
}
addText();

setInterval(()=>{spnCursor.classList.toggle('active')},500);