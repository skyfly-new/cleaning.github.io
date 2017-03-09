$( document ).ready(function() {
  var main_sum = 49;
  var main_sum2 = 49;
  var main_sum3 = 49;
  var main_sum1 = main_sum;
  $(".vor__rooms-min").off("click.Minus").on("click.Minus", function(){
  	var perem = $(".vor__rooms-text").text();
  	var sum = $(".vor__itogo").text();
  	var num = parseInt(sum.replace(/\D+/g,""));
  	var sumend;
  	if(perem == "1-комнатная"){
      return;
  	}else{
      var letter = perem.charAt(0) - 1;
      var slovo = perem.substring(1);
      $(".vor__rooms-text").text("" + letter + slovo);
      sumend = num - 10;
      sum = $(".vor__itogo").text("Заказать уборку за " + sumend + " руб.");
  	}
  })
  $(".order__rooms-min").off("click.Minus3").on("click.Minus3", function(){
    var perem = $(".order__rooms-text").text();
    var sum = $(".order__itogo").text();
    var num = parseInt(sum.replace(/\D+/g,""));
    var sumend;
    if(perem == "1-комнатная"){
      return;
    }else{
      var letter = perem.charAt(0) - 1;
      var slovo = perem.substring(1);
      $(".order__rooms-text").text("" + letter + slovo);
      sumend = num - 10;
      sum = $(".order__itogo").text("Заказать уборку за " + sumend + " руб.");
    }
  })
  $(".zakaz__rooms-min").off("click.Minus8").on("click.Minus8", function(){
    var perem = $(".zakaz__rooms-text").text();
    var sum = $(".header__button-order").val();
    var num = parseInt(sum.replace(/\D+/g,""));
    var sumend;
    if(perem == "1-комнатная"){
      return;
    }else{
      var letter = perem.charAt(0) - 1;
      var slovo = perem.substring(1);
      $(".zakaz__rooms-text").text("" + letter + slovo);
      sumend = num - 10;
      main_sum = main_sum - 10;
      main_sum2 = main_sum2 - 10;
      main_sum = main_sum3 - 10;
      sum = $(".header__button-order").val("Стоимость уборки " + sumend + " руб.").trigger('change');
    }
  })
  $(".vor__rooms-plus").off("click.Plus").on("click.Plus", function(){
  	var perem = $(".vor__rooms-text").text();
  	var sum = $(".vor__itogo").text();
  	var num = parseInt(sum.replace(/\D+/g,""));
  	var sumend;
  	if(perem == "5-комнатная"){
      return;
  	}else{
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".vor__rooms-text").text("" + letter + slovo);
      sumend = num + 10;
      sum = $(".vor__itogo").text("Заказать уборку за " + sumend + " руб.");
  	}
  })
   $(".zakaz__rooms-plus").off("click.Plus11").on("click.Plus11", function(){
    var perem = $(".zakaz__rooms-text").text();
    var sum = $(".header__button-order").val();
    var num = parseInt(sum.replace(/\D+/g,""));
    var sumend;
    if(perem == "5-комнатная"){
      return;
    }else{
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".zakaz__rooms-text").text("" + letter + slovo);
      sumend = num + 10;
      main_sum = main_sum + 10;
      main_sum2 = main_sum2 + 10;
      main_sum3 = main_sum3 + 10;
      sum = $(".header__button-order").val("Стоимость уборки " + sumend + " руб.").trigger('change');
    }
  })
   $(".order__rooms-plus").off("click.Plus3").on("click.Plus3", function(){
    var perem = $(".order__rooms-text").text();
    var sum = $(".order__itogo").text();
    var num = parseInt(sum.replace(/\D+/g,""));
    var sumend;
    if(perem == "5-комнатная"){
      return;
    }else{
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".order__rooms-text").text("" + letter + slovo);
      sumend = num + 10;
      sum = $(".order__itogo").text("Заказать уборку за " + sumend + " руб.");
    }
  })
  $(".vor__toilet-min").off("click.Minus1").on("click.Minus1", function(){
  	var perem = $(".vor__toilet-text").text();
  	var new_slovo = +perem.charAt(0);
  	var sum = $(".vor__itogo").text();
  	var num = parseInt(sum.replace(/\D+/g,""));
  	var sumend;
  	if(+perem.charAt(0) == 1){
      return;
  	}else if(new_slovo == 2 ){
      var letter = perem.charAt(0) - 1;
      var slovo = perem.substring(1);
      $(".vor__toilet-text").text(letter + " санузел");
      sumend = num - 10;
      sum = $(".vor__itogo").text("Заказать уборку за " + sumend + " руб.");
    }else{
      var letter = perem.charAt(0) - 1;
      var slovo = perem.substring(1);
      $(".vor__toilet-text").text(letter + " санузла");
      sumend = num - 10;
      sum = $(".vor__itogo").text("Заказать уборку за " + sumend + " руб.");
  	}
  })
  $(".zakaz__toilet-min").off("click.Minus12").on("click.Minus12", function(){
    var perem = $(".zakaz__toilet-text").text();
    var new_slovo = +perem.charAt(0);
    var sum = $(".header__button-order").val();
    var num = parseInt(sum.replace(/\D+/g,""));
    var sumend;
    if(+perem.charAt(0) == 1){
      return;
    }else if(new_slovo == 2 ){
      var letter = perem.charAt(0) - 1;
      var slovo = perem.substring(1);
      $(".zakaz__toilet-text").text(letter + " санузел");
      sumend = num - 10;
      main_sum = main_sum - 10 ;
      main_sum2 = main_sum2 - 10;
      main_sum3 = main_sum3 - 10;
      sum = $(".header__button-order").val("Стоимость уборки " + sumend + " руб.").trigger('change');
    }else{
      var letter = perem.charAt(0) - 1;
      var slovo = perem.substring(1);
      $(".zakaz__toilet-text").text(letter + " санузла");
      sumend = num - 10;
      main_sum = main_sum - 10;
      main_sum2 = main_sum2 - 10;
      main_sum3 = main_sum3 - 10;
      sum = $(".header__button-order").val("Стоимость уборки " + sumend + " руб.").trigger('change');
    }
  })
  $(".order__toilet-min").off("click.Minus6").on("click.Minus6", function(){
    var perem = $(".order__toilet-text").text();
    var new_slovo = +perem.charAt(0);
    var sum = $(".order__itogo").text();
    var num = parseInt(sum.replace(/\D+/g,""));
    var sumend;
    if(+perem.charAt(0) == 1){
      return;
    }else if(new_slovo == 2 ){
      var letter = perem.charAt(0) - 1;
      var slovo = perem.substring(1);
      $(".order__toilet-text").text(letter + " санузел");
      sumend = num - 10;
      sum = $(".order__itogo").text("Заказать уборку за " + sumend + " руб.");
    }else{
      var letter = perem.charAt(0) - 1;
      var slovo = perem.substring(1);
      $(".order__toilet-text").text(letter + " санузла");
      sumend = num - 10;
      sum = $(".order__itogo").text("Заказать уборку за " + sumend + " руб.");
    }
  })
  $(".vor__toilet-plus").off("click.Plus1").on("click.Plus1", function(){
  	var perem = $(".vor__toilet-text").text();
  	var new_slovo = +perem.charAt(0);
  	var sum = $(".vor__itogo").text();
  	var num = parseInt(sum.replace(/\D+/g,""));
  	var sumend;
  	if(+perem.charAt(0) == 5){
      return;
  	}else if(new_slovo == 4){
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".vor__toilet-text").text(letter + " санузлов");
      sumend = num + 10;
      sum = $(".vor__itogo").text("Заказать уборку за " + sumend + " руб.");
    }else if(new_slovo == 2 ){
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".vor__toilet-text").text(letter + " санузла");
      sumend = num + 10;
      sum = $(".vor__itogo").text("Заказать уборку за " + sumend + " руб.");
    }else{
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".vor__toilet-text").text(letter + " санузла");
      sumend = num + 10;
      sum = $(".vor__itogo").text("Заказать уборку за " + sumend + " руб.");
  	}
  })
  $(".zakaz__toilet-plus").off("click.Plus1").on("click.Plus1", function(){
    var perem = $(".zakaz__toilet-text").text();
    var new_slovo = +perem.charAt(0);
    var sum = $(".header__button-order").val();
    var num = parseInt(sum.replace(/\D+/g,""));
    var sumend;
    if(+perem.charAt(0) == 5){
      return;
    }else if(new_slovo == 4){
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".zakaz__toilet-text").text(letter + " санузлов");
      sumend = num + 10;
      main_sum = main_sum + 10;
      main_sum2 = main_sum2 + 10;
      main_sum3 = main_sum3 + 10;
      sum = $(".header__button-order").val("Стоимость уборки " + sumend + " руб.").trigger('change');
    }else if(new_slovo == 2 ){
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".zakaz__toilet-text").text(letter + " санузла");
      sumend = num + 10;
      main_sum = main_sum + 10;
      main_sum2 = main_sum2 + 10;
      main_sum3 = main_sum3 + 10;
      sum = $(".header__button-order").val("Стоимость уборки " + sumend + " руб.").trigger('change');
    }else{
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".zakaz__toilet-text").text(letter + " санузла");
      sumend = num + 10;
      main_sum = main_sum + 10;
      main_sum2 = main_sum2 + 10;
      main_sum3 = main_sum3 + 10;
      sum = $(".header__button-order").val("Стоимость уборки " + sumend + " руб.").trigger('change');
    }
  })
  $(".order__toilet-plus").off("click.Plus4").on("click.Plus4", function(){
    var perem = $(".order__toilet-text").text();
    var new_slovo = +perem.charAt(0);
    var sum = $(".order__itogo").text();
    var num = parseInt(sum.replace(/\D+/g,""));
    var sumend;
    if(+perem.charAt(0) == 5){
      return;
    }else if(new_slovo == 4){
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".order__toilet-text").text(letter + " санузлов");
      sumend = num + 10;
      sum = $(".order__itogo").text("Заказать уборку за " + sumend + " руб.");
    }else if(new_slovo == 2 ){
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".order__toilet-text").text(letter + " санузла");
      sumend = num + 10;
      sum = $(".order__itogo").text("Заказать уборку за " + sumend + " руб.");
    }else{
      var letter = +perem.charAt(0) + 1;
      var slovo = perem.substring(1);
      $(".order__toilet-text").text(letter + " санузла");
      sumend = num + 10;
      sum = $(".order__itogo").text("Заказать уборку за " + sumend + " руб.");
    }
  })
  $(".tab__wash").off("click.Open").on("click.Open", function(){
     $(".tabs__img").each(function(){
       $(".tabs__img").removeClass("tabs__img-open");
     });
     $(".tab__back").each(function(){
       $(".tab__back").removeClass("tab__open");
     });
     $(".tab__wash-img .tabs__img").addClass("tabs__img-open");
     $(this).addClass("tab__open");
  });
  $(".tab__room").off("click.Open1").on("click.Open1", function(){
     $(".tabs__img").each(function(){
       $(".tabs__img").removeClass("tabs__img-open");
     });
     $(".tab__back").each(function(){
       $(".tab__back").removeClass("tab__open");
     });
     $(".tab__room-img .tabs__img").addClass("tabs__img-open");
     $(this).addClass("tab__open");
  });
  $(".tab__keatchen").off("click.Open2").on("click.Open2", function(){
     $(".tabs__img").each(function(){
       $(".tabs__img").removeClass("tabs__img-open");
     });
     $(".tab__back").each(function(){
       $(".tab__back").removeClass("tab__open");
     });
     $(".tab__keatchen-img .tabs__img").addClass("tabs__img-open");
     $(this).addClass("tab__open");
  });
  $(".tab__koridor").off("click.Open3").on("click.Open3", function(){
     $(".tabs__img").each(function(){
       $(".tabs__img").removeClass("tabs__img-open");
     });
     $(".tab__back").each(function(){
       $(".tab__back").removeClass("tab__open");
     });
     $(".tab__koridor-img .tabs__img").addClass("tabs__img-open");
     $(this).addClass("tab__open");
  });
  $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 55}, 1000); // анимируем скроолинг к элементу scroll_el
    };
    return false; // выключаем стандартное действие
  });
  $('.go_to1').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 55}, 1000); // анимируем скроолинг к элементу scroll_el
    };
    return false; // выключаем стандартное действие
  });
  $(window).scroll(function(){
    if( $(window).scrollTop() > 100){
      $(".header__menu-new").addClass("header__open");
    }else{
      $(".header__menu-new").removeClass("header__open");
    }
  });
  $(".order__fun").off("click.Open6").on("click.Open6", function(){
    $(this).find(".order__new-img").toggleClass("order__close");
    $(this).find(".order__hover").toggleClass("order__new-open");
    $(this).find(".order__new-p").toggleClass("order__color-p");
  });
  $(".order__window").off("click.Open7").on("click.Open7", function(){
    if($(this).hasClass("order__window") && $(this).find(".order__hover").hasClass("order__new-open")){
      $(".selct__order").addClass("selct__order-open");
    }else{
      $(".selct__order").removeClass("selct__order-open");
    }
  });
  $(".order__li").off("click.Open8").on("click.Open8", function(){
    $(".order__li").removeClass("order__li-select");
    $(this).addClass("order__li-select");
  });
  $(".order__fridge").off("click.Open15").on("click.Open15", function(){
    var sum = $(".header__button-order").val();
    var num = parseInt(sum.replace(/\D+/g,""));
    if($(this).find(".order__new-p").hasClass("order__color-p")){
      var novoe = num + 10;
      main_sum = main_sum + 10;
      main_sum2 = main_sum2 + 10;
      main_sum3 = main_sum3 + 10;
      $(".header__button-order").val("Стоимость уборки " + novoe +  " руб.").trigger('change');
    }else{
      var novoe1 = num - 10;
      main_sum = main_sum - 10;
      main_sum2 = main_sum2 - 10;
      main_sum3 = main_sum3 - 10;
      $(".header__button-order").val("Стоимость уборки " + novoe1 +  " руб.").trigger('change');
    }
  });
  $(".order__pech").off("click.Open16").on("click.Open16", function(){
    var sum = $(".header__button-order").val();
    var num = parseInt(sum.replace(/\D+/g,""));
    if($(this).find(".order__new-p").hasClass("order__color-p")){
      var novoe = num + 10;
      main_sum = main_sum + 10;
      main_sum2 = main_sum2 + 10;
      main_sum3 = main_sum3 + 10;
      $(".header__button-order").val("Стоимость уборки " + novoe +  " руб.").trigger('change');
    }else{
      var novoe1 = num - 10;
      main_sum = main_sum - 10;
      main_sum2 = main_sum2 - 10;
      main_sum3 = main_sum3 - 10;
      $(".header__button-order").val("Стоимость уборки " + novoe1 +  " руб.").trigger('change');
    }
  });
  $(".order__micro").off("click.Open17").on("click.Open17", function(){
    var sum = $(".header__button-order").val();
    var num = parseInt(sum.replace(/\D+/g,""));
    if($(this).find(".order__new-p").hasClass("order__color-p")){
      var novoe = num + 6;
      main_sum = main_sum + 6;
      main_sum2 = main_sum2 + 6;
      main_sum3 = main_sum3 + 6;
      $(".header__button-order").val("Стоимость уборки " + novoe +  " руб.").trigger('change');
    }else{
      var novoe1 = num - 6;
      main_sum = main_sum - 6;
      main_sum2 = main_sum2 - 6;
      main_sum3 = main_sum3 - 6;
      $(".header__button-order").val("Стоимость уборки " + novoe1 +  " руб.").trigger('change');
    }
  });
  $(".order__balk").off("click.Open18").on("click.Open18", function(){
    var sum = $(".header__button-order").val();
    var num = parseInt(sum.replace(/\D+/g,""));
    if($(this).find(".order__new-p").hasClass("order__color-p")){
      var novoe = num + 10;
      main_sum = main_sum + 10;
      main_sum2 = main_sum2 + 10;
      main_sum3 = main_sum3 + 10;
      $(".header__button-order").val("Стоимость уборки " + novoe +  " руб.").trigger('change');
    }else{
      var novoe1 = num - 10;
      main_sum = main_sum - 10;
      main_sum2 = main_sum2 - 10;
      main_sum3 = main_sum3 - 10;
      $(".header__button-order").val("Стоимость уборки " + novoe1 +  " руб.").trigger('change');
    }
  });
  $(".order__plate").off("click.Open19").on("click.Open19", function(){
    var sum = $(".header__button-order").val();
    var num = parseInt(sum.replace(/\D+/g,""));
    if($(this).find(".order__new-p").hasClass("order__color-p")){
      var novoe = num + 6;
      main_sum = main_sum + 6;
      main_sum2 = main_sum2 + 6;
      main_sum3 = main_sum3 + 6;
      $(".header__button-order").val("Стоимость уборки " + novoe +  " руб.").trigger('change');
    }else{
      var novoe1 = num - 6;
      main_sum = main_sum - 6;
      main_sum2 = main_sum2 - 6;
      main_sum3 = main_sum3 - 6;
      $(".header__button-order").val("Стоимость уборки " + novoe1 +  " руб.").trigger('change');
    }
  });
  $(".order__chkaf").off("click.Open20").on("click.Open20", function(){
    var sum = $(".header__button-order").val();
    var num = parseInt(sum.replace(/\D+/g,""));
    if($(this).find(".order__new-p").hasClass("order__color-p")){
      var novoe = num + 10;
      main_sum = main_sum + 10;
      main_sum2 = main_sum2 + 10;
      main_sum3 = main_sum3 + 10;
      $(".header__button-order").val("Стоимость уборки " + novoe +  " руб.").trigger('change')
    }else{
      var novoe1 = num - 10;
      main_sum = main_sum - 10;
      main_sum2 = main_sum2 - 10;
      main_sum3 = main_sum3 - 10;
      $(".header__button-order").val("Стоимость уборки " + novoe1 +  " руб.").trigger('change')
    }
  });
  var select;
  var konech;
  var polya = 0;
   $(".order__select").off("click.Open22").on("click.Open22", function(){
    main_sum2 = main_sum;
    main_sum3 = main_sum;
    var novot = select;
    var num =  novot;
    var select2 = $('select.order__select option:selected').val();
    konech = select2 * 7;
    main_sum2 = main_sum2 + select2 * 7;
    main_sum3 = main_sum3 + select2 * 7;
    polya = select2 * 7;
    $(".header__button-order").val("Стоимость уборки " + main_sum2 +  " руб.").trigger('change');
  });
  var new_perem;
  var novoe_perem;
  $(".order__window").off("click.Open21").on("click.Open21", function(){
    var select3 = $(".header__button-order").val();
    select = parseInt(select3.replace(/\D+/g,""));
    if($(this).find(".order__new-p").hasClass("order__color-p")){
      var lol = $(".header__button-order").val();
      new_perem = parseInt(lol.replace(/\D+/g,""));
      novoe_perem = main_sum;
    }else{
      var select4 = $(".header__button-order").val();
      var select5 = parseInt(select3.replace(/\D+/g,""));
      var end__cost = select5 - konech;
      main_sum2 = main_sum2 - konech;
      main_sum3 = main_sum3 - konech;
      polya = 0;
      $(".header__button-order").val("Стоимость уборки " + main_sum +  " руб.").trigger('change');
    }
  });
  $( ".header__button-order" ).change(function() {
    var change = $(".header__button-order").val();
    var change1 = parseInt(change.replace(/\D+/g,""));
    $(".order__sum-buttom").val("Заказать уборку за " + change1 + " руб.");
    $('.order__li').trigger('click');
  });
  $(".order__li").off("click.Open30").on("click.Open30", function (){
    console.log("lol");
    main_sum3 = main_sum2;
    $(".order__li").parent().parent().find(".order__coun-p").removeClass("color__red")
    if($(".order__li-one").hasClass("order__li-select")){
      var konez = main_sum3;
      var peremen = Math.round(konez - (konez * 0.15)).toFixed(0);
      $(".header__button-order").val("Стоимость уборки " + peremen + " руб.");
      $(".order__sum-buttom").val("Заказать уборку за " + peremen + " руб.");
    }else if($(".order__li-two").hasClass("order__li-select")){
      var konez1 = main_sum3;
      var peremen1 = Math.round(konez1 - (konez1 * 0.12)).toFixed(0);
      $(".header__button-order").val("Стоимость уборки " + peremen1 + " руб.");
      $(".order__sum-buttom").val("Заказать уборку за " + peremen1 + " руб.");
    }else if($(".order__li-tree").hasClass("order__li-select")){
      var konez2 = main_sum3;
      var peremen2 = Math.round(konez2  - (konez2  * 0.08)).toFixed(0);
      $(".header__button-order").val("Стоимость уборки " + peremen2 + " руб.");
      $(".order__sum-buttom").val("Заказать уборку за " + peremen2 + " руб.");
    }else if($(".order__li-four").hasClass("order__li-select")){
      var konez3 = main_sum3;
      var peremen3 = Math.round(konez3 - (konez3 * 0.05)).toFixed(0);
      $(".header__button-order").val("Стоимость уборки " + peremen3 + " руб.");
      $(".order__sum-buttom").val("Заказать уборку за " + peremen3 + " руб.");
    }else if($(".order__li-five").hasClass("order__li-select")){
      var konez4 = main_sum3;
      var peremen4 = Math.round(konez4 - (konez4 * 0)).toFixed(0);
      $(".header__button-order").val("Стоимость уборки " + peremen4 + " руб.");
      $(".order__sum-buttom").val("Заказать уборку за " + peremen4 + " руб.");
    }
  });
  $(".order__input-next").off("click.Open36").on("click.Open36", function(){
    $(this).parent().find(".order__coun-p").removeClass("color__red");
    $(".order__sum-endp").removeClass("order__open-endp");
  });
  $(".order__sum-buttom").off("click.Open35").on("click.Open35", function(){
    if(!($(".order__li").hasClass("order__li-select"))){
      $(".order__li").parent().parent().find(".order__coun-p").addClass("color__red");
      $(".order__sum-endp").addClass("order__open-endp");
    }
  });
  $(".order__sum-buttom").off("click.Open37").on("click.Open37", function(){
    if($(".order__data").val().length <= 1){
      $(".order__data").parent().find(".order__coun-p").addClass("color__red");
      $(".order__sum-endp").addClass("order__open-endp");
    }
  });
  $(".order__sum-buttom").off("click.Open38").on("click.Open38", function(){
    if($(".order__timer").val().length <= 1){
      $(".order__timer").parent().find(".order__coun-p").addClass("color__red");
      $(".order__sum-endp").addClass("order__open-endp");
    }
  });
  $(".order__sum-buttom").off("click.Open39").on("click.Open39", function(){
    $(".order__name-input").each(function( index ) {
      if($(this).val().length <= 1){
        $(this).addClass("color__red");
        $(".change").removeClass("color__red");
        $(".order__sum-endp").addClass("order__open-endp");
      }
    });
  });
  $(".order__name-input").off("click.Open40").on("click.Open40", function(){
    $(this).removeClass("color__red");
    $(".order__sum-endp").removeClass("order__open-endp");
  });
});