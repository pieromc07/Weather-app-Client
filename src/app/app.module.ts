import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

/** Component */
import { CoverPageComponent } from './components/cover-page/cover-page.component';
import { ContentComponent } from './components/content/content.component';
import { SearchComponent } from './components/search/search.component';

/**   Service */
import {WeatherService} from './services/weather.service';


@NgModule({
	declarations: [
		AppComponent,
		CoverPageComponent,
		ContentComponent,
		SearchComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule
	],
	providers: [
		WeatherService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
