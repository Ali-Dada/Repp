import { Random } from 'meteor/random';

Template.tryES6.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked

	Nrepeat=28	
//====================================================
	
  console.log('='.repeat(Nrepeat) )
  console.log("   Сумма N вещ случ чисел от -1 до +1" )
  console.log("   (N:  сл число от 1 до 1000)" );
	
	function sg(x)
{   if (x >= 0.5)
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
 
 //==================================================
   
  console.log('_'.repeat(Nrepeat) )
  console.log("   деструктуризация" )
  console.log("   и метод repeat" );
  
  let arr = [" hello!", 5]; // let
  let [str, times] = arr; // деструктуризация
  v=str.repeat(times);//  метод repeat
  console.log("v=str.repeat(times)=" + v + ";" )
  alert( v ); 
  let rf=Random.fraction()
  //document.write(i + "]   " + result + ";" );
  //console.log(   i + "]   " + result + ";" );
  //console.log("   arr= " + arr + ";" );
  
//====================================================  
  
  console.log('_'.repeat(Nrepeat) )
  console.log("   Объявление переменных" )
  console.log("   (set и let)" );
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
  
//====================================================  
  
  console.log('_'.repeat(Nrepeat) )
  console.log("   Значения параметров по умолчанию" ) 
  
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
  console.log('_'.repeat(Nrepeat) )
  
//====================================================  
//Оператор расширения записывается как «...».
// разбивает итерируемые объекты на отдельные значения.
{
	console.log("   Оператор расширения" )
	function myFunction5(x, y)
	{
	return x + y;
	}
	let dta = [1, 4 ] ;
	let res = myFunction5(...dta);
	console.log(res); // Выведет "5"
}
	console.log('_'.repeat(Nrepeat) ) 

//====================================================  
//Определение значений массива как части другого
//массива
	console.log("   Определение значений массива как части другого массива")
	let arrayl = [2,3,4];
	let array2 = [1, ...arrayl, 5, 6, 7 ] ;
	console.log(array2); // Выведет "1, 2, 3, 4, 5, 6, 7"

    console.log('_'.repeat(Nrepeat) )
	
//====================================================  
// Копирование значений из одного массива в другой

	console.log("   Копирование значений из одного массива в другой");
	let array3 = [2,3,4];
	let array4 = [1];
	array4.push(...array3);
	console.log(array4); // Выведет "1, 2, 3, 4"	
	
	console.log('_'.repeat(Nrepeat)) 	

//====================================================  	
// Расширение нескольких массивов	
	console.log("   Расширение нескольких массивов");
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
	console.log('_'.repeat(Nrepeat))

//====================================================  	
// Дополнительные, или необязательные параметры
	console.log("   Дополнительные, или необязательные параметры");
	{
	function myFunction(a, b, ...args)
		{console.log(args); // Выведет "3, 4, 5"
		}
	myFunction(1, 2, 3, 4, 5 ) ;
	}
	
	console.log('_'.repeat(Nrepeat))
	
//====================================================  	
// Деструктивное присваивание массивов 
	console.log("   Деструктивное присваивание массивов ");
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
	console.log('_'.repeat(Nrepeat))
	
//====================================================  	
// Иигнорировать некоторые значения в
// итерируемом объекте
	console.log("   Игнорирование значений");
	{	
	let [а, , b] = [1, 2, 3 ] ;
	console.log(а)
	console.log(b)
	}
	console.log('_'.repeat(Nrepeat))

//====================================================  	
// Использование оператора расширения
// в деструктивном присваивании массивов
	console.log("   Использование деструктивного присваивания массива");
	{
	let [a, ...b] = [1, 2, 3, 4, 5, 6] ;
	console.log(a);
	console.log(Array.isArray(b));
	console.log(b);	
	}
	console.log('_'.repeat(Nrepeat))
	
//====================================================  		
// С помощью оператора дополнения можно
// проигнорировать значения. 
	console.log("   Игнорирование значений c помощью оператора дополнения");
	{
	let [a, , ,...b] = [1, 2, 3, 4, 5, 6] ;
	console.log(a);   // 1
	console.log(b);   // 4 ,5, 6	
	}
	
	console.log('_'.repeat(Nrepeat))	
//====================================================   
	console.log('='.repeat(Nrepeat) )  
  }
  }); 