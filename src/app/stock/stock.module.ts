import { NgModule } from '@angular/core';

import { ProductoComponent } from './components/producto/producto.component';
import { OtherPageComponent } from './pages/stock-main-page.component';

@NgModule({
  imports: [],
  declarations: [
    ProductoComponent,
    OtherPageComponent,
  ],
  exports: [
    OtherPageComponent,
  ],
})
export class StockModule { }
