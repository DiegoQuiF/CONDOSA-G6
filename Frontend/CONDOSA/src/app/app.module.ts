import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredioService } from './services/predio.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FuncionesPrincipalesComponent } from './funciones-principales/funciones-principales.component';

@NgModule({
  declarations: [	
    AppComponent,
      FuncionesPrincipalesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PredioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
