import { Component, OnInit } from '@angular/core';
import { FormatTypes } from 'src/app/shared/enums/format-types.enum';
import { TableHeader } from 'src/app/shared/interfaces/table-header.interface';
import { InputModel } from 'src/app/shared/models/input-model';
import { InputSelectModel } from 'src/app/shared/models/input-select-model';
import { InputTextAreaModel } from 'src/app/shared/models/text-area-model';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit {
  route: string = 'security/roles';

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
      new InputTextAreaModel({
        id: 'description',
        labelKey: 'description',
        placeholderKey: 'description',
        columns: 12,
      }),
      new InputSelectModel({
        id: 'modulesIds',
        labelKey: 'modules',
        optionsUrl: 'security/modules',
        columns: 6,
        isMultiple: true,
      }),
      new InputSelectModel({
        id: 'screensIds',
        labelKey: 'screens',
        optionsUrl: 'security/screens',
        columns: 6,
        isMultiple: true,
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
