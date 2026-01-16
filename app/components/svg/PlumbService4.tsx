import cn from 'classnames';

interface PlumbService4Props {
  className?: string;
}

export default function PlumbService4(props: PlumbService4Props) {
  const { className } = { ...props };
  const classNames = cn('app-plumb-service-4 app-common-svg-icon', className);
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
        <path d="M69 1253 c-13 -34 -5 -103 13 -114 17 -11 399 -11 416 0 18 11 26 80 13 114 l-11 27 -210 0 -210 0 -11 -27z" />
        <path d="M769 1253 c-13 -34 -5 -103 13 -114 17 -11 399 -11 416 0 18 11 26 80 13 114 l-11 27 -210 0 -210 0 -11 -27z" />
        <path d="M140 975 c0 -157 46 -273 149 -376 38 -37 89 -77 121 -92 55 -27 178 -62 186 -54 2 2 -1 27 -8 56 l-12 52 50 50 c51 52 78 59 98 27 9 -14 4 -25 -28 -57 -35 -36 -38 -42 -31 -80 4 -22 10 -43 15 -46 15 -9 114 17 180 48 81 38 186 140 223 217 38 79 57 163 57 252 l0 78 -149 0 -148 0 -5 -83 c-5 -98 -27 -143 -91 -185 -34 -23 -52 -27 -107 -27 -55 0 -73 4 -107 27 -64 42 -86 87 -91 185 l-5 83 -148 0 -149 0 0 -75z" />
        <path d="M613 358 c-28 -34 -103 -201 -103 -228 0 -129 173 -177 240 -67 31 51 25 91 -33 202 -53 101 -79 124 -104 93z" />
      </g>
    </svg>
  );
}
