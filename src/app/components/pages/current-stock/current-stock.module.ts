import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CurrentStockPage} from './current-stock.page';
import {CurrentStockService} from '../../../services/current-stock.service';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{path: '', component: CurrentStockPage}])
	],
	declarations: [
		CurrentStockPage
	],
	providers: [
		CurrentStockService
	]
})
export class CurrentStockPageModule {
}
