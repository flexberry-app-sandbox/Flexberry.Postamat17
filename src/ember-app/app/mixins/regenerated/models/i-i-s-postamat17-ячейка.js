import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЯчейки: DS.attr('number'),
  статус: DS.attr('i-i-s-postamat17-ячейки')
});

export let ValidationRules = {
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-postamat17-ячейка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat17-ячейка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЯчейкаE', 'i-i-s-postamat17-ячейка', {
    номерЯчейки: attr('Номер ячейки', { index: 0 }),
    статус: attr('Статус', { index: 1 })
  });

  modelClass.defineProjection('ЯчейкаL', 'i-i-s-postamat17-ячейка', {
    номерЯчейки: attr('Номер ячейки', { index: 0 }),
    статус: attr('Статус', { index: 1 })
  });
};
