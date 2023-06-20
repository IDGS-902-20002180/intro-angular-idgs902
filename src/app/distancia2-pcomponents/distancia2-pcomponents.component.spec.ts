import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distancia2PComponentsComponent } from './distancia2-pcomponents.component';

describe('Distancia2PComponentsComponent', () => {
  let component: Distancia2PComponentsComponent;
  let fixture: ComponentFixture<Distancia2PComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Distancia2PComponentsComponent]
    });
    fixture = TestBed.createComponent(Distancia2PComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
