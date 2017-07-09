import { Random } from 'meteor/random';

Template.tryES6.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
	var Nrepeat=53	
function o(){console.log('_'.repeat(Nrepeat-2))};

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Сумма N вещественных случайных чисел от -1 до +1" )
console.log("	(N:  случайное число от 1 до 1000)" );
	
	function sg(x)
	{if (x >= 0.5)
			return 1;
	 else
			return -1;
	}
	
	 var i=0;
	 var result=0.0;
	 var ni = Random.fraction()*1000+1
	 for (i = 0; i <= ni; i++){
	result = sg(Random.fraction()) * Random.fraction() + result;
	//console.log(i + "] " + result + ";" );
		instance.counter.set(result);
	};
	i=i-1;
	console.log(i + "] " + result + ";" );

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 
 
console.log("	Деструктуризация" )
console.log("	и метод repeat" );
  
  let arr = [" hello!", 5]; // let
  let [str, times] = arr; // деструктуризация
  v=str.repeat(times);//  метод repeat
  console.log("v=str.repeat(times)=" + v + ";" )
	//------------------//  
	//  alert( v );     //
	//------------------// 
  let rf=Random.fraction()
  //document.write(i + "]   " + result + ";" );
  //console.log(   i + "]   " + result + ";" );
  //console.log("   arr= " + arr + ";" );

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Объявление переменных" )
console.log("	(set и let)" );
  var a = 12; //доступна глобально
  function myFunction4()
  {
	  console.log('a='+a+' - доступна глобально');
	  var b=13;// доступна в пределах функции
	  var c=14;// доступна в пределах функции
	  if( true)
	  {
		  let c=15;// доступна в пределах функции
		  console.log('b='+b+' - доступна в пределах функции')
		  console.log('c='+c+' - доступна в пределах блока')
	  }  
		  console.log('c='+c+' - доступна в пределах функции')
  }
  myFunction4();
  // console.log('c='+c) //Uncaught ReferenceError: c is not defined

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Значения параметров по умолчанию" ) 
  
	function myFunction1(х = 1 , у = 2, z = 3)
	{console.log(х, у, z ) ; // Выведет "6 7 3"
	}
	myFunction1(6,7);
  //-----------------------
  //передача undefined воспринимается как отсутствие аргумента
	function myFunction2(х = 1 , у = 2, z = 3)
	{console.log(х, у, z ) ; // Выведет "1 7 9"
	}
	myFunction2 (undefined, 7, 9) ; 
  //-----------------------
  //Значениями по умолчанию также могут быть выражения.
	function myFunction3(х = 1, у = 2, z = 3 + 5)
	{
	console.log(х, у, z ) ; // Выведет "6 7 8"
	}
	myFunction3(6,7); 
  //-----------------------
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Оператор расширения" )
	{
	function myFunction5(x, y)
	{
	return x + y;
	}
	let dta = [1, 4 ] ;
	//Оператор расширения записывается как «...».
	// разбивает итерируемые объекты на отдельные значения.
	let res = myFunction5(...dta);
	console.log(res); // Выведет "5"
	}
