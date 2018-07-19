import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WalletPage } from '../wallet/wallet';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

wallet() {
	this.navCtrl.push(WalletPage);
}

}
