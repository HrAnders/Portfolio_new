import { Component, Input, ViewChild } from '@angular/core';
import { OverlayService } from '../services/overlay/overlay.service';


@Component({
  selector: 'app-overlay-mobile',
  templateUrl: './overlay-mobile.component.html',
  styleUrls: ['./overlay-mobile.component.scss']
})
export class OverlayMobileComponent {
  overlayVisible = false;
  @ViewChild('overlayContainer') overlay: any;

  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    this.overlayService.overlayVisibility$.subscribe((visibility) => {
      this.overlayVisible = visibility;
    });
    
  }

  toggleOverlay() {
    this.overlayService.toggleOverlay();
    //console.log(this.overlay.nativeElement.classList);
    
  }

  
}