o(); //▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Определение значений массива как части другого массива")
	let arrayl = [2,3,4];
	let array2 = [1, ...arrayl, 5, 6, 7 ] ;
	console.log(array2); // Выведет "1, 2, 3, 4, 5, 6, 7"
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Копирование значений из одного массива в другой");
	let array3 = [2,3,4];
	let array4 = [1];
	array4.push(...array3);
	console.log(array4); // Выведет "1, 2, 3, 4"	
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  	
console.log("	Расширение нескольких массивов");
	{
	function myFunction(a, b, c, d, e)
	{
	return a+b+c+d+e;
	}
	let array1 = [1];
	let array2 = [2] ;
	let аrrаy3 = [...array1, ...array2, ...[3, 4]];// несколько массивов
	let array4 = [5];
	console.log(array1);
	console.log(array2);
	console.log(аrrаy3);
	console.log(array4);
	let result = myFunction(...аrrаy3, ...array4); // несколько массивов
	console.log(result); // Выведет "15"
	}	
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  	
console.log("	Дополнительные, или необязательные параметры");
	{
	function myFunction(a, b, ...args)
		{console.log(args); // Выведет "3, 4, 5"
		}
	myFunction(1, 2, 3, 4, 5 ) ;
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  	
console.log("	Деструктивное присваивание массивов ");
	{	
	let myArray = [1, 2, 3, 4, 5, 6] ;
	let [a, b, c] = myArray; // синтаксис деструктивного
							 //  присваивания массива
	//Если переменных меньше, чем элементов в массиве,
	//учитываются только первые элементы.					 
							 
	console.log('myArray ='+myArray);
	console.log('a='+a);
	console.log('b='+b);	
	console.log('c='+c);
	}
	o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  	
console.log("Игнорирование значений");
	{	
	let [а, , b] = [1, 2, 3 ] ;
	console.log(а)
	console.log(b)
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  	
console.log("	Использование деструктивного присваивания массива");
	{
	let [a, ...b] = [1, 2, 3, 4, 5, 6] ;
	console.log(a);
	console.log(Array.isArray(b));
	console.log(b);	
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  		
console.log("	Игнорирование значений c помощью оператора дополнения");
	{
	let [a, , ,...b] = [1, 2, 3, 4, 5, 6] ;
	console.log(a);   // 1
	console.log(b);   // 4 ,5, 6	
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  		
console.log("	Значения по умолчанию для переменных");
	{
	let [a, b, c = 3] = [1, 2] ;
	console.log(a,b,c); // Выведет "1,2,3"
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  		
console.log("	Деструктивное присваивание вложенных массивов");
	{
	let [a, b, [c, d] ] = [1, 2, [3, 4]]; 
	console.log(a, b, [c, d]); // Выведет 1,2,[3,4]
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  		
console.log("	Использование деструктивного присваивания в качестве параметра функции");
	{
	function myFunction([a, b, с = 3])
	{
	console.log(a, b, с ) ; // Выведет "1 2 3"
	}
	myFunction([1, 2 ] ) ;
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   
console.log("	В качестве значения по умолчанию можно указать массив, который будет использован, если аргумент получит значение undefined")
{
	function myFunction([a, b, с = 3] = [1, 2, 3])
	{
	console.log(a, b, с ) ; // Выведет "1 2 3"
	}
	myFunction (undefined) ;
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   
console.log("	Деструктивное присваивание объектов для выделения и присваивания их свойств переменным")
{
	{
	let object = {"name" : "John", "age" : 23};
	let name, age;
	({name, age} = object); // синтаксис деструктивного
							// присваивания объектов
/* В левую часть оператора деструктивного присваивания долж
ны быть помещены переменные для присваивания свойств объекта.
В правую часть - объект, свойства которого мы хотим извлечь, а за
тем, обернуть всю инструкцию круглыми скобками (). */
	console.log(object)
	console.log(name)	
	console.log(age)
	}
	
	console.log('		или')
	
	{
	let object = {"name" : "Jack", "age" : 43};
	let {name: x, age: y} = {"name" : "Jack", "age" : 43};
	/* 	не нужно заключать оператор
	в круглые скобки (), так как переменные
	создаются в том же операторе. */
	console.log(object)
	console.log(x)
	console.log(y)
	}
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Значения по умолчанию для переменных")
{
let {a, b, c = 3} = {a: "1", b: "2"};
console.log(a); // Выведет "1"
console.log(b); // Выведет "2"
console.log(c); // Выведет "3"
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Вычисляемые имена свойств в деструктивном присваивании")
{
let { [ "first" + "Name" ] : х} = { firstName: "Eden" };
console.log(х); // Выведет "Eden"
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Деструктивное присваивание вложенных объектов")
{
var {name, otherlnfo: {age}} = {name: "Eden", otherlnfo: {age: 23}};
console.log(name, age); //Выведет  Eden 23
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Использование деструктивного присваивания объекта как параметра")
{
	function myFunction({name = 'Eden', age = 23, profession = "Designer"} = {})
{
console.log(name, age, profession); // Выведет "John 23 Designer"
}
myFunction({name: "John", age: 23});
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Стрелочные функции.Создание стрелочной функции.")
{
let circleArea = (pi, г) => {
	let area = pi * г * г;
	return area;
}
let result = circleArea(3.14, 3) ;
console.log(result); // Выведет "28.26"
}


o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Если стрелочная функция содержит только один оператор, нет необходимости заключать ее в фигурные скобки {}.")
{
let circleArea = (pi, г) => pi * г * г;
let result = circleArea(3.14, 10) ;
console.log(result); // Выведет "314"
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Значение ключевого слова this в обычных функциях")
{
var object = {
f1: function(){
console.log(this) ;   // Выведет Object {f1: function}
// Здесь, ключевое слово this внутри функции fi содержит
// ссылку на объект object, так как функция f1 является
// его свойством.
var f2 = function(){ console.log(this) ; }   // Выведет Window {...
// this внутри f2 содержит ссылку на объект window,
// так как f2 является свойством объекта window
f2() ;
//setTimeout(f2, 1000);
			  }
			 }
object.f1();  // Выведет  Window {...
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	В стрелочных функциях this ведет себя иначе")
{
var object = {
f1 : () => {
console.log(this);
var f2 = () => { console.log(this); }
f2 () ;
//setTimeout(f2, 1000);
		  }
			 }
object.f1();
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	ES6 предлагает более короткий синтаксис присваивания значений переменных свойствам объекта, если переменные имеют те же имена, что и свойства")
{
let 问候 = 1, ϣ = 2;
let object = { 问候, ϣ };
console.log(object);   // выведет Object {问候: 1, ϣ: 2}
console.log(object.问候); // выведет " 1 "
console.log(object.ϣ); // выведет " 2 "
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	ES6 предлагает новый синтаксис определения методов объектов")
{
let object = {
myFunction(){
console.log("Hello World!!!"); // Выведет "Hello World!!!"
			}
			 }
//Эта компактная форма записи функций позволяет использовать
//внутри них ключевое слово super, тогда как традиционные методы
//объектов не дают такой возможности.

object.myFunction() ;
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Вычисляемые имена свойств")
{
let object = {["first" + "Name"]: "Eden",} ;
//в ES6 есть возможность добавлять свойства с вычисляемыми
// именами прямо при создании объектов
console. log (object [ "first" + "Name"]); // Выведет "Eden"
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	ГЛАВА 2.")
console.log("	Знакомство с библиотекой")
console.log("	Работа с числами")

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Двоичное представление")
{
let d = 0b00001111;
console.log(d); // Выведет 15
let b = 15;
console.log(b); // Выведет 15
console.log(d === b ) ; // Выведет true
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Восьмеричное представление")
{
let а = 0o17;
let b = 15;
console.log(а); // Выведет 15
console.log(b); // Выведет 15
console.log(а === b ) ; // Выведет true
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Метод Number.isInteger(number)")
{
let а = 17.0;
let b = 1.2;
console.log(а); // Выведет 17
console.log(b); // Выведет 1.2
console.log(Number.isInteger(a)); // Выведет true
console.log(Number.isInteger(b)); // Выведет false
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Глобальная функция isNaN()")
{
let a = 'fsdfasf';
console.log(a); // Выведет fsdfasf
console.log(isNaN(a)); // Выведет true
// Глобальная функция isNaN() используется для проверки,
// является ли значение числом или нет. 
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Метод Number.isNaN(value)")
{
let a = "NaN";
console.log('Number.isNaN("NaN")=')
console.log(Number.isNaN(a)) // Выведет false

let b = NaN;
console.log('Number.isNaN(NaN)=')
console.log(Number.isNaN(b)) // Выведет true
// метод Number.isNaN() возвращает true, только когда
// ему передано значение NaN.

let c = "hello";
console.log('Number.isNaN("hello")=')
console.log(Number.isNaN(c)) // Выведет false 

let d = 12;
console.log('Number.isNaN(12)=')
console.log(Number.isNaN(d)) // Выведет false 

console.log('isNaN("NaN")=')
console.log(isNaN(a)); 		 // Выведет true
console.log('isNaN(NaN)=')
console.log(isNaN(b)); 		 // Выведет true
console.log('isNaN("hello")=')
console.log(isNaN(c)); 		 // Выведет true
console.log('isNaN(12)=')
console.log(isNaN(d)); 		 // Выведет false 

console.log('NaN==NaN');
console.log( NaN==NaN );  // Выведет false 
console.log('NaN===NaN');
console.log( NaN===NaN ); // Выведет false 
// Значение NaN является единственным значением, 
// которое не равно самому себе
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Метод Number.isFinite(number)")
{
// Глобальная функция isFinite()
console.log('isFinite(10)=');
console.log(isFinite(10)); 	     // Выведет true
console.log('isFinite(NaN)=');
console.log(isFinite(NaN));      // Выведет false
console.log('isFinite(null)=');
console.log(isFinite(null));	 // Выведет true
console.log('isFinite([])=');
console.log(isFinite([]));	     // Выведет true

// Метод Number.isFinite()
console.log('Number.isFinite(10)=');
console.log(Number.isFinite(10));	  // Выведет true
console.log('Number.isFinite(NaN)=');
console.log(Number.isFinite(NaN));    // Выведет false
console.log('Number.isFinite(null)=');
console.log(Number.isFinite(null));   // Выведет false  
console.log('Number.isFinite([])=');
console.log(Number.isFinite([]));     // Выведет false
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Метод Number.isSafelnteger(number)")
{
/* Числа в JavaScript хранятся как 64-разрядные числа с плавающей
точкой, в соответствии с международным стандартом IEEE 754. Этот
формат использует для хранения числа 64 бита, где число (дробная
часть) занимает биты с 0 по 51, экспонента - биты с 52 по 62, 
а знак числа - последний бит.
Таким образом, в JavaScript безопасными считаются целые числа,
которые не будут округлены до других целых чисел, чтобы уместить
в представление IEEE 754.
 Математически такими безопасными целыми числами являются числа
 от -(2^53-1) до (2^53-1) . */
 
console.log('Number.isSafeInteger(156)=');
console.log(Number.isSafeInteger(156));

console.log("Number.isSafeInteger('11212'))=");
console.log(Number.isSafeInteger('11212'));

console.log('Number.isSafeIntegerNumber.MAX_SAFE_INTEGER)=');
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));

console.log('Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1))=');
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

console.log('Number.isSafeInteger(Number.MIN_SAFE_INTEGER)=');
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));

console.log('Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)=');
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)); 
}


o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Свойство Number.EPSILON")
{
console.log('0.1 + 0.2 == 0.3');	
console.log(0.1 + 0.2 == 0.3);

console.log('0.9 - 0.8 == 0.1');
console.log(0.9 - 0.8 == 0.1);

console.log('0.1 + 0.2=');
console.log(0.1 + 0.2);

console.log('0.9 - 0.8=');
console.log(0.9 - 0.8);	

function epsilonEqual(a, b){return Math.abs(a - b) <Number.EPSILON;}
// Number.EPSILON приблизительно равно 2^-52
// epsiionEquai () - это пользовательская функция
// сравнения двух значений на равенство

console.log('epsilonEqual(0.1 + 0.2, 0.3)=');
console.log(epsilonEqual(0.1 + 0.2, 0.3));

console.log('epsilonEqual(0.9 - 0.8, 0.1)=');
console.log(epsilonEqual(0.9 - 0.8, 0.1));
}


o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
{
console.log("	Объект Math")
console.log("	Тригонометрические операции")

console.log('Math.sinh(0)=');
console.log(Math.sinh(0)); // гиперболический синус

console.log('Math.cosh(0)=');
console.log(Math.cosh(0)); // гиперболический косинус

console.log('Math.tanh(0)=');
console.log(Math.tanh(0)); // гиперболический тангенс

console.log('Math.asinh(0)=');
console.log(Math.asinh(0)); // обратный гиперболический синус

console.log('Math.acosh(1)=');
console.log(Math.acosh(1)); // обратный гиперболический косинус

console.log('Math.atanh(0)=');
console.log(Math.atanh(0)); // обратный гиперболический тангенс

console.log('Math.hypot(2, 2, 1 )=');
console.log(Math.hypot(2, 2, 1 )); // Теорема Пифагора
}


o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Алгебраические операции")
{
console.log(Math.log2(16)); // логарифм по основанию 2
console.log(Math.log10(1000)); // логарифм по основанию 10
console.log(Math.log1p(99)); // то же, что и log(l + value)
console.log(Math.expm1(100)); // функция, обратная Math.loglp()
console.log(Math.cbrt(8)); // корень кубический	
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Функция Math.imul(number1, number2)")
// Функция Math.imui о принимает два 32-битных целых числа,
// перемножает их и возвращает младшие 32 бита результата
// умножения. Это единственный встроенный способ умножения
// 32-битных целых чисел в JavaScript.
{
console.log(Math.imul(590, 5000000)); // умножение 32-битных целых
console.log(590 * 5000000); // умножение 64-битных вещественных
}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("	Функция Math.clz32(number)")
// Функция Math.ciz32() возвращает число ведущих нулевых бит
// в 32-битном представлении числа
{
console.log(Math.clz32 (7));
console.log(Math.clz32 (1000));
console.log(Math.clz32 (295000000));	
}


o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("")
{}

/*
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Хранить файлы в GridFS в приложении Meteor")
{
// Access GridStore API
var GridStore = MongoInternals.NpmModule.GridStore;

// Access default mongo database
var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;

// Writing data to GridFS
new GridStore(db, '/public/img/2002.jpg', 'w').open(Meteor.bindEnvironment(function(err, gridStore) {
    // Write string or buffer data to file
    //gridStore.write(data, true, function(err, doc) { ... });

    // Or write local FS file
    gridStore.writeFile('/public/img/2002.jpg', function(err, doc) {  });  //{ ... });
}));

// Reading file from the GridFS by filename
new GridStore(db, '/public/img/2002.jpg', 'r').open(Meteor.bindEnvironment(function(err, gridStore) {
    var stream = gridStore.stream();
    // .. do something with stream
}));
}
*/


o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  


console.log('='.repeat(Nrepeat-2) )
console.log('▓'.repeat(Nrepeat-2) )
console.log("The End.")
  }
  }); 

