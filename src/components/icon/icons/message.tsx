import { IconTypeEnum, ISvgIcon, ColorEnum } from '../Icon';

export function MessageIcon(props: ISvgIcon) {
  const { size, color = ColorEnum.PRIMARY, className, type } = props;
  switch (type) {
    case IconTypeEnum.FILLED:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          fill="#000000"
          className={className}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
            fill={color}
          />
        </svg>
      );
    case IconTypeEnum.OUTLINED:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          fill="#000000"
          className={className}
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
            fill={color}
          />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          fill="#000000"
          className={className}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"
            fill={color}
          />
        </svg>
      );
  }
}
export default MessageIcon;
