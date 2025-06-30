import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscpageComponent } from './miscpage.component';

describe('MiscpageComponent', () => {
  let component: MiscpageComponent;
  let fixture: ComponentFixture<MiscpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiscpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
