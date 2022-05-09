import { useCallback, useState } from "react";

export function useRotateCounter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(count + 1), [count]);

  const isRotate = count >= 5;

  return [isRotate, increment] as const;
}
