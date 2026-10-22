import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcesoDetalle } from './proceso-detalle';

describe('ProcesoDetalle', () => {
  let component: ProcesoDetalle;
  let fixture: ComponentFixture<ProcesoDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesoDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcesoDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
