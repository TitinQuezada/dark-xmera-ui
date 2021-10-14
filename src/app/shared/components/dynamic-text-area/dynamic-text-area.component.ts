import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputTypes } from '../../enums/input-types.enum';
import { InputModel } from '../../models/input-model';

@Component({
  selector: 'app-dynamic-text-area',
  templateUrl: './dynamic-text-area.component.html',
  styleUrls: ['./dynamic-text-area.component.css'],
})
export class DynamicTextAreaComponent implements OnInit {
  inputTypes = InputTypes;
  @Input() input: InputModel;
  @Input() parentFormGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
