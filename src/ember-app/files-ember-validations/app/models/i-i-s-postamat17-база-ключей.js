import {
  defineNamespace,
  defineProjections,
  Model as БазаКлючейMixin
} from '../mixins/regenerated/models/i-i-s-postamat17-база-ключей';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БазаКлючейMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
