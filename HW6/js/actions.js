var fix_button = document.querySelector('input[value="FIX"]');

fix_button.onclick = function(){
    var navbar = document.getElementById('navbar');
    navbar.style.cssText="left: 0px;";
}

var input_phone = document.querySelector('input[name="phone_field"]');
var input_email = document.querySelector('input[name="email_field"]');
var input_name = document.querySelector('input[name="name_field"]');

function CheckValid(){
    var sub_button = document.getElementsByClassName('submit_button');

    //Если хоть одна из форм не валидна,то...
    if((input_email.validity.valid == false)||(input_phone.validity.valid == false)||(input_name.validity.valid == false)) {
    
        //Запускаем анимацию для кнопки
        sub_button[0].style.cssText = "animation-name: disable_button;";

        //Делаем ее неактивной
        sub_button[0].disabled = true;
    }
    else {
        //Иначе все наоборот
        sub_button[0].style.cssText = "animation-name: enable_button;";

        sub_button[0].disabled = false;
    }
}