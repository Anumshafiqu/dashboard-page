import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelpgaeComponent } from './panelpgae.component';

describe('PanelpgaeComponent', () => {
  let component: PanelpgaeComponent;
  let fixture: ComponentFixture<PanelpgaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelpgaeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelpgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
