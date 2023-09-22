
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const openModalBtn = document.querySelectorAll(".show-modal");

let openModal = function(){              //Function Expression
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

let closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

//click event
for(let i = 0; i < openModalBtn.length; i++){
    openModalBtn[i].addEventListener("click",openModal);
}

btnCloseModal.addEventListener("click",closeModal);

overlay.addEventListener("click",closeModal);

//key press event
document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        if(!modal.classList.contains("hidden")){
            closeModal();
        }
    }
})
