import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOperatioButtonsComponent } from './table-operation-buttons.component';

describe('TableOperatioButtonsComponent', () => {
  let component: TableOperatioButtonsComponent;
  let fixture: ComponentFixture<TableOperatioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableOperatioButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOperatioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
