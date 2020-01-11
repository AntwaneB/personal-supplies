import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CurrentStockPage} from './current-stock.page';
import {StockService} from '../../../services/stock.service';
import {AddProductPageModule} from '../add-product/add-product.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		AddProductPageModule,
		RouterModule.forChild([{path: '', component: CurrentStockPage}])
	],
	declarations: [
		CurrentStockPage
	],
	providers: [
		StockService
	]
})
export class CurrentStockPageModule {
}
