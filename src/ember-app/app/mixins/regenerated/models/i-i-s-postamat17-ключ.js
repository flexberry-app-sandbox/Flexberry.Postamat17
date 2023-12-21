import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сгенКлюч: DS.attr('number'),
  пользователь: DS.belongsTo('i-i-s-postamat17-пользователь', { inverse: null, async: false }),
  базаКлючей: DS.belongsTo('i-i-s-postamat17-база-ключей', { inverse: 'ключ', async: false })
});

export let ValidationRules = {
  сгенКлюч: {
    descriptionKey: 'models.i-i-s-postamat17-ключ.validations.сгенКлюч.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-postamat17-ключ.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  базаКлючей: {
    descriptionKey: 'models.i-i-s-postamat17-ключ.validations.базаКлючей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-postamat17-уведомление'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлючE', 'i-i-s-postamat17-ключ', {
    сгенКлюч: attr('Сгенерированный ключ ', { index: 0 }),
    уведомление: attr('Уведомление', { index: 1 }),
    фИО: attr('ФИО пользователя', { index: 2 }),
    номерПосылки: attr('Номер посылки', { index: 3 }),
    номерТелефона: attr('Номер телефона пользователя', { index: 4 }),
    пользователь: belongsTo('i-i-s-postamat17-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    хранение: belongsTo('i-i-s-postamat17-хранение', 'Хранение', {
      продления: attr('Продления', { index: 8, hidden: true }),
      датаНачала: attr('Дата начала хранения', { index: 9 }),
      датаЗавершения: attr('Дата завершения хранения', { index: 10 })
    }, { index: 7, displayMemberPath: 'продления' })
  });
};
