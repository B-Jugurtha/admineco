import { ColorEnum } from 'src/lib/enums/color.enum';
import { IconEnum } from 'src/lib/enums/icon.enum';
import { SizeEnum } from 'src/lib/enums/size.enum';
import { IconTypeEnum, IIcon } from './Icon';

const base: IIcon = {
  name: IconEnum.MAIL,
  size: SizeEnum.NORMAL,
  className: '',
  type: IconTypeEnum.FILLED,
  color: ColorEnum.PRIMARY,
};

export const mockIconProps = {
  base,
};
