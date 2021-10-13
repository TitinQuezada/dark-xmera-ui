import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputTypes } from '../../enums/input-types.enum';
import { InputModel } from '../../models/input-model';

@Component({
  selector: 'app-create-or-edit-element-body',
  templateUrl: './create-or-edit-element-body.component.html',
  styleUrls: ['./create-or-edit-element-body.component.css'],
})
export class CreateOrEditElementBodyComponent implements OnInit {
  @Input() inputs: Array<InputModel>;
  @Input() parentFormGroup: FormGroup;
  inputTypes = InputTypes;

  constructor() {}

  ngOnInit(): void {}
}
