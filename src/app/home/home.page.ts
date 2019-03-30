import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    let animationInterval = setInterval(function () {
      console.log(2*Math.cos(performance.now() + (Math.PI/2))+1)
      
      }, 1000);
    
  }
}
