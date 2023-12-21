import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-postamat17-статус'),
  местоположение: DS.belongsTo('i-i-s-postamat17-местоположение', { inverse: null, async: false }),
  пользователь: DS.belongsTo('i-i-s-postamat17-пользователь', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-postamat17-посылка.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat17-посылка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  местоположение: {
    descriptionKey: 'models.i-i-s-postamat17-посылка.validations.местоположение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-postamat17-посылка.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-postamat17-посылка', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    пользователь: belongsTo('i-i-s-postamat17-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' }),
    местоположение: belongsTo('i-i-s-postamat17-местоположение', 'Местоположение', {
      информация: attr('Информация', { index: 5, hidden: true }),
      состояние: attr('Состояние', { index: 6 })
    }, { index: 4, displayMemberPath: 'информация' })
  });

  modelClass.defineProjection('ПосылкаL', 'i-i-s-postamat17-посылка', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    пользователь: belongsTo('i-i-s-postamat17-пользователь', 'ФИО пользователя', {
      фИО: attr('ФИО пользователя', { index: 2 })
    }, { index: -1, hidden: true }),
    местоположение: belongsTo('i-i-s-postamat17-местоположение', 'Информация о посылке', {
      информация: attr('Информация о посылке', { index: 3 }),
      состояние: attr('Состояние посылки', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
