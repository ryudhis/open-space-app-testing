import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return [value, handleValueChange, setValue];
}

export default useInput;
