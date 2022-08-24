import { ColorEnum, IconTypeEnum, ISvgIcon } from '../Icon';

export function AccountingIcon(props: ISvgIcon) {
  const { size, color = ColorEnum.PRIMARY, className, type } = props;
  switch (type) {
    case IconTypeEnum.FILLED:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM10.03 4.06L11.09 3L12.5 4.41L13.91 3L14.97 4.06L13.56 5.47L14.97 6.88L13.91 7.94L12.5 6.54L11.09 7.95L10.03 6.89L11.44 5.48L10.03 4.06ZM3.25 4.72H8.25V6.22H3.25V4.72ZM8.5 13H6.5V15H5V13H3V11.5H5V9.5H6.5V11.5H8.5V13ZM15 14.25H10V12.75H15V14.25ZM15 11.75H10V10.25H15V11.75Z"
            fill={color}
          />
        </svg>
      );
    case IconTypeEnum.OUTLINED:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z"
            fill={color}
          />
          <path d="M8.25 4.72H3.25V6.22H8.25V4.72Z" fill={color} />
          <path d="M15 12.75H10V14.25H15V12.75Z" fill={color} />
          <path d="M15 10.25H10V11.75H15V10.25Z" fill={color} />
          <path
            d="M5 15H6.5V13H8.5V11.5H6.5V9.5H5V11.5H3V13H5V15Z"
            fill={color}
          />
          <path
            d="M11.09 7.95L12.5 6.54L13.91 7.95L14.97 6.89L13.56 5.47L14.97 4.06L13.91 3L12.5 4.41L11.09 3L10.03 4.06L11.44 5.47L10.03 6.89L11.09 7.95Z"
            fill={color}
          />
        </svg>
      );
    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM10.03 4.06L11.09 3L12.5 4.41L13.91 3L14.97 4.06L13.56 5.47L14.97 6.88L13.91 7.94L12.5 6.54L11.09 7.95L10.03 6.89L11.44 5.48L10.03 4.06ZM3.25 4.72H8.25V6.22H3.25V4.72ZM8.5 13H6.5V15H5V13H3V11.5H5V9.5H6.5V11.5H8.5V13ZM15 14.25H10V12.75H15V14.25ZM15 11.75H10V10.25H15V11.75Z"
            fill={color}
          />
        </svg>
      );
  }
}
export default AccountingIcon;
