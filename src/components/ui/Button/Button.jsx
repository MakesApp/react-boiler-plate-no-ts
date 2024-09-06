import * as S from "./Button.styles.js";
const Button = ({ handleClick, children }) => {
  return <S.Button onClick={handleClick}>{children}</S.Button>;
};
export default Button;
