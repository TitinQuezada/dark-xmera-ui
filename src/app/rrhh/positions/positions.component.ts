import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableOperationButton } from 'src/app/shared/interfaces/table-operation-button.interface';
import { InputSelectModel } from 'src/app/shared/models/input-select-model';
import { InputModel } from 'src/app/shared/models/input-model';
import { TableHeader } from 'src/app/shared/interfaces/table-header.interface';
import { FormatTypes } from 'src/app/shared/enums/format-types.enum';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css'],
})
export class PositionsComponent implements OnInit {
  route: string = 'positions';

  constructor() {}

  ngOnInit(): void {}

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

  buildHeaders(): Array<TableHeader> {
    return [
      { name: 'name', view: { table: true, detail: true } },
      {
        name: 'createdDate',
        view: { table: false, detail: true },
        format: FormatTypes.Date,
      },
      {
        name: 'updatedDate',
        view: { table: false, detail: true },
        format: FormatTypes.Date,
      },
    ];
  }
}
