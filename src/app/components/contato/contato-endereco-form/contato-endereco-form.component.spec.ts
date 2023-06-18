import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoEnderecoFormComponent } from './contato-endereco-form.component';

describe('ContatoEnderecoFormComponent', () => {
  let component: ContatoEnderecoFormComponent;
  let fixture: ComponentFixture<ContatoEnderecoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatoEnderecoFormComponent]
    });
    fixture = TestBed.createComponent(ContatoEnderecoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
