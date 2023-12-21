import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat17-постамат', 'Unit | Serializer | i-i-s-postamat17-постамат', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postamat17-постамат',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postamat17-состояние',
    'transform:i-i-s-postamat17-статус',
    'transform:i-i-s-postamat17-статусы',
    'transform:i-i-s-postamat17-ячейки',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
