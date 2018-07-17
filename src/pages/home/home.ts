import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { NavController, Platform, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   /*@ViewChild('map') mapElement: ElementRef;
    @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
 
    latitude: number;
    longitude: number;
    autocompleteService: any;
    placesService: any;
    query: string = '';
    places: any = [];
    searchDisabled: boolean;
    saveDisabled: boolean;
    location: any; 
 
    constructor(public navCtrl: NavController, public zone: NgZone, public maps: GoogleMapsProvider, public platform: Platform, public geolocation: Geolocation, public viewCtrl: ViewController) {
        this.searchDisabled = true;
        this.saveDisabled = true;
    }
 
    ionViewDidLoad(): void {
 
        let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {
 
            this.autocompleteService = new google.maps.places.AutocompleteService();
            this.placesService = new google.maps.places.PlacesService(this.maps.map);
            this.searchDisabled = false;
 
        });
 
    }
 
    selectPlace(place){
 
        this.places = [];
 
        let location = {
            lat: null,
            lng: null,
            name: place.name
        };
 
        this.placesService.getDetails({placeId: place.place_id}, (details) => {
 
            this.zone.run(() => {
 
                location.name = details.name;
                location.lat = details.geometry.location.lat();
                location.lng = details.geometry.location.lng();
                this.saveDisabled = false;
 
                this.maps.map.setCenter({lat: location.lat, lng: location.lng});
 
                this.location = location;
 
            });
 
        });
 
    }
 
    searchPlace(){
 
        this.saveDisabled = true;
 
        if(this.query.length > 0 && !this.searchDisabled) {
 
            let config = {
                types: ['geocode'],
                input: this.query
            }
 
            this.autocompleteService.getPlacePredictions(config, (predictions, status) => {
 
                if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
 
                    this.places = [];
 
                    predictions.forEach((prediction) => {
                        this.places.push(prediction);
                    });
                }
 
            });
 
        } else {
            this.places = [];
        }
 
    }
 
    save(){
        this.viewCtrl.dismiss(this.location);
    }
 
    close(){
        this.viewCtrl.dismiss();
    }  
 */

}
