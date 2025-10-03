import { Component } from '@angular/core';
import { LoaderService } from '../../../core/services/loader/loader-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [
    AsyncPipe
  ],
  templateUrl: './loader.html',
  styleUrl: './loader.scss'
})
export class Loader {
  isLoading;

  constructor(private loaderService: LoaderService) {
    this.isLoading = this.loaderService.loader$;

  }

}
