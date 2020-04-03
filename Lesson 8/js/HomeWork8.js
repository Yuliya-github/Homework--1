

        const createNewChild = () => {
           const my_div = document.getElementById('my_div');

           for ( newDiv=0; newDiv<10; newDiv++ ) { // пока получилось только добавлять сразу по 10 дивов одним кликом вместо того,чтобы добавлять максимум 10
           const newDiv = document.createElement('div'); 
           newDiv.innerHTML = "<h1>Привет!</h1>";
           my_div.appendChild(newDiv);
        }
        
        } 
             
        const removeLastChild = () => {
            const my_div = document.getElementById('my_div');
            const newDiv = my_div.lastChild;
            if (newDiv != null) {
                    my_div.removeChild(newDiv);
            }

        }      

        


/* Способы, которыми  я пробовала сделать ограничение в добавлении дивов

let newDiv = 0;
while (newDiv<10) {
    newDiv = document.createElement('div');
    newDiv.innerHTML = "<h1>Привет!</h1>";
    my_div.appendChild(newDiv);
    newDiv ++;
    }
    
    
    var newDiv = 0;
    
    do {  newDiv = document.createElement('div');
    newDiv.innerHTML = "<h1>Привет!</h1>";
    my_div.appendChild(newDiv);
    newDiv ++;
    } while (newDiv<3);
    
    
    let newDiv = 0;
    if (newDiv <= 3) {
    newDiv = document.createElement('div');
    newDiv.innerHTML = "<h1>Привет!</h1>";
    my_div.appendChild(newDiv);
    newDiv++;
    }
    
      newDiv = 0;
     do {  
     newDiv ++;
     }       
     while (newDiv<10);
                    
*/