import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditElementActionsComponent } from './create-or-edit-element-actions.component';

describe('CreateOrEditElementActionsComponent', () => {
  let component: CreateOrEditElementActionsComponent;
  let fixture: ComponentFixture<CreateOrEditElementActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditElementActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditElementActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
