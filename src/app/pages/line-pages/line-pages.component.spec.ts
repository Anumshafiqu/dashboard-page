import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePagesComponent } from './line-pages.component';

describe('LinePagesComponent', () => {
  let component: LinePagesComponent;
  let fixture: ComponentFixture<LinePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinePagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
