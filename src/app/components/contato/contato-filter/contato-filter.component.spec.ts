import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoFilterComponent } from './contato-filter.component';

describe('ContatoFilterComponent', () => {
  let component: ContatoFilterComponent;
  let fixture: ComponentFixture<ContatoFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatoFilterComponent]
    });
    fixture = TestBed.createComponent(ContatoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
