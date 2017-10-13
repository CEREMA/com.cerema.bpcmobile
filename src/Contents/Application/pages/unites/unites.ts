import { Component,ViewChild } from '@angular/core';
import { NavController,NavParams,LoadingController,ModalController                               } from 'ionic-angular';
import { List } from 'ionic-angular';

import { DB } from '@omneedia/app';

import { Subdis } from '../subdis/subdis';
import { Agents } from '../agents/agents';

@Component({
  templateUrl: 'unites.html'
})

export class Unites {
	@ViewChild(List) list: List;
	services = [];
	agents = [];
  	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,public modalCtrl : ModalController) {

		var me=this;
		let loader = loadingCtrl.create({
    		content: "Veuillez patienter..."
    	});
    	loader.present();
		DB.get('bpclight://subdis{Ksub,LibSub+,LibSubc}?Kuni='+navParams.data.id,function(r) {
			me.services = r.data;
		});	
		DB.get('bpclight://agents{Kage,Nom+,Prenom}?Actif=1&Kuni='+navParams.data.id,function(r) {
			loader.dismiss();
			me.agents=r.data;
		});
  	}
	loadAgent = function(kage,nom,prenom) {
		var data = {
			kage: kage,
			nom: nom,
			prenom: prenom
		};
		var modalPage = this.modalCtrl.create(Agents,data);
    	modalPage.present();
	}
	loadService = function(ksub,libsub) {
		var o={
			unite: this.navParams.data.name,
			subdi: libsub,
			ksub: ksub
		};
		this.navCtrl.push(Subdis,o);
	}

}