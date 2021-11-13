import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputTypes } from '../../enums/input-types.enum';
import { environment } from 'src/environments/environment';
import { ApiGatewayHttpClientService } from '../../http-client/api-gateway-http-client.service';
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
  title: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { inputs: Array<InputBaseModel>; element: any; route: string },
    private dialogRef: MatDialogRef<CreateOrEditElementComponent>,
    private readonly httpClientService: ApiGatewayHttpClientService
  ) {}

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
    this.setTitle();
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.data.element?.id &&
      this.formGroup.addControl('id', new FormControl(this.data.element.id));

    this.data.inputs.forEach((input) => {
      const defaultValue = this.getDefaultValue(input.type);

      this.formGroup.addControl(
        input.id,
        this.data.element
          ? new FormControl(this.data.element[input.id])
          : new FormControl(defaultValue)
      );

      this.disableDependencyInput(input);
    });
  }

  getDefaultValue(inputType: string) {
    switch (inputType) {
      case InputTypes.Text:
        return '';
      case InputTypes.TextArea:
        return '';
      case InputTypes.Number:
        return 0;
      case InputTypes.Select:
        return [];
      default:
        return '';
    }
  }

  disableDependencyInput(input: InputBaseModel) {
    switch (input.type) {
      case InputTypes.Select:
        this.formGroup.get(input.id).disable();
        break;

      default:
        break;
    }
  }

  setTitle() {
    if (this.data.element?.id) {
      this.title = 'edit';
    } else {
      this.title = 'add';
    }
  }

  async saveElement() {
    if (this.data.element?.id) {
      await this.editElement();
    } else {
      await this.createElement();
    }
  }

  async createElement() {
    const { success } = await this.httpClientService.post(
      this.data.route,
      this.formGroup.value
    );

    if (success) {
      this.dialogRef.close(true);
    }
  }

  async editElement() {
    const { success } = await this.httpClientService.put(
      this.data.route,
      this.data.element.id,
      this.formGroup.value
    );

    if (success) {
      this.dialogRef.close(true);
    }
  }
}
