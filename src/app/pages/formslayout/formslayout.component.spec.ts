import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormslayoutComponent } from './formslayout.component';

describe('FormslayoutComponent', () => {
  let component: FormslayoutComponent;
  let fixture: ComponentFixture<FormslayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormslayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
