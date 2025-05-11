import { useContext } from "react";
import { TableContext } from "./index.tsx";

export default function CellCursor() {
  const { cursor } = useContext(TableContext) as any;

  if (!cursor || cursor.width === 0 || cursor.height === 0) return null;

  const { top, left, width, height } = cursor;

  return (
    <span
      className="cursor"
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        pointerEvents: 'none',
        // zIndex: 10
      }}
    />
  );
}