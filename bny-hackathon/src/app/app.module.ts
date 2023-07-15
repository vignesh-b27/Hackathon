import { BrowserModule } from '@angular/platform-browser';  
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';  
import { AppComponent } from './app.component';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AgGridComponent } from './ag-grid/ag-grid.component';  
import { AgGridModule } from 'ag-grid-angular';  
  
@NgModule({  
  declarations: [  
    AppComponent,  
    AgGridComponent  
  ],  
  imports: [  
    BrowserModule,  
    BrowserAnimationsModule,  
    AgGridModule,  
    
  ],  
  providers: [],  
  bootstrap: [AppComponent]  ,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})  
export class AppModule { }