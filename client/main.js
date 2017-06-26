// Client entry point, imports all client code


import '/imports/startup/client';
import '/imports/startup/both';


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Random } from 'meteor/random';

//import './main.html';

Template.pello.onCreated(function pelloOnCreated() {
	T=0
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.pello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.pello.events({
  'click button'(event, instance) {
	  T=T+1.001
    // increment the counter when button is clicked
	//instance.counter.set((instance.counter.get() + 1.001));
	instance.counter.set(T);
	
  },
});





Template.mello.onCreated(function melloOnCreated() {
	T=0
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.mello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.mello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
	T=T-1.001
    //instance.counter.set((instance.counter.get() - 1.001));
	instance.counter.set(T);
  },
});

Template.rndom.onCreated(function rndomOnCreated() {
	result=0;
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.rndom.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});



Template.rndom.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked

	Nrepeat=28	
//====================================================
	
  console.log('_'.repeat(Nrepeat) )
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
  alert( v ); 
  let rf=Random.fraction()
  //document.write(i + "]   " + result + ";" );
  //console.log(   i + "]   " + result + ";" );
  //console.log("   arr= " + arr + ";" );
  //console.log("   v= " + v + ";" );
  
//====================================================  
  
  console.log('_'.repeat(Nrepeat) )
  console.log("   Объявление переменных" )
  console.log("   (set и let)" );
  var a = 12; //доступна глобально
  function myFunction()
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
  
  myFunction();
  // console.log('c='+c) //Uncaught ReferenceError: c is not defined
  
//====================================================  
  
  console.log('_'.repeat(Nrepeat) )
  console.log("   Значения параметров по умолчанию" ) 
  
	function myFunction(х = 1 , у = 2, z = 3)
	{console.log(х, у, z ) ; // Выведет "6 7 3"
	}
	myFunction(6,7);
  
  
  
  
//====================================================   
  console.log('_'.repeat(Nrepeat) )  
  } 
});