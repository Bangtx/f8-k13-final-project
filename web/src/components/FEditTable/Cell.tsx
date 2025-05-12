import {TableCell} from "@mui/material";
import {TableContext} from "./index.tsx";
import {useContext, useRef} from "react";

export default function ({column, columnIndex, row, rowIndex}: any) {
  const injector: any = useContext(TableContext)

  const {cursor, setCursor} = injector
  const cellRef = useRef<HTMLTableCellElement>(null);

  const onClick = () => {
    if (cellRef.current) {
      const width = cellRef.current.offsetWidth;
      const height = cellRef.current.offsetHeight;
      const left = cellRef.current.offsetLeft;
      const top = cellRef.current.offsetTop + 36 + 2;
      setCursor({
        ...cursor,
        columnIndex,
        rowIndex,
        width,
        height,
        left,
        top
      })
    }
  }

  return (
    <TableCell
      className={`cell-${columnIndex}-${rowIndex}`}
      ref={cellRef}
      height={36}
      padding={'none'}
      key={`${columnIndex}-${rowIndex}`}
      onClick={onClick}
    >
      {
        row[column.name]
      }
    </TableCell>
  )
}