import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumericalPasswordInputComponent } from './numerical-password-input/numerical-password-input.component';
import { PasswordViewerComponent } from './numerical-password-input/password-viewer/password-viewer.component'
import { RandomizerNumericInputComponent } from './numerical-password-input/randomizer-numeric-input/randomizer-numeric-input.component';
//material design modules
import {MatGridListModule,MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule } from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NumericalPasswordInputComponent,
    PasswordViewerComponent,
    RandomizerNumericInputComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatGridListModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
