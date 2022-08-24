interface IArrow {
  className?: string;
}

export const Arrow = ({ className }: IArrow) => {
  return (
    <svg
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.5038 4.78784V15.5714C2.5038 15.8081 2.69569 16 2.93237 16H4.93236C5.16904 16 5.36093 15.8081 5.36093 15.5714V4.78784H7.0059C7.76954 4.78784 8.15197 3.86459 7.612 3.32459L4.53847 0.251062C4.20372 -0.0836874 3.66101 -0.0836874 3.3263 0.251062L0.252765 3.32459C-0.287198 3.86456 0.0952297 4.78784 0.858871 4.78784H2.5038Z"
        fill="white"
      />
    </svg>
  );
};
