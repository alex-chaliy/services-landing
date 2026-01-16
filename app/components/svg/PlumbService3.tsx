import cn from 'classnames';

interface PlumbService3Props {
  className?: string;
}

export default function PlumbService3(props: PlumbService3Props) {
  const { className } = { ...props };
  const classNames = cn('app-plumb-service-3 app-common-svg-icon', className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128.000000pt"
      height="128.000000pt"
      viewBox="0 0 128.000000 128.000000"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      className={classNames}
    >
      <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#0ff" stroke="none">
        <path d="M260 1240 c-20 -20 -20 -31 -18 -413 l3 -392 395 0 395 0 3 392 c2 382 2 393 -18 413 -19 19 -33 20 -380 20 -347 0 -361 -1 -380 -20z m448 -126 c30 -34 29 -85 -2 -121 -52 -61 -156 -21 -156 60 0 87 101 126 158 61z m-293 -14 c0 -9 -11 -16 -27 -18 -27 -3 -38 14 -21 32 12 12 48 2 48 -14z m0 -90 c0 -9 -11 -16 -27 -18 -23 -3 -28 1 -28 18 0 17 5 21 28 18 16 -2 27 -9 27 -18z m270 -262 c42 -86 44 -120 10 -153 -49 -50 -135 -15 -135 54 0 30 40 132 61 158 20 23 29 15 64 -59z" />
        <path d="M612 1094 c-12 -8 -22 -26 -22 -39 0 -53 67 -75 96 -30 21 32 9 53 -17 29 -29 -26 -48 -4 -25 30 19 31 4 35 -32 10z" />
        <path d="M615 706 c-9 -24 -15 -54 -13 -67 2 -20 9 -24 38 -24 29 0 36 4 38 24 4 26 -25 111 -38 111 -5 0 -16 -20 -25 -44z" />
        <path d="M247 393 c-4 -3 -7 -33 -7 -65 0 -45 5 -63 20 -78 19 -19 33 -20 380 -20 349 0 361 1 380 20 17 17 20 31 18 83 l-3 62 -391 3 c-215 1 -393 -1 -397 -5z" />
        <path d="M405 158 c10 -45 13 -48 40 -48 21 0 24 -5 27 -42 l3 -43 55 0 55 0 3 43 c3 42 3 42 43 42 l39 0 0 -45 0 -46 58 3 57 3 3 43 c3 38 6 42 30 42 38 0 51 11 58 48 l7 32 -243 0 -242 0 7 -32z" />
      </g>
    </svg>
  );
}
