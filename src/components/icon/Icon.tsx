import AccountingIcon from './icons/accounting';
import CommandIcon from './icons/commands';
import EyeIcon from './icons/eye';
import HomeIcon from './icons/home';
import MailIcon from './icons/mail';
import MessageIcon from './icons/message';
import NoEyeIcon from './icons/no-eye';
import StockIcon from './icons/stock';
import UserIcon from './icons/user';

export enum ColorEnum {
  PRIMARY = 'primary',
  WHITE = 'white',
  // PRIMARY = '#161e44',
  // TEST = '#ff8200',
}
export enum IconEnum {
  MAIL = 'MAIL',
  MESSAGE = 'MESSAGE',
  EYE = 'EYE',
  NOEYE = 'NOEYE',
  USER = 'USER',
  STOCK = 'STOCK',
  COMMAND = 'COMMAND',
  ACCOUNTING = 'ACCOUNTING',
  HOME = 'HOME',
}
export enum SizeEnum {
  BIG = 'big',
  NORMAL = 'normal',
  SMALL = 'small',
}

export interface IIcon {
  name: IconEnum;
  size?: SizeEnum;
  type?: IconTypeEnum;
  className?: string;
  color?: ColorEnum;
}
export interface ISvgIcon {
  size: string;
  color?: string;
  type?: IconTypeEnum;
  className?: string;
}
export enum IconTypeEnum {
  FILLED = 'filled',
  OUTLINED = 'outlined',
}
const Icon: React.FC<IIcon> = ({
  name,
  className = '',
  type = IconTypeEnum.FILLED,
  size = SizeEnum.NORMAL,
  color = ColorEnum.PRIMARY,
}) => {
  const sizeToPx =
    size == SizeEnum.BIG ? '36px' : size == SizeEnum.NORMAL ? '24px' : '18px';
  const hexColor =
    color == ColorEnum.PRIMARY
      ? '#161e44'
      : color == ColorEnum.WHITE
      ? '#fff'
      : '#fff';

  switch (name) {
    case IconEnum.MAIL:
      return (
        <MailIcon
          size={sizeToPx}
          type={type}
          className={className}
          color={hexColor}
        />
      );
    case IconEnum.MESSAGE:
      return (
        <MessageIcon
          size={sizeToPx}
          type={type}
          className={className}
          color={hexColor}
        />
      );
    case IconEnum.EYE:
      return (
        <EyeIcon
          size={sizeToPx}
          type={type}
          className={className}
          color={hexColor}
        />
      );
    case IconEnum.NOEYE:
      return (
        <NoEyeIcon
          size={sizeToPx}
          type={type}
          className={className}
          color={hexColor}
        />
      );
    case IconEnum.USER:
      return (
        <UserIcon
          size={sizeToPx}
          type={type}
          className={className}
          color={hexColor}
        />
      );
    case IconEnum.STOCK:
      return (
        <StockIcon
          size={sizeToPx}
          type={type}
          className={className}
          color={hexColor}
        />
      );
    case IconEnum.COMMAND:
      return (
        <CommandIcon
          size={sizeToPx}
          type={type}
          className={className}
          color={hexColor}
        />
      );
    case IconEnum.ACCOUNTING:
      return (
        <AccountingIcon
          size={sizeToPx}
          type={type}
          className={className}
          color={hexColor}
        />
      );
    case IconEnum.HOME:
      return (
        <HomeIcon
          size={sizeToPx}
          type={type}
          className={className}
          color={hexColor}
        />
      );
    default:
      return <svg />;
  }
};

export default Icon;
