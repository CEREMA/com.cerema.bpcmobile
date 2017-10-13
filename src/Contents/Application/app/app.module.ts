import { NgModule, ErrorHandler, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicPageModule, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Unites } from '../pages/unites/unites';
import { Subdis } from '../pages/subdis/subdis';
import { Details } from '../pages/details/details';
import { Agents } from '../pages/agents/agents';

import { StatusBar } from '@ionic-native/status-bar';

import { Globalization } from '@ionic-native/globalization';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

enableProdMode();

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
	Agents,
	Details,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
	Unites,
	Subdis,
    TabsPage
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
	IonicPageModule.forChild(HomePage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
	Agents,  
	Details,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
	Unites,
    Subdis,
	TabsPage
  ],
  providers: [
    StatusBar,
	Globalization,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})


export class AppModule {}
