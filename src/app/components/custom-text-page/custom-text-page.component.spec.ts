import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTextPageComponent } from './custom-text-page.component';

describe('CustomTextPageComponent', () => {
  let component: CustomTextPageComponent;
  let fixture: ComponentFixture<CustomTextPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTextPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
