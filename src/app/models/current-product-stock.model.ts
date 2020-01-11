import {StockStatus} from './stock-status.enum';
import {ProductStock} from './product-stock.model';

export class CurrentProductStock extends ProductStock {

	_currentStock: number;

	status: StockStatus;

	public constructor(other?: CurrentProductStock) {
		super(other);

		this.currentStock = other._currentStock || 0;
	}

	public get currentStock(): number {
		return this._currentStock;
	}

	public set currentStock(value: number) {
		this._currentStock = value;

		let ratio = this.currentStock / this.targetStock;
		if (ratio < 0.1) {
			this.status = StockStatus.CRITICAL;
		} else if (ratio < 0.34) {
			this.status = StockStatus.CRITICAL;
		} else if (ratio < 0.67) {
			this.status = StockStatus.MEDIUM;
		} else if (ratio < 1) {
			this.status = StockStatus.HIGH;
		} else {
			this.status = StockStatus.FULL;
		}
	}

}
