import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddProductPage} from '../../pages/add-product/add-product.page';

@Component({
	selector: 'app-tabs',
	templateUrl: 'tabs.page.html',
	styleUrls: ['tabs.page.scss']
})
export class TabsPage {

	constructor(private modalController: ModalController) {
	}

	public async addProduct() {
		const modal = await this.modalController.create({
			component: AddProductPage,
			cssClass: 'auto-height bottom'
		});
		return await modal.present();
	}

}
