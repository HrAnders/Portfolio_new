import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OverlayMobileComponent } from '../overlay-mobile/overlay-mobile.component';
import { BehaviorSubject, Subscription } from 'rxjs';
import { OverlayService } from '../services/overlay/overlay.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent {
  overlayVisible!: boolean;
  private overlaySubscription: Subscription;

  constructor(private overlayService: OverlayService) {
    this.overlaySubscription = this.overlayService.overlayVisible.subscribe(
      (value) => {
        this.overlayVisible = value;
      }
    );
  }

  toggleOverlay() {
    this.overlayService.toggleOverlay();
  }

  ngOnDestroy() {
    this.overlaySubscription.unsubscribe();
  }
}
