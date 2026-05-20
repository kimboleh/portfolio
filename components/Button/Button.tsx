import React from 'react';
import { LocalizedLink } from '../LocalizedLink';
import './button.scss';

/** Typing for props */
interface ButtonProps {
  primary?: boolean;
  caps?: boolean;
  backgroundColor?: string | undefined;
  textColor?: string | undefined;
  label: string;
  rounded?: boolean;
  link?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  // To allow extra props for either button or anchor:
  [key: string]: any;
}

/** Primary UI component for user interaction */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  caps = false,
  backgroundColor = undefined,
  textColor = undefined,
  label,
  rounded = false,
  link = undefined,
  onClick,
  ...props
}) => {
  const mode = primary ? 'btn--primary' : 'btn--secondary';
  const capitalized = caps ? 'btn--caps' : '';
  const className = ['btn font__body-caps--bold', `btn--${rounded ? "rounded" : "square"}`, mode, capitalized].filter(Boolean).join(' ');
  const style: React.CSSProperties = {
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(textColor ? { color: textColor } : {}),
  };

  // Return as a link if 'link' prop is provided, otherwise as a button
  return link ? (
    <LocalizedLink to={link} className={className} style={style} onClick={onClick} {...props}>
      {label}
    </LocalizedLink>
  ) : (
    <button type="button" className={className} style={style} onClick={onClick} {...props}>
      {label}
    </button>
  );
};

//Button.propTypes = {
  /** Is this the principal call to action on the page? */
  //primary: PropTypes.bool,
  /** What background color to use */
  //backgroundColor: PropTypes.string,
  /** What text color to use */
  //textColor: PropTypes.string,
  /** Button contents */
  //label: PropTypes.string.isRequired,
  /** Is the button rounded or square? */
  //rounded: PropTypes.bool,
  /** Optional click handler */
  //onClick: PropTypes.func,
  /** Link that the button goes to */
  //link: PropTypes.string,
//};


export default Button;