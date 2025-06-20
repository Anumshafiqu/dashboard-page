import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPageComponent } from './overlay-page.component';

describe('OverlayPageComponent', () => {
  let component: OverlayPageComponent;
  let fixture: ComponentFixture<OverlayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
