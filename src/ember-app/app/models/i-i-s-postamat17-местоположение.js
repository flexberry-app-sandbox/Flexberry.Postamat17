import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МестоположениеMixin
} from '../mixins/regenerated/models/i-i-s-postamat17-местоположение';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МестоположениеMixin, Validations, {
});

defineProjections(Model);

export default Model;
