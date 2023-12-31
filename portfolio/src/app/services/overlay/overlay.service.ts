import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  public overlayVisible = new BehaviorSubject<boolean>(false);
  overlayVisibility$ = this.overlayVisible.asObservable();

  toggleOverlay() {
    this.overlayVisible.next(!this.overlayVisible.value);    
  }
}