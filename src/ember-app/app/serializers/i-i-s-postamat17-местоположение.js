import { Serializer as МестоположениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat17-местоположение';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МестоположениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
