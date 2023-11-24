import useEffectOnUpdate from "./useEffectOnUpdate";
import { useState } from "react";

export default function useToggle({
  initialValue = false,
  onToggle = () => {},
}) {
  const [on, setOn] = useState(initialValue);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  useEffectOnUpdate(onToggle, [on]);

  return [on, toggle];
}
