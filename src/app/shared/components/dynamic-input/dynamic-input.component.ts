import { Component, Input, OnInit } from '@angular/core';
import { InputTypes } from '../../enums/input-types.enum';
import { InputModel } from '../../models/input-model';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css'],
})
export class DynamicInputComponent implements OnInit {
  inputTypes = InputTypes;
  @Input() input: InputModel;

  constructor() {}

  ngOnInit(): void {}

  isNumber(event: KeyboardEvent) {
    if (
      (event.keyCode < 48 || event.keyCode > 57) &&
      (event.keyCode < 96 || event.keyCode > 105)
    ) {
      return false;
    }

    return true;
  }
}
