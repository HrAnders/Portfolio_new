import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayService } from './services/overlay/overlay.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  overlayVisible = false;
  @ViewChild('overlayComponent') overlay: any;


  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    this.overlayService.overlayVisibility$.subscribe((visibility) => {
      this.overlayVisible = visibility;
    });
  }
}
