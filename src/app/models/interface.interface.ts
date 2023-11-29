import * as types from '../../../../server/src/types'

export default  types

export interface SelectOption {
  id: number;
  name: string;
  checked?: boolean
}

export interface Field {
  name: string;
  type: string;
  options?: SelectOption[];
}

export interface FieldConfig {
  [key: string]: Field[];
}

export interface SelectControl {
  items: SelectOption[];
  selectedValue: string | null;
}

// Nueva interfaz para representar un control de lista de verificación
export interface CheckboxListControl {
  items: SelectOption[];
  selectedIds: number[];
}
