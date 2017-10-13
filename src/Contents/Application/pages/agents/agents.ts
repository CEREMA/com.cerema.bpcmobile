import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-agents',
  templateUrl: 'agents.html'
})

export class Agents {

  	constructor(public navCtrl: NavController,public viewCtrl : ViewController, public navParams: NavParams) {

  	}
	public closeModal(){
    	this.viewCtrl.dismiss();
	}

}
