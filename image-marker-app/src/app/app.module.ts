import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagePanelComponent } from './image-panel/image-panel.component';
import { DrawingPanelComponent } from './drawing-panel/drawing-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagePanelComponent,
    DrawingPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
