let draggables = document.querySelectorAll(".drag");
let containers = document.querySelectorAll(".container");

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart',()=> {
        draggable.classList.add("dragging");
    });
    draggable.addEventListener('dragend',()=> {
        draggable.classList.remove('dragging');
    })
})

containers.forEach(container=>{
    container.addEventListener('dragover',() => {
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
        containers.forEach(cont => {
            if(cont.childElementCount == 1){
                cont.style.backgroundColor = "rgb(255, 252, 81)";
                cont.style.transition = "0.5s ease";
            }
            else if(cont.childElementCount == 0){
                cont.style.backgroundColor = "rgb(255, 81, 81)";
                cont.style.transition = "0.5s ease";
            }else if(cont.childElementCount == 2){
                cont.style.backgroundColor = "rgb(105, 105, 255)";
                cont.style.transition = "0.5s ease";
            }
        })
    })
})

const reset = () => {
    draggables.forEach(draggable => {
        containers[0].appendChild(draggable);
    })
    containers.forEach(cont => {
        if(cont.childElementCount == 1){
            cont.style.backgroundColor = "rgb(255, 252, 81)";
            cont.style.transition = "0.5s ease";
        }
        else if(cont.childElementCount == 0){
            cont.style.backgroundColor = "rgb(255, 81, 81)";
            cont.style.transition = "0.5s ease";
        }else if(cont.childElementCount == 2){
            cont.style.backgroundColor = "rgb(105, 105, 255)";
            cont.style.transition = "0.5s ease";
        }
    })
}