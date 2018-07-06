

var data_array = [
   ["В какой стране больше всего озер?","Канада","Финляндия","Норвегия",1,"img/1.jpg","В Канаде около 2 млн озер, которые занимают около 10% территории страны"],
   ["С какой из стран не граничит Украина?","Россия", "Беларусь","Болгария",3,"img/1599228157.jpg","От Украинской границы Болгарию отделаяет 2 страны: Молдова и Румыния"],
   ["Какая пустиня является самой большой в мире","Сахара","Атакама","Гоби",1,"img/sahara.jpg","Это сахара, и она каждый год увеличевается на 6-10 км."],
   ["Море, которое мы называем морем, но морем оно не является, это...","Мертвое","Каспийское","Черное",2,"img/orig.jpg","На самом деле Каспийское море - огромное озеро"],
   ["В каком океане находится Бермудский треугольник?","Атлантический","Тихий","Индийский",1,"img/ddccb8c2532657f6935ddd4cb96fdfd4ff7c970a-750x480.jpg","Он находится в Карибском море, которое находится в Атлантическом океане"],
   ["Какая страна больше остальных?","США","Китай","Канада",3,"img/город.jpg","Канада занимает второе место после Росии, а дальше - Китай и США"],
   ["Назовите самую северную материковую точку Евразии","Земля Франа-Иосефа","Шпицберген","Мыс Челюскин",3,"img/2горо.jpg","Конечно, это Челюскин, все остальные - острова"],
   ["Какое море считается единственным морем без побережья?","Лигурийское","Саргоссово","Карское",2,"img/побер_.jpg","Конечно же это Саргоссово"],
   ["Сколько процентов территории Египта занимает пустыня?","90","70","45",1,"img/egypt.jpg","Даже больше 90%. Остальная територия приходится на дельту и долину Нила"],
   ["Сколько рек впадает в байкал","1","5","336",3,"img/bai.jpg","По легенде, это 336 сыновей Байкала"],
];

// var sett = setInterval( function cl() {
//      	$('.lastform').fadeIn(1000);
//   }, 4000);

var nbr = 1;
var plus = 0;
var time = 0;
var cur_answer = 0;
var count_answer = data_array.length;
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];
var p = document.getElementById('somep');
var download = document.getElementsByClassName('load')[0];
var result = document.getElementsByClassName('cont_res')[0];
var main_n = document.getElementById('main_num');
var sec_n = document.getElementById('sec_num');   
var but = document.getElementById('start');
var again = document.getElementById('again');

but.addEventListener('click', check);
again.addEventListener('click', function() {
   $('.lastform').css('display', 'none');
   document.getElementsByClassName('slide_container')[0].style.display = 'none';
   $('.header').fadeIn(1000);
})
function check() {
   name();
   col();
   p.innerHTML = 'Начнем';
   document.getElementsByClassName('header')[0].style.display = 'none';
   document.getElementsByClassName('slide_container')[0].style.display = 'block';
   document.getElementsByClassName('slide_container')[0].style.background = 'url(' + data_array[cur_answer][5] +') no-repeat';
   document.getElementsByClassName('slide_container')[0].style.backgroundSize = 'cover';
   document.getElementById('num').innerHTML = '1/10 | Помните ли вы географию';
   document.getElementById('parag1').innerHTML=data_array[0][1];
   document.getElementById('parag2').innerHTML=data_array[0][2];
   document.getElementById('parag3').innerHTML=data_array[0][3];
   document.getElementById('head_h1').innerHTML=data_array[0][0];
}

function check1(num) {
   document.getElementById('main').style.display = 'none';
   p.innerHTML = data_array[cur_answer][6];
   name();
   col();
   if( num ==  data_array[cur_answer][4]){plus++;}
   cur_answer++;
   nbr++;
   if(cur_answer < count_answer){
      document.getElementsByClassName('slide_container')[0].style.background = 'url(' + data_array[cur_answer][5] +') no-repeat';
      document.getElementsByClassName('slide_container')[0].style.backgroundSize = 'cover';
      document.getElementById('num').innerHTML =  nbr + '/10 | Помните ли вы географию';
      document.getElementById('parag1').innerHTML=data_array[cur_answer][1];
      document.getElementById('parag2').innerHTML=data_array[cur_answer][2];
      document.getElementById('parag3').innerHTML=data_array[cur_answer][3];
      document.getElementById('head_h1').innerHTML=data_array[cur_answer][0];
   } else {
   		cur_answer = 0;
      document.getElementById('main').style.display = 'none';
      // startcount();
      endcount(plus);
      advan();
   }	
}

// function startcount() {
//    $('.load').fadeIn(1000).delay(10000).fadeOut(1000);
// }

function endcount(num) {
	var sett = setTimeout(cl, 4000);
	 function cl() {
     	$('.lastform').fadeIn(1000);
  }
   main_n.innerHTML = num;
}

function col() {
	$('#main').fadeIn(5000);
}

function name() {
	$('#myModal').fadeIn(1000).delay(3000).fadeOut(1000);
}

function advan() {
	var sett2 = setInterval(cl2, 5000);
   function cl2() {
      $('.advance').fadeIn(1000);
      $('#again').fadeIn(1000);
   }
}


//	SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


