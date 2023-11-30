import { Component, ViewChild } from '@angular/core';
import { OverlayService } from '../services/overlay/overlay.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  overlayVisible = false;
  @ViewChild('overlayComponent') overlay: any;


  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    this.overlayService.overlayVisibility$.subscribe((visibility) => {
      this.overlayVisible = visibility;
    });

  }
}
