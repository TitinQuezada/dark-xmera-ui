import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTextAreaComponent } from './dynamic-text-area.component';

describe('DynamicTextAreaComponent', () => {
  let component: DynamicTextAreaComponent;
  let fixture: ComponentFixture<DynamicTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTextAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
