import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
    exports: [
        HeroComponent,
        ListComponent
    ],
    declarations: [
        HeroComponent,
        ListComponent
    ],
    imports: [
        CommonModule
        // BrowserModule
    ]
})

export class HeroesModule { }