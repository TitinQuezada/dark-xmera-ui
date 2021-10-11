import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditElementComponent } from './create-or-edit-element.component';

describe('CreateOrEditElementComponent', () => {
  let component: CreateOrEditElementComponent;
  let fixture: ComponentFixture<CreateOrEditElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
