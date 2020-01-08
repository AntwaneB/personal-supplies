import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TargetStockPage } from './target-stock.page';

describe('TargetStockPage', () => {
  let component: TargetStockPage;
  let fixture: ComponentFixture<TargetStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TargetStockPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TargetStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
