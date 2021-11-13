import { InputTypes } from '../enums/input-types.enum';
import { InputBaseModel } from './input-base-model';
import { Option } from '../interfaces/option.interface';

export class InputSelectModel extends InputBaseModel {
  options?: Array<Option>;
  optionsUrl: string;
  isMultiple?: boolean;
  isFilterable?: boolean;
  dependencyId?: string;

  constructor(props: InputSelectModel) {
    super(props);

    this.type = InputTypes.Select;
    this.optionsUrl = props.optionsUrl;
    this.isMultiple = props.isMultiple;
    this.isFilterable = props.isFilterable == null ? true : props.isFilterable;
    this.dependencyId = props.dependencyId;
  }
}
