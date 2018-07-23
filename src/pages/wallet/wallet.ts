import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html'
})
export class WalletPage {

checkBoxOpen: boolean;
checkBoxResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {

  
  }
  doCheck(){
  let alert = this.alertCtrl.create();
  alert.setTitle('Which account do you want to use ?');

  alert.addInput({
  type: 'radio',
  label: 'MTN MoMo',
  value: 'MTN MoMo',
  check: true
  });

alert.addInput({
  type: 'radio',
  label: 'Tigo Cach',
  value: 'Tigo Cach'
  });

alert.addInput({
  type: 'radio',
  label: 'Tigo Cach',
  value: 'Tigo Cach'
  });

  alert.addButton('Cancel');

  alert.addButton({
  text:'Okay',
  handler: data => {
   this.checkBoxOpen = false;
   this.checkBoxResult = data;
  }
  });

  alert.present().then(() => {
  this.checkBoxOpen = true;
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

}
