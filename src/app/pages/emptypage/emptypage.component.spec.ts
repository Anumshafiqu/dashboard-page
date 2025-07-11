import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptypageComponent } from './emptypage.component';

describe('EmptypageComponent', () => {
  let component: EmptypageComponent;
  let fixture: ComponentFixture<EmptypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptypageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
