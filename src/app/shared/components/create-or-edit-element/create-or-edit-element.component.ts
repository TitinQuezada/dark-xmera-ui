import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputTypes } from '../../enums/input-types.enum';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../../http-client/http-client.service';
import { InputBaseModel } from '../../models/input-base-model';

@Component({
  selector: 'app-create-or-edit-element',
  templateUrl: './create-or-edit-element.component.html',
  styleUrls: ['./create-or-edit-element.component.css'],
})
export class CreateOrEditElementComponent implements OnInit {
  environment = environment;
  inputTypes = InputTypes;
  formGroup = new FormGroup({});

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { inputs: Array<InputBaseModel>; element: any; route: string },
    private dialogRef: MatDialogRef<CreateOrEditElementComponent>,
    private readonly httpClientService: HttpClientService
  ) {}

  ngOnInit(): void {
    this.dialogRef.disableClose = true;

    this.data.inputs.forEach((input) => {
      this.formGroup.addControl(
        input.id,
        this.data.element
          ? new FormControl(this.data.element[input.id])
          : new FormControl('')
      );
    });
  }

  async saveElement() {
    const { success } = await this.httpClientService.post(
      this.data.route,
      this.formGroup.value
    );

    if (success) {
      this.dialogRef.close(true);
    }
  }
}
