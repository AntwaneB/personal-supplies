import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
	{
		path: 'pages',
		component: AppComponent,
		children: [
			{
				path: 'current-stock',
				children: [
					{
						path: '',
						loadChildren: () =>
							import('./components/pages/current-stock/current-stock.module').then(m => m.CurrentStockPageModule)
					}
				]
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
	imports: [
		RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
