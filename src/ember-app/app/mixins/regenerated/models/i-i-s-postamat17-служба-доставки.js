import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наименвоание: DS.attr('string'),
  номер: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  базаКлючей: DS.belongsTo('i-i-s-postamat17-база-ключей', { inverse: null, async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-postamat17-служба-доставки.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименвоание: {
    descriptionKey: 'models.i-i-s-postamat17-служба-доставки.validations.наименвоание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat17-служба-доставки.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-postamat17-служба-доставки.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  базаКлючей: {
    descriptionKey: 'models.i-i-s-postamat17-служба-доставки.validations.базаКлючей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СлужбаДоставкиE', 'i-i-s-postamat17-служба-доставки', {
    номер: attr('Номер', { index: 0 }),
    наименвоание: attr('Наименвоание', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    базаКлючей: belongsTo('i-i-s-postamat17-база-ключей', 'База ключей', {
      номерБазы: attr('Номер базы', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номерБазы' })
  });

  modelClass.defineProjection('СлужбаДоставкиL', 'i-i-s-postamat17-служба-доставки', {
    номер: attr('Номер', { index: 0 }),
    наименвоание: attr('Наименвоание', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    базаКлючей: belongsTo('i-i-s-postamat17-база-ключей', 'Номер базы', {
      номерБазы: attr('Номер базы', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
