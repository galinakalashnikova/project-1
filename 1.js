const input = document.getElementById("scope")
const clear = document.getElementById("clear")
//на кнопку clear добавляется событие "нажатие мыши"
clear.addEventListener(
    "click",
    //когда нажмем, то выполнится функция
    function (event) { 
        //содержимое текстового поля выводится в консоль       
        console.log(input.value)
    }  
)