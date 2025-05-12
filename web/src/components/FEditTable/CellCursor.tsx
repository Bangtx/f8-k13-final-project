import {useContext, useEffect, useMemo} from "react";
import { TableContext } from "./index.tsx";

export default function CellCursor() {
  const { cursor, setCursor, table } = useContext(TableContext) as any;

  if (!cursor || cursor.width === 0 || cursor.height === 0) return null;

  const style = useMemo<any>(() => {
    const { top, left, width, height } = cursor
    console.log('bao dau', top, left)
    return {
      position: "absolute",
      top,
      left,
      width,
      height,
      pointerEvents: 'none',
    }
    // zIndex: 10
  }, [cursor])

  useEffect(() => {
    if (table.current) {
      // @ts-ignore
      const cell = table.current.querySelector(`.cell-${cursor.columnIndex}-${cursor.rowIndex}`)
      if (table.current) setCursor({
        ...cursor,
        top: cell.offsetTop + 36 + 2,
        left: cell.offsetLeft,
        width: cell.offsetWidth
      })
    }

  }, [cursor.columnIndex, cursor.rowIndex])

  return (
    <span
      className="cursor"
      style={style}
    />
  );
}