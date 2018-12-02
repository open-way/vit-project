import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './facebook.component';

@NgModule({
    imports: [
        CommonModule,
        FacebookRoutingModule
    ],
    declarations: [
        FacebookComponent,
    ]
})
export class FacebookModule { }