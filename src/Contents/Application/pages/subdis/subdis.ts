import { Component,ViewChild } from '@angular/core';
import { NavController,NavParams,LoadingController,ModalController } from 'ionic-angular';
import { List } from 'ionic-angular';

import { DB } from '@omneedia/app';

import { Agents } from '../agents/agents';

@Component({
  templateUrl: 'subdis.html'
})

export class Subdis {
	agents = [];
	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,public modalCtrl : ModalController) {
		var me = this;
		let loader = loadingCtrl.create({
    		content: "Veuillez patienter..."
    	});
    	loader.present();		
		DB.get('bpclight://agents{Kage,Nom+,Prenom}?Actif=1&Ksub='+navParams.data.ksub,function(r) {
			loader.dismiss();
			me.agents=r.data;
		});
	}
	loadAgent = function(kage) {
		var data = {
			kage: kage
		};
		var modalPage = this.modalCtrl.create(Agents,data);
    	modalPage.present();
	}
}
