// CODIGO DE ANIMAÇÃO

$('section.domingo-perfeito').waypoint(function(direcao){
    if(direcao == "down"){
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp');
        $('div.folha2').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.tomate').addClass('animate__animated animate__fadeInUp');
        $('div.queijo').addClass('animate__animated animate__fadeInUp');
    }else if(direcao == "up"){
        $('div.folha1').addClass('animate__animated animate__fadeOutDown');
        $('div.camarao').addClass('animate__animated animate__fadeOutDown');
        $('div.folha2').addClass('animate__animated animate__fadeOutDown');
        $('div.folha3').addClass('animate__animated animate__fadeOutDown');
        $('div.tomate').addClass('animate__animated animate__fadeOutDown');
        $('div.queijo').addClass('animate__animated animate__fadeOutDown');
    }
}, {
    offset: '450px;'
})