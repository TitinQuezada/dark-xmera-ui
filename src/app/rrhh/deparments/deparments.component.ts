import { Component, OnInit } from '@angular/core';
import { FormatTypes } from 'src/app/shared/enums/format-types.enum';
import { TableHeader } from 'src/app/shared/interfaces/table-header.interface';
import { InputModel } from 'src/app/shared/models/input-model';
import { InputTextAreaModel } from 'src/app/shared/models/text-area-model';

@Component({
  selector: 'app-deparments',
  templateUrl: './deparments.component.html',
  styleUrls: ['./deparments.component.css'],
})
export class DeparmentsComponent implements OnInit {
  route: string = 'rrhh/deparments';

  constructor() {}

  ngOnInit(): void {}

  buildHeaders(): Array<TableHeader> {
    return [
      { name: 'name', view: { table: true, detail: true } },
      { name: 'description', view: { table: true, detail: true } },
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

  buildFormInputs() {
    return [
      new InputModel({
        id: 'name',
        labelKey: 'name',
        placeholderKey: 'name',
        columns: 12,
      }),
      new InputTextAreaModel({
        id: 'description',
        labelKey: 'description',
        placeholderKey: 'description',
        columns: 12,
      }),
    ];
  }
}
