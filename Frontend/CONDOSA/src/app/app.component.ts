import { Component } from '@angular/core';
import { Predio } from './models/predio';
import { PredioService } from './services/predio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CONDOSA';
  predioArray:Predio[] = [];
  constructor(private predioService:PredioService){}

  ngOnInit(): void {
    this.predioService.getPredios()
    .subscribe(data=>{
      console.log(data)
      this.predioArray = data.predios;
    },
    error=>console.log(error));
  }
}
