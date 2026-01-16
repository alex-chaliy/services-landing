import cn from 'classnames';

interface PlumbService1Props {
  className?: string;
}

export default function PlumbService1(props: PlumbService1Props) {
  const { className } = { ...props };
  const classNames = cn('app-plumb-service-1 app-common-svg-icon', className);
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
        <path d="M0 1225 c0 -52 1 -55 25 -55 l25 0 2 -237 3 -238 157 -3 158 -3 0 240 0 240 28 3 c25 3 27 7 30 56 l3 52 -215 0 -216 0 0 -55z" />
        <path d="M1170 1146 c0 -22 -3 -23 -92 -28 -128 -8 -197 -35 -268 -107 -30 -31 -65 -76 -77 -101 -23 -48 -49 -181 -39 -206 4 -11 34 -14 159 -14 l154 0 6 42 c7 54 27 68 99 68 55 0 58 -1 58 -25 0 -24 3 -25 55 -25 l55 0 0 210 0 210 -55 0 c-51 0 -55 -2 -55 -24z" />
        <path d="M0 585 c0 -51 2 -55 24 -55 22 0 23 -4 29 -89 13 -185 93 -304 243 -360 27 -11 67 -21 89 -22 l40 -4 3 158 c2 154 2 159 -19 164 -26 7 -39 41 -39 103 0 46 2 49 28 52 25 3 27 7 30 56 l3 52 -215 0 -216 0 0 -55z" />
        <path d="M640 585 c0 -52 1 -55 25 -55 24 0 25 -2 25 -65 0 -58 -3 -66 -25 -81 -25 -16 -25 -17 -25 -175 l0 -158 38 6 c91 12 192 64 240 122 67 82 92 155 92 268 0 82 0 82 28 85 25 3 27 7 30 56 l3 52 -215 0 -216 0 0 -55z" />
        <path d="M480 216 l0 -216 55 0 55 0 -2 213 -3 212 -52 3 -53 3 0 -215z" />
      </g>
    </svg>
  );
}
