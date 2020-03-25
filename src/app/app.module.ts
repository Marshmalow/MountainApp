import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from './_modal';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestService } from './rest.service';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {  } from 'bootstrap'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        routingComponents
    ],
    providers: [RestService],
    bootstrap: [AppComponent]
})

export class AppModule { }