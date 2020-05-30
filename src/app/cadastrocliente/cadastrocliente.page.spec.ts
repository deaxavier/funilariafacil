import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroclientePage } from './cadastrocliente.page';

describe('CadastroclientePage', () => {
  let component: CadastroclientePage;
  let fixture: ComponentFixture<CadastroclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
