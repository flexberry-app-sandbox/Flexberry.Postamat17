import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЯчейкиEnum from '../enums/i-i-s-postamat17-ячейки';

export default FlexberryEnum.extend({
  enum: ЯчейкиEnum,
  sourceType: 'IIS.Postamat17.Ячейки'
});
