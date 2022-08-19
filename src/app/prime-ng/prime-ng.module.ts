import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
