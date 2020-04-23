
 window.onload = () => {
     const body = document.querySelector('body'); // задаем размеры body
     body.style.minWidth = '800px';
     body.style.maxWidth = '1600px';

     const btn = document.querySelector('input'); // устанавливаем стили для кнопки 
     btn.style.width ='150px';
     btn.style.height = '60px';
     btn.style.borderRadius = '7%' ;
     btn.style.boxShadow = '1px 1 px 20 px lightgrey';
     btn.style.backgroundColor = 'green';
     btn.style.color = 'white';
     btn.style.margin = '100px';
 }

 const button = document.querySelector('input');

 button.onclick = () => {  // "вешаем" событие "онклик" на кнопку
     const buttonDelete = document.querySelector('input');
     buttonDelete.parentNode.removeChild(buttonDelete); // после нажатия кнопка должна удалится

     let diameter = () => {
         let pattern = /\d/; // введенный параметр должен быть цифрой
         d= prompt('Введите диаметр круга') ; // запрашиваем у пользователя диаметр круга
         z = pattern.test(d);
         if (z !== true) { // если введенный параметр не является цифрой вывести сообщение "Введите цифру"
             alert( 'Введите цифру');
             diameter ();
            }
         return d;
        }
         
    
    let circleDiameter = (diameter());

     const container = document.createElement('div'); // создаем контейнер, в котором будут находится все круги
     document.body.append(container);
     for (let i=0; i<10; i++){    // рисуем 10 кругов в 10 рядов 
           for (let j=0; j<10; j++) {
              const circle = document.createElement('div');
              circle.className = 'circle'; 
              circle.style.border = '1px solid black';
              let r = Math.floor(Math.random() * (256)),
              g = Math.floor(Math.random() * (256)),
              b = Math.floor(Math.random() *(256)),
              randomColor = '#' + r.toString(16) +g.toString(16) + b.toString(16); // задаем случайный цвет кругам
              circle.style.backgroundColor = randomColor;
              circle.style.width = circleDiameter + 'px';
              circle.style.height = circleDiameter + 'px';
              circle.style.borderRadius = '50%';
              circle.style.display = 'inline-block';
              container.append(circle);

           }
           const br = document.createElement('br'); // добавляем перенос строки
           container.append(br);

        container.onclick = function(event) { 
            event.target.style.display = 'none';// при нажатии на круг он будет исчезать
            container.style.display = 'block'; // оставшиеся круги сдвинутся влево
        }
        
     }
}        
 