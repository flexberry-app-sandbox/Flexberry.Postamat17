import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БазаКлючейMixin
} from '../mixins/regenerated/models/i-i-s-postamat17-база-ключей';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БазаКлючейMixin, Validations, {
});

defineProjections(Model);

export default Model;
