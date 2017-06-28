// Client entry point, imports all client code


import '/imports/startup/client';
import '/imports/startup/both';


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';



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

Template.tryES6.onCreated(function tryES6OnCreated() {
	result=0;
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.tryES6.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});


import './test01.js';


