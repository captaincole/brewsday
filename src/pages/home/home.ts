import { AlertController } from 'ionic-angular/umd';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public beerListRef;
  public beerList;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private afs: AngularFirestore) {
                this.beerListRef = this.afs.collection('beers');
  }

  ngOnInit() {
    this.beerList = this.beerListRef.valueChanges();
  }

  joinBrewsday() {
    const brewsdayAlert = this.alertCtrl.create( {
      title: 'Enter Code',
      inputs: [{
        name: 'brewdaycode',
        type: 'string'
      }],
      buttons: [{
        
      }]
    })
  }

}
