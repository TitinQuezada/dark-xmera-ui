import { InputTypes } from '../enums/input-types.enum';
import { InputModel } from './input-model';

export class InputTextAreaModel extends InputModel {
  placeholderKey: string;

  constructor(props: InputTextAreaModel) {
    super(props);

    this.type = InputTypes.TextArea;
    this.placeholderKey = props.placeholderKey;
  }
}
