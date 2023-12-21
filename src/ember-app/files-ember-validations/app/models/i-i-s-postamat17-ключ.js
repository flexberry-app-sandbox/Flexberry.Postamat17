import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as КлючMixin
} from '../mixins/regenerated/models/i-i-s-postamat17-ключ';

import УведомлениеModel from './i-i-s-postamat17-уведомление';

let Model = УведомлениеModel.extend(КлючMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
