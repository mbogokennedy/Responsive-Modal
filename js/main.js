//get the modal element
const modal = document.getElementById('simpleModal');
//Get open modal button
const modalBtn = document.getElementById('modalBtn');
//get close button
const closeButton = document.getElementById('closeBtn');

//listen for a click
modalBtn.addEventListener('click',openModal);

//listen for a click
closeBtn.addEventListener('click',closeModal);
//listen for a outside click
window.addEventListener('click',clickOutside);
//fuction to open modal

function openModal(){
    modal.style.display = 'block';
}

//fuction to close modal

function closeModal(){
    modal.style.display = 'none';
}
//fuction to close modal if clicked outside

function clickOutside(e){
    if(e.target == modal){
    modal.style.display = 'none';
}
}