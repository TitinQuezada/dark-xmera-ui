import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditElementBodyComponent } from './create-or-edit-element-body.component';

describe('CreateOrEditElementBodyComponent', () => {
  let component: CreateOrEditElementBodyComponent;
  let fixture: ComponentFixture<CreateOrEditElementBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditElementBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditElementBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
