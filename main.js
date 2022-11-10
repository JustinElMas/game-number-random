//modal

const closeModal = document.querySelectorAll('.close')[0];
const modal = document.querySelectorAll('.modal')[0];
const modalEnd = document.querySelectorAll('.modal-container')[0];

window.addEventListener('load', activeModaly);

function activeModaly (evenly) {
    evenly.preventDefault();
    console.log('Funciona');
    modalEnd.style.opacity = '1';
    modalEnd.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
};

closeModal.addEventListener('click', function(){
    modal.classList.toggle('modal-close');

    setTimeout(function(){
        modalEnd.style.opacity = '0';
        modalEnd.style.visibility = 'hidden';
    }, 900);   //dale tiempo a la funcion, se dan dos parametros 1 funcion o codigo que ejecute en cierto tiempo (1000 === 1segundo ;) 
});

//una función que te muestra que estás seleccionando en el objeto que le especifiques o nodo. 

window.addEventListener('click', function(e){
    console.log(e.target);
    if (e.target == modalEnd) {
        modal.classList.toggle('modal-close');
        setTimeout(function(){
            modalEnd.style.opacity = '0';
            modalEnd.style.visibility = 'hidden';
        }, 700);
    }
});