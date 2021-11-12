import { InputTypes } from '../enums/input-types.enum';
import { InputBaseModel } from './input-base-model';
import { Option } from '../interfaces/option.interface';

export class InputSelectModel extends InputBaseModel {
  options?: Array<Option>;
  optionsUrl: string;
  isMultiple?: boolean;

  constructor(props: InputSelectModel) {
    super(props);

    this.type = InputTypes.Select;
    this.optionsUrl = props.optionsUrl;
    this.isMultiple = props.isMultiple;
  }
}
