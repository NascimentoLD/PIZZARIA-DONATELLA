// CODIGO DE ANIMAÇÃO SECTION DOMINGO PERFEITO

$('section.domingo-perfeito').waypoint(function(direcao){
    if(direcao == "down"){
        $('div.folha1').removeClass('animate__animated animate__fadeOutDown');
        $('div.camarao').removeClass('animate__animated animate__fadeOutDown');
        $('div.folha2').removeClass('animate__animated animate__fadeOutDown');
        $('div.folha3').removeClass('animate__animated animate__fadeOutDown');
        $('div.tomate').removeClass('animate__animated animate__fadeOutDown');
        $('div.queijo').removeClass('animate__animated animate__fadeOutDown');

        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp');
        $('div.folha2').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.tomate').addClass('animate__animated animate__fadeInUp');
        $('div.queijo').addClass('animate__animated animate__fadeInUp');
    }else if(direcao == "up"){
        $('div.folha1').removeClass('animate__animated animate__fadeInUp');
        $('div.camarao').removeClass('animate__animated animate__fadeInUp');
        $('div.folha2').removeClass('animate__animated animate__fadeInUp');
        $('div.folha3').removeClass('animate__animated animate__fadeInUp');
        $('div.tomate').removeClass('animate__animated animate__fadeInUp');
        $('div.queijo').removeClass('animate__animated animate__fadeInUp');

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

// CODIGO DE ANIMAÇÃO SECTION PIZZA

$('section#pizza').waypoint(function(direcao){
    if(direcao == 'down'){
        $('section#pizza p').removeClass('animate__animated animate__fadeOutDown');
        $('section#pizza div.pizza-opcoes').removeClass('animate__animated animate__fadeOutDown animate__slow');

        $('section#pizza p').addClass('animate__animated animate__fadeInUp');
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow');
    }else if(direcao == 'up'){
        $('section#pizza p').removeClass('animate__animated animate__fadeInUp');
        $('section#pizza div.pizza-opcoes').removeClass('animate__animated animate__fadeInUp animate__slow');

        $('section#pizza p').addClass('animate__animated animate__fadeOutDown');
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeOutDown animate__slow');
    }

},{
    offset: '450px;'
})

// CODIGO PARA TRABALHAR COM O CSS, ATRÁVES DO JS

$('div#testemunhos ul:eq(0)').css('opacity', 0);
$('div#testemunhos ul:eq(1)').css('opacity', 0);
$('div#testemunhos ul:eq(2)').css('opacity', 0);

$('section#testemunhas').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
    }else if(direcao == 'up'){
        $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate_slower');
        $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
}, {
    offset:'400px;'
})

$('div#transicao-testemunha-plano').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div#decoracao1').removeClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#decoracao2').removeClass('animate__animated animate__fadeOut animate__slow');
        $('div#decoracao3').removeClass('animate__animated animate__fadeOutRight animate__slow');

        $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate__slow');
        $('div#decoracao2').addClass('animate__animated animate__fadeIn animate__slow');
        $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate__slow');
    }else if(direcao == 'up'){
        $('div#decoracao1').addClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#decoracao2').addClass('animate__animated animate__fadeOut animate__slow');
        $('div#decoracao3').addClass('animate__animated animate__fadeOutRight animate__slow');
    }
}, {
    offset:'450px;'
})

// ----- SECTION PLANOS

$('section#plano-principal').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slower');
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate__slower');
    }else{
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate__slower');
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate__slower');
    }
}, {
    offset: '450px'
})

$('footer').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div#mapa').addClass('animate__animated animate__fadeIn');        
        $('div#info').addClass('animate__animated animate__fadeIn');        
        $('div#pizza-rodape-decoracao').addClass('animate__animated animate__fadeIn');        
    }else{        
        $('div#mapa').removeClass('animate__animated animate__fadeIn');        
        $('div#info').removeClass('animate__animated animate__fadeIn');        
        $('div#pizza-rodape-decoracao').removeClass('animate__animated animate__fadeIn');        
    }
},{
    offset: '650px;'
})