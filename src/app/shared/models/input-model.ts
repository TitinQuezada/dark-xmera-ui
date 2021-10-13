import { InputTypes } from '../enums/input-types.enum';
import { InputBaseModel } from './input-base-model';

export class InputModel extends InputBaseModel {
  placeholderKey: string;

  constructor(props: InputModel) {
    super(props);

    this.type = InputTypes.Text;
    this.placeholderKey = props.placeholderKey;
  }
}
