import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  информация: DS.attr('string'),
  номер: DS.attr('number'),
  состояние: DS.attr('i-i-s-postamat17-состояние'),
  службаДоставки: DS.belongsTo('i-i-s-postamat17-служба-доставки', { inverse: null, async: false })
});

export let ValidationRules = {
  информация: {
    descriptionKey: 'models.i-i-s-postamat17-местоположение.validations.информация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat17-местоположение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-postamat17-местоположение.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  службаДоставки: {
    descriptionKey: 'models.i-i-s-postamat17-местоположение.validations.службаДоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МестоположениеE', 'i-i-s-postamat17-местоположение', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    информация: attr('Информация', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat17-служба-доставки', 'Служба доставки', {
      наименвоание: attr('Наименвоание', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименвоание' })
  });

  modelClass.defineProjection('МестоположениеL', 'i-i-s-postamat17-местоположение', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    информация: attr('Информация', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat17-служба-доставки', 'Наименвоание', {
      наименвоание: attr('Наименвоание', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
