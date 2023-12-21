import {
  defineNamespace,
  defineProjections,
  Model as МестоположениеMixin
} from '../mixins/regenerated/models/i-i-s-postamat17-местоположение';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МестоположениеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
