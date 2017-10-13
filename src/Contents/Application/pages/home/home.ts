import { Component,ViewChild } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

import { App,DB } from '@omneedia/app';

import { Unites } from '../unites/unites';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	
	contacts = [];
	groupedContacts = [];
	etablissements = [];
	
	constructor(public navCtrl: NavController,loadingCtrl: LoadingController) {

		var me=this;
		let loader = loadingCtrl.create({
      		content: "Veuillez patienter..."
    	});
    	loader.present();
		DB.get('bpclight://etablissements?archive=0',function(r) {
			for (var i=0;i<r.data.length;i++) me.etablissements[r.data[i].Kets]=r.data[i].LibEts;
			DB.get('bpclight://unites{Kets,Kuni,LibUnic+}?archive=0',function(r) {
				loader.dismiss();
				for (var i=0;i<r.data.length;i++) me.contacts.push(r.data[i].LibUnic);
				me.groupContacts(r.data);
			});
		});
    };
	Blur = function() {
		App.blur();
		setTimeout(function() {
			App.unblur();
		},5000);
	};
	groupContacts(contacts){
		var group={};
		for (var i=0;i<contacts.length;i++) {
			if (!group[contacts[i].Kets]) group[contacts[i].Kets]={
				letter: this.etablissements[contacts[i].Kets],
				contacts: []
			};
			group[contacts[i].Kets].contacts.push({
				id: contacts[i].Kuni,
				name: contacts[i].LibUnic
			});
		};
		for (var el in group) this.groupedContacts.push(group[el]);
    };	
	logEvent = function(o) {
		this.navCtrl.push(Unites,o);
	}
}