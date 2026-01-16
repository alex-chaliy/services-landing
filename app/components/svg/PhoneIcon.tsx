import cn from 'classnames';

interface PhoneIconProps {
  className?: string;
}

export default function PhoneIcon(props: PhoneIconProps) {
  const { className } = { ...props };
  const classNames = cn('app-phone-icon app-common-svg-icon', className);
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="28px"
      height="28px"
      viewBox="0 0 200.000000 200.000000"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      className={classNames}
    >
      <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
        <path
          d="M415 1893 c-37 -9 -151 -92 -199 -143 -26 -28 -62 -81 -79 -118 -29
            -60 -32 -76 -31 -157 1 -294 211 -683 510 -949 343 -306 690 -463 919 -416
            185 37 358 205 359 348 l1 44 -200 119 c-141 84 -209 119 -232 119 -27 0 -41
            -10 -90 -67 -118 -137 -150 -165 -175 -158 -32 9 -165 100 -268 182 -207 165
            -356 336 -395 453 -22 67 -14 83 81 161 95 78 134 123 133 157 0 16 -48 105
            -123 227 -120 194 -124 200 -157 202 -19 0 -43 -1 -54 -4z"
        />
      </g>
    </svg>
  );
}
