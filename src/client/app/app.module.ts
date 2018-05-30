import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContentViewModule } from './views/content-view/content-view.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientHttpInterceptor } from './classes/client-http-interceptor.class';
import { AuthService } from './services/auth.service';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    ContentViewModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClientHttpInterceptor,
      multi: true
    },
    AuthService,
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
