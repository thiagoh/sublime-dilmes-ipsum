var textsDilmes = [
  'Ai você fala o seguinte: "- Mas vocês acabaram isso?" Vou te falar: -"Não, está em andamento!" Tem obras que "vai" durar pra depois de 2010. Agora, por isso, nós já não desenhamos, não começamos a fazer projeto do que nós "podêmo fazê"? 11, 12, 13, 14... Por que é que não?',
  'Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade.',
  'No meu xinélo da humildade eu gostaria muito de ver o Neymar e o Ganso. Por que eu acho que.... 11 entre 10 brasileiros gostariam. Você veja, eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar.',
  'Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o dia da mãe, dos pais, das professoras, mas também é o dia dos animais, sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás. O que é algo muito importante!',
  'A única área que eu acho, que vai exigir muita atenção nossa, e aí eu já aventei a hipótese de até criar um ministério. É na área de... Na área... Eu diria assim, como uma espécie de analogia com o que acontece na área agrícola.',
  'A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!',
  'Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses.',
  'Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro, já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?'
];

var text = "<p>" + textsDilmes[Math.floor((Math.random() * 8) + 0)] + "</p>";
$('.container-text-dilmes').append(text);

//set caricature
$('.buttons-choose button').click(function(){

  $('.buttons-choose button').addClass('mdl-button--accent').removeClass('mdl-button--colored');
  $(this).addClass('mdl-button--colored').removeClass('mdl-button--accent');

  $('.caricature').removeClass('active');

  $('.' + $(this).val()).addClass('active');

  var _textRandom = function(qtde){
    console.log(qtde);
    var text = "";
    for (var i = 0; i < qtde; i++) {
      text += "<p class='animated fadeInDown' style='animation-delay: 0."+i+"s'>" + textsDilmes[Math.floor((Math.random() * 8) + 0)] + "</p>";
    }
    return text;
  };

  switch ($(this).val()) {
    case 'ph-1':
      text  = _textRandom(1);
      break;
    case 'ph-2':
      text  = _textRandom(2);
      break;
    case 'ph-3':
      text  = _textRandom(3);
      break;
    case 'ph-4':
      text  = _textRandom(4);
      break;
    case 'ph-5':
      text  = _textRandom(5);
      break;
    case 'ph-6':
      text  = _textRandom(6);
      break;
  }

  $('.container-text-dilmes').html('').append(text);

});

//show baloon
$('.content-caricature').on('mouseenter', function(){
  $('.baloon').addClass('bounceIn').removeClass('bounceOut');
});
$('.content-caricature').on('mouseleave', function(){
  $('.baloon').addClass('bounceOut').removeClass('bounceIn');
});

// copy to clipboard - clipboard.min.js
var btn = document.getElementById('btnCopy')
var clipboard = new Clipboard(btn);
clipboard.on('success', function(e) {
  console.log(e);
  e.trigger.innerHTML = "<i class='material-icons'>content_paste</i> copiado!";
});
clipboard.on('error', function(e) {
  console.log(e);
});
function cleanText(){
  btn.innerHTML = "<i class='material-icons'>content_copy</i> copiar";
}
