let btn = $('button');
let btn_img = $('button img');

let hidden = false;
let value = $('span').text();

btn.on('click', ()=>{
    if(btn_img.attr('src') === 'https://img.icons8.com/ios-glyphs/20/hide.png'){
        btn_img.attr('src', "https://img.icons8.com/ios/20/show-password.png");
        btn_img.attr('alt', "show-password");
    }else{
        btn_img.attr('src', 'https://img.icons8.com/ios-glyphs/20/hide.png');
        btn_img.attr('alt', "hide");
    }

    if(hidden){
        $('span').text(value);
        hidden = false;
    }else{
        let dots = '';
        for(let i=1; i<= value.length; i++){
            dots += "*";
        }

        $('span').text(dots);
        hidden = true;
    }
});