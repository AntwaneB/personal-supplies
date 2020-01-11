import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product.model';
import {ProductStock} from '../../../models/product-stock.model';
import {ModalController} from '@ionic/angular';
import {Stock} from '../../../models/stock.model';
import {CurrentProductStock} from '../../../models/current-product-stock.model';
import {StockService} from '../../../services/stock.service';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.page.html',
	styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

	public loading: boolean;
	public success: boolean;
	public product: ProductStock;

	constructor(
		private modalController: ModalController,
		private stockService: StockService
	) {
		this.product = new ProductStock();
		this.product.product = new Product();
		this.product.targetStock = 1;
	}

	ngOnInit() {
		this.loading = false;
		this.success = null;
	}

	public addProduct() {
		this.loading = true;

		this.stockService.get().subscribe(stock => {
			stock = new Stock<CurrentProductStock>(CurrentProductStock, stock);
			stock.products.push(new CurrentProductStock(this.product as CurrentProductStock));

			this.stockService.store(stock).subscribe(stock => {
				this.loading = false;
				this.success = true;

				setTimeout(() => {
					this.modalController.dismiss();
				}, 1000);
			});
		});

	}

}
