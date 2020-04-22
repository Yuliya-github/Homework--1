    window.onload = () => {
    const button = document.querySelector('#new-div'),
    divContainer = document.createElement('div');
    button.after(divContainer);
    let counter = 0;

    button.onclick = () => {
        if (counter<10) {
            counter+=1;
        const newDiv = document.createElement('div'); 
        newDiv.innerHTML = "<h1>Привет!</h1>";
        divContainer.appendChild(newDiv);
        return counter;
       
     } else {
         divContainer.remove();
        }
         
    }
}


        
