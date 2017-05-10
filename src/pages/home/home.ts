import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  steps = [
    {
      title: 'Resistance',
      goal: 'Weekly goal: 3 remaining',
      imageUrl: 'http://healthxtourism.com/wp-content/uploads/2012/01/Weight-Lifting-Exercises-For-Women-Best-Fitness-Equipments.jpg'
    },
    {
      title: 'Resistance',
      goal: 'Weekly goal: 3 remaining',
      imageUrl: 'http://notitotal.com/wp-content/uploads/2016/02/lunge.jpg'
    },
    {
      title: 'Resistance',
      goal: 'Weekly goal: 3 remaining',
      imageUrl: 'http://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/60-seconds-slimmer-body-700_3.jpg60-seconds-slimmer-body-700_3_0.jpg'
    },
  ]

  constructor(public navCtrl: NavController) {

  }

}
