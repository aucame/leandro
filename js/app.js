var app = angular.module('landpage',['ngMask']);

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

app.controller('lpcontroller', function($scope, $http, $window) {

  $scope.ShowAlert = function () {
      $window.alert("Favor preencher os campos obrigatórios!");
  };

  $scope.novo = function() {
      $scope.user = { nome: "", email: "", fone: "", empresa: "", site: "" };
  };

  $scope.gravar = function(user) {
    if (user.nome != ""){

        $http({
            method: 'post',
            url:    'http://localhost:8080/rotinas.php?action=add_cliente',
            data:   $scope.user
        }).then (function successCallback(response){

          $scope.novo();

        }, function errorCallback(response){

          $scope.novo();

        });

      } else {
        $scope.ShowAlert();
      };

  };

  $scope.anuncio  = "Contra CRISE: Facebook e Google.";
  $scope.cliente  = "Aurelio Carlos Menezes";

  $scope.titulo01 = "ebook Facebook ads e Google Adwords SEM segredos";
  $scope.subtit01 = "Dicas e Técnicas para alavancar seus Negócios na Internet.";
  $scope.titulo02 = "Contra CRISE: Facebook e Google.";
  $scope.titulo03 = "Faça o download grátis aqui";
  $scope.subtit03 = "Basta preencher o formulário abaixo para recebê-lo em seu email.";
  $scope.banner01 = "imagens/BANNER_01.png";
  $scope.banner02 = "imagens/BANNER_02.png";
  $scope.texto = "Aprenda neste ebook os principais conceitos e técnicas de facebook ads e" +
  " google adwords para gerar visitas em seu site. Visitas podem se tornar leads, leads " +
  "oportunidades e oportunidades se tornam VENDAS." +

  " Não há segredos, apenas combinações de técnicas simples e profissionais qualificados para" +
  " sustentar a qualidade das campanhas gerando negócios para sua empresa com baixos" +
  " investimentos de mídia." +

  " Não importa se sua empresa é de serviços ou produtos. Marketing Digital se faz com" +
  " inteligência. O que é bom para uma empresa, talves precise ser adequado para a sua.";

  $scope.botao = "Receber Material";
  $scope.privacidade = "http://www.uol.com.br";

//  <script src="https://www.youtube.com/iframe_api"></script>
//  <script src="bower_components\angular-youtube-mb\dist\angular-youtube-embed.min.js"></script>
//  <youtube-video video-id="video" player-width="'100%'" player-height="'300px'" ></youtube-video>
//  $scope.video = 'X2YQ_rgXp9w';

  $scope.novo();
});
