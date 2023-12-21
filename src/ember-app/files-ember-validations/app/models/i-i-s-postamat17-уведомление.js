import {
  defineNamespace,
  defineProjections,
  Model as УведомлениеMixin
} from '../mixins/regenerated/models/i-i-s-postamat17-уведомление';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УведомлениеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
