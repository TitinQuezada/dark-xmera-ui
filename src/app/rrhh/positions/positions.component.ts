import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableOperationButton } from 'src/app/shared/interfaces/table-operation-button.interface';
import { InputSelectModel } from 'src/app/shared/models/input-select-model';
import { InputModel } from 'src/app/shared/models/input-model';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css'],
})
export class PositionsComponent implements OnInit {
  dataUrl: string = 'positions';
  noDisplayedColumns: Array<string>;
  route: string = 'positions';

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    this.buildNoDisplayedColumns();
  }

  viewPositionDetails(element): void {
    console.log(element);
  }

  buildNoDisplayedColumns() {
    this.noDisplayedColumns = ['deparmentId'];
  }

  buildFormInputs() {
    return [
      new InputModel({
        id: 'name',
        labelKey: 'name',
        placeholderKey: 'name',
        columns: 12,
      }),
      new InputSelectModel({
        id: 'deparmentId',
        labelKey: 'deparment',
        optionsUrl: 'deparments',
        columns: 12,
      }),
    ];
  }
}
