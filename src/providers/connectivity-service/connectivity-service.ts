import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
 
declare var Connection;
 
@Injectable()
export class ConnectivityServiceProvider {
 
  onDevice: boolean;
 
  constructor(public platform: Platform, public network: Network){
    this.onDevice = this.platform.is('cordova');
  }
 
  isOnline(): boolean {
    if(this.onDevice && this.network.type){
      return this.network.type != 'none';
    } else {
      return navigator.onLine;
    }
  }
 
  isOffline(): boolean {
    if(this.onDevice && this.network.type){
      return this.network.type == 'none';
    } else {
      return !navigator.onLine;  
    }
  }
 
  watchOnline(): any {
    return this.network.onConnect();
  }
 
  watchOffline(): any {
    return this.network.onDisconnect();
  }
  
 
}