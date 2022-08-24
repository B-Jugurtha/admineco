import { IconTypeEnum, ISvgIcon, ColorEnum } from '../Icon';

export function UserIcon(props: ISvgIcon) {
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
            d="M9 10.125C11.7949 10.125 14.0625 7.85742 14.0625 5.0625C14.0625 2.26758 11.7949 0 9 0C6.20508 0 3.9375 2.26758 3.9375 5.0625C3.9375 7.85742 6.20508 10.125 9 10.125ZM13.5 11.25H11.5629C10.7824 11.6086 9.91406 11.8125 9 11.8125C8.08594 11.8125 7.22109 11.6086 6.43711 11.25H4.5C2.01445 11.25 0 13.2645 0 15.75V16.3125C0 17.2441 0.755859 18 1.6875 18H16.3125C17.2441 18 18 17.2441 18 16.3125V15.75C18 13.2645 15.9855 11.25 13.5 11.25Z"
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
            d="M9 2.1375C10.305 2.1375 11.3625 3.195 11.3625 4.5C11.3625 5.805 10.305 6.8625 9 6.8625C7.695 6.8625 6.6375 5.805 6.6375 4.5C6.6375 3.195 7.695 2.1375 9 2.1375ZM9 12.2625C12.3413 12.2625 15.8625 13.905 15.8625 14.625V15.8625H2.1375V14.625C2.1375 13.905 5.65875 12.2625 9 12.2625ZM9 0C6.51375 0 4.5 2.01375 4.5 4.5C4.5 6.98625 6.51375 9 9 9C11.4863 9 13.5 6.98625 13.5 4.5C13.5 2.01375 11.4863 0 9 0ZM9 10.125C5.99625 10.125 0 11.6325 0 14.625V18H18V14.625C18 11.6325 12.0038 10.125 9 10.125Z"
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
            d="M9 10.125C11.7949 10.125 14.0625 7.85742 14.0625 5.0625C14.0625 2.26758 11.7949 0 9 0C6.20508 0 3.9375 2.26758 3.9375 5.0625C3.9375 7.85742 6.20508 10.125 9 10.125ZM13.5 11.25H11.5629C10.7824 11.6086 9.91406 11.8125 9 11.8125C8.08594 11.8125 7.22109 11.6086 6.43711 11.25H4.5C2.01445 11.25 0 13.2645 0 15.75V16.3125C0 17.2441 0.755859 18 1.6875 18H16.3125C17.2441 18 18 17.2441 18 16.3125V15.75C18 13.2645 15.9855 11.25 13.5 11.25Z"
            fill={color}
          />
        </svg>
      );
  }
}
export default UserIcon;
