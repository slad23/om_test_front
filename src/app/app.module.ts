import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './store/reducers';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from './shared/shared.module';
import { SpinnerInterceptor } from './core/interceptor/spinner.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,  
    HttpClientModule,
    SharedModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
