import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingPanelComponent } from './drawing-panel.component';

describe('DrawingPanelComponent', () => {
  let component: DrawingPanelComponent;
  let fixture: ComponentFixture<DrawingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
