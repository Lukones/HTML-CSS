/*/ Mudar cor da letra
$('h1').css('color', 'Red');

// Adicionar Classes ao elemento
$('h1').addClass("add");

// Remover class
$('h1').removeClass('add');

//Mudar o texto do elemento;
$('h1').text("Lucas");

//jQuery seleciona todos elementos e muda a todos
$('button').text('Não clicar!');

//Podemos adicionar ao html (innerHTML)
$('button').html('<em><s>Lukones</s></em>')

// -----------------------------------------------------------------------

//Manipulando atributos

// Podemos mudar o src, href, class, id e etc...

$('img').attr('src', 'img.png');
$('a').attr("href", "https://www.yahoo.com");
// $('h1').attr('class', 'TR-02')

//Adicionando eventListener

/*$('h1').click(function () {
    $('h1').css('color', 'purple')
})*/

// jQuery Diminui tamanho e e mais facil


/* for (var i = 0; i < 5; i++) {
   document.querySelectorAll('button')[i].addEventListener('click', function() {
    document.querySelector('h1').style.color = 'purple';
   })
} */

/* $("button").click(function() {
    $("h1").css("color", "purple");
}); */


// Mudando o h1 ao vivo com as teclas q preciono
/*
$(document).keydown(function(event) {
    $('h1').text(event.key);
}); */

/*
$("h1").on("mouseover", function() {
    $("h1").css('color', 'purple')
})*/


//Adicionando elemento primeiro, antes, depois, e logo a baixo do elemento padrão q escolher

$('h1').before('<button>NEW</button>'); //primeiro
$('h1').after('<button>NEW</button>'); //depois do elemento
$('h1').prepend('<button>NEW</button>'); //antes a esquerda
$('h1').append('<button>NEW</button>'); //depois a direita

// Removendo 

$("button").remove()