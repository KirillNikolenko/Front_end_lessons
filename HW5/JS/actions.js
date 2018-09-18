var redirect_btn = document.querySelector('input[value="Button_1"]');
var change_style_btn = document.querySelector('input[value="Button_2"]');
var clear_btn = document.querySelector('input[value="Button_3"]');

// перекидываем пользователя на другую страницу при нажатии первой кнопки
redirect_btn.onclick = function(){
    document.location.href = 'http://www.softtime.ru/javascript/redirect.php';
}

// меняем стиль страницы при клике на вторую кнопку
change_style_btn.onclick = function(){

    // меняем цвет контейнера
    var container = document.getElementById('fcontainer');
    container.style.cssText="background-color: lightblue;";
    
    // меняем цвет и форму дивов с кнопками
    var btn_blocks = document.getElementsByClassName('button');
    for(var i = 0; i < btn_blocks.length; i++){
    btn_blocks[i].style.cssText="background-color: bisque; \
        border-radius: 20px";
    }
    
    // меняем сами кнопки
    var buttons = document.getElementsByTagName('input');
    for(var i = 0; i < buttons.length; i++){
    buttons[i].style.cssText="background-color: gray; \
        color: white";
    }
}

// удаление содержимого страницы и отрисовка нового
clear_btn.onclick = function(){
    var container = document.getElementsByTagName('body');
    container[0].innerHTML = '';

    container[0].innerHTML += '<div class="container"> \
                                <div id="box1"> \
                                    <div id="box2"> \
                                    </div> \
                                </div> \
                            </div>';
}