import Button from "../Button/Button";
import { MenuContext } from "./Menu";
import { useContext } from "react";

export default function MenuButton({ children, variant }) {
  const { toggleOpen } = useContext(MenuContext);
  return (
    <Button className={`button-${variant}`} onClick={toggleOpen}>
      {children}
    </Button>
  );
}
