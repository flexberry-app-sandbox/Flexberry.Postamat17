import { Serializer as БазаКлючейSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat17-база-ключей';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БазаКлючейSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
