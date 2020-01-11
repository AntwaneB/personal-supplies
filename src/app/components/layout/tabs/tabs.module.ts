import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs-routing.module';

import {TabsPage} from './tabs.page';
import {AddProductPageModule} from '../../pages/add-product/add-product.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		TabsPageRoutingModule,
		AddProductPageModule
	],
	declarations: [
		TabsPage
	]
})
export class TabsPageModule {
}
