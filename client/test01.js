import { Random } from 'meteor/random';

Template.tryES6.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
	Nrepeat=28	
function o(){Nrepeat=28	;console.log('_'.repeat(Nrepeat))};

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Сумма N вещ случ чисел от -1 до +1" )
console.log("(N:  сл число от 1 до 1000)" );
	
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
o();
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 
 
console.log("Деструктуризация" )
console.log("и метод repeat" );
  
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

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Объявление переменных" )
console.log("(set и let)" );
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

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Значения параметров по умолчанию" ) 
  
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
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Оператор расширения" )
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
console.log("Определение значений массива как части другого массива")
	let arrayl = [2,3,4];
	let array2 = [1, ...arrayl, 5, 6, 7 ] ;
	console.log(array2); // Выведет "1, 2, 3, 4, 5, 6, 7"
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Копирование значений из одного массива в другой");
	let array3 = [2,3,4];
	let array4 = [1];
	array4.push(...array3);
	console.log(array4); // Выведет "1, 2, 3, 4"	
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  	
console.log("Расширение нескольких массивов");
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
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  	
console.log("Дополнительные, или необязательные параметры");
	{
	function myFunction(a, b, ...args)
		{console.log(args); // Выведет "3, 4, 5"
		}
	myFunction(1, 2, 3, 4, 5 ) ;
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  	
console.log("Деструктивное присваивание массивов ");
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
	o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  	
console.log("Игнорирование значений");
	{	
	let [а, , b] = [1, 2, 3 ] ;
	console.log(а)
	console.log(b)
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  	
console.log("Использование деструктивного присваивания массива");
	{
	let [a, ...b] = [1, 2, 3, 4, 5, 6] ;
	console.log(a);
	console.log(Array.isArray(b));
	console.log(b);	
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  		
console.log("Игнорирование значений c помощью оператора дополнения");
	{
	let [a, , ,...b] = [1, 2, 3, 4, 5, 6] ;
	console.log(a);   // 1
	console.log(b);   // 4 ,5, 6	
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  		
console.log("Значения по умолчанию для переменных");
	{
	let [a, b, c = 3] = [1, 2] ;
	console.log(a,b,c); // Выведет "1,2,3"
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  		
console.log("Деструктивное присваивание вложенных массивов");
	{
	let [a, b, [c, d] ] = [1, 2, [3, 4]]; 
	console.log(a, b, [c, d]); // Выведет 1,2,[3,4]
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  		
console.log("Использование деструктивного присваивания в качестве параметра функции");
	{
	function myFunction([a, b, с = 3])
	{
	console.log(a, b, с ) ; // Выведет "1 2 3"
	}
	myFunction([1, 2 ] ) ;
	}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   
console.log("В качестве значения по умолчанию можно указать массив, который будет использован, если аргумент получит значение undefined")
{
	function myFunction([a, b, с = 3] = [1, 2, 3])
	{
	console.log(a, b, с ) ; // Выведет "1 2 3"
	}
	myFunction (undefined) ;
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   
console.log("Деструктивное присваивание объектов для выделения и присваивания их свойств переменным")
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
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Значения по умолчанию для переменных")
{
let {a, b, c = 3} = {a: "1", b: "2"};
console.log(a); // Выведет "1"
console.log(b); // Выведет "2"
console.log(c); // Выведет "3"
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Вычисляемые имена свойств в деструктивном присваивании")
{
let { [ "first" + "Name" ] : х} = { firstName: "Eden" };
console.log(х); // Выведет "Eden"
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Деструктивное присваивание вложенных объектов")
{
var {name, otherlnfo: {age}} = {name: "Eden", otherlnfo: {age: 23}};
console.log(name, age); //Выведет  Eden 23
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Использование деструктивного присваивания объекта как параметра")
{
	function myFunction({name = 'Eden', age = 23, profession = "Designer"} = {})
{
console.log(name, age, profession); // Выведет "John 23 Designer"
}
myFunction({name: "John", age: 23});
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("Стрелочные функции")
console.log("создание стрелочной функции")
{
let circleArea = (pi, г) => {
	let area = pi * г * г;
	return area;
}
let result = circleArea(3.14, 3) ;
console.log(result); // Выведет "28.26"
}
o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log("")
{

}

o();//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  
console.log('='.repeat(Nrepeat) )

  }
  }); 
  