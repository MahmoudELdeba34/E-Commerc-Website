import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {


  
  isLoading = new Subject<boolean>();

  constructor() {
  }

  show() {
    console.log('showw');
    
     this.isLoading.next(true);
  }

  hide() {
    console.log('hide');
    
     this.isLoading.next(false);
  }
}
