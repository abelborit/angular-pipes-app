import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipePageComponent } from './custom-pipe-page.component';

describe('CustomPipePageComponent', () => {
  let component: CustomPipePageComponent;
  let fixture: ComponentFixture<CustomPipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPipePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
