import { IconTypeEnum, ISvgIcon, ColorEnum } from '../Icon';

export function MailIcon(props: ISvgIcon) {
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
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
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
            d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
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
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            fill={color}
          />
        </svg>
      );
  }
}
export default MailIcon;
