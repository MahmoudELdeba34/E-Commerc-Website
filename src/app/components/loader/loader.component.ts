import { Component } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService:LoaderService) {
  }

}
