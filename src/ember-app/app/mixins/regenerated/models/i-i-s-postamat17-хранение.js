import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗавершения: DS.attr('date'),
  датаНачала: DS.attr('date'),
  номер: DS.attr('number'),
  продления: DS.attr('string', { defaultValue: 'Не продлен' }),
  ячейка: DS.belongsTo('i-i-s-postamat17-ячейка', { inverse: null, async: false }),
  регистрПосылки: DS.hasMany('i-i-s-postamat17-регистр-посылки', { inverse: 'хранение', async: false })
});

export let ValidationRules = {
  датаЗавершения: {
    descriptionKey: 'models.i-i-s-postamat17-хранение.validations.датаЗавершения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-postamat17-хранение.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat17-хранение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  продления: {
    descriptionKey: 'models.i-i-s-postamat17-хранение.validations.продления.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ячейка: {
    descriptionKey: 'models.i-i-s-postamat17-хранение.validations.ячейка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрПосылки: {
    descriptionKey: 'models.i-i-s-postamat17-хранение.validations.регистрПосылки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХранениеE', 'i-i-s-postamat17-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 }),
    ячейка: belongsTo('i-i-s-postamat17-ячейка', 'Ячейка', {
      номерЯчейки: attr('Номер ячейки', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номерЯчейки' }),
    регистрПосылки: hasMany('i-i-s-postamat17-регистр-посылки', 'Регистр посылки', {
      посылка: belongsTo('i-i-s-postamat17-посылка', 'Посылка', {
        номер: attr('Номер', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'номер' })
    })
  });

  modelClass.defineProjection('ХранениеL', 'i-i-s-postamat17-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 }),
    ячейка: belongsTo('i-i-s-postamat17-ячейка', 'Номер ячейки', {
      номерЯчейки: attr('Номер ячейки', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
