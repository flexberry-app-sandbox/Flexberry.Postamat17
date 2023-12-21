import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерБазы: DS.attr('number'),
  ключ: DS.hasMany('i-i-s-postamat17-ключ', { inverse: 'базаКлючей', async: false })
});

export let ValidationRules = {
  номерБазы: {
    descriptionKey: 'models.i-i-s-postamat17-база-ключей.validations.номерБазы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  ключ: {
    descriptionKey: 'models.i-i-s-postamat17-база-ключей.validations.ключ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БазаКлючейE', 'i-i-s-postamat17-база-ключей', {
    номерБазы: attr('Номер базы', { index: 0 }),
    ключ: hasMany('i-i-s-postamat17-ключ', 'Ключ', {
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
    })
  });

  modelClass.defineProjection('БазаКлючейL', 'i-i-s-postamat17-база-ключей', {
    номерБазы: attr('Номер базы', { index: 0 })
  });
};
