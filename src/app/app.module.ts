import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/counter.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { HeroesModule, } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { StockModule } from './stock/stock.module';


@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // HeroComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    StockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
