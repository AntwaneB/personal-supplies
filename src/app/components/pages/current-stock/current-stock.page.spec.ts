import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentStockPage } from './current-stock.page';

describe('CurrentStockPage', () => {
  let component: CurrentStockPage;
  let fixture: ComponentFixture<CurrentStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentStockPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
