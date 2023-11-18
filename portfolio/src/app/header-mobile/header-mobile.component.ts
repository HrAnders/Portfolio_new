import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OverlayMobileComponent } from '../overlay-mobile/overlay-mobile.component';
import { BehaviorSubject } from 'rxjs';
import { OverlayService } from '../services/overlay/overlay.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  constructor(private overlayService: OverlayService) {}

  toggleOverlay() {
    this.overlayService.toggleOverlay();
  }
}
