import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
// import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule, 
    FieldsetModule
    // MenuItem
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,    
  ]
})
export class PrimeNgModule { }
