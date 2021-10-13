import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatPropertyComponent } from './format-property.component';

describe('FormatPropertyComponent', () => {
  let component: FormatPropertyComponent;
  let fixture: ComponentFixture<FormatPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
