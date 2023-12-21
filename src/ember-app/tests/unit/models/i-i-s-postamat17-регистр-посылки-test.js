import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat17-регистр-посылки', 'Unit | Model | i-i-s-postamat17-регистр-посылки', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-postamat17-база-ключей',
    'model:i-i-s-postamat17-ключ',
    'model:i-i-s-postamat17-местоположение',
    'model:i-i-s-postamat17-пользователь',
    'model:i-i-s-postamat17-постамат',
    'model:i-i-s-postamat17-посылка',
    'model:i-i-s-postamat17-регистр-посылки',
    'model:i-i-s-postamat17-регистр-хран',
    'model:i-i-s-postamat17-служба-доставки',
    'model:i-i-s-postamat17-уведомление',
    'model:i-i-s-postamat17-хранение',
    'model:i-i-s-postamat17-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
