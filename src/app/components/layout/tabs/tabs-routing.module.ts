import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
	{
		path: 'pages',
		component: TabsPage,
		children: [
			{
				path: 'current-stock',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('../../pages/current-stock/current-stock.module').then(m => m.CurrentStockPageModule)
					}
				]
			},
			{
				path: 'target-stock',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('../../pages/target-stock/target-stock.module').then(m => m.TargetStockPageModule)
					}
				]
			},
			{
				path: '',
				redirectTo: '/pages/current-stock',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/pages/current-stock',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
