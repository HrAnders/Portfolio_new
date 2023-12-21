import { Component, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(): void {
    AOS.init({
      duration: 250,
      once: true,
    })
  }

  ngafterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 250);
  }

  
}
