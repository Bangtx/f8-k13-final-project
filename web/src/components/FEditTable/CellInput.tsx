import { TextField } from "@mui/material";
import {useContext, useEffect, useState, useImperativeHandle} from "react";
import { TableContext } from "./index.tsx";

// @ts-ignore
export default ({ref}) => {
  const context = useContext(TableContext) as any;
  const { cursor, columns, rows, setCursor } = context
  // const { top, left, width } = cursor;
  // const inputRef = useRef(null)

  const cursorBorderWidth = 2
  const style = {
    top: `${cursor?.top + cursorBorderWidth}px`,
    left: `${cursor?.left + cursorBorderWidth}px`,
    width: `${cursor?.width - cursorBorderWidth * 2}px`,
  }

  const [cell, setCell] = useState("")

  useEffect(() => {
    setCell(rows[cursor.rowIndex][columns[cursor.columnIndex].name] || '')
  }, [rows[cursor.rowIndex][columns[cursor.columnIndex].name]])

  const onInput = (value: string) => {
    setCell(value)
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      moveCursorRight()
    }
  }

  const moveCursorRight = () => {
    setCursor({...cursor, columnIndex: cursor.columnIndex + 1})
  }

  useImperativeHandle(ref, () => {
    return {
     onInput: onInput
    }
  })

  return (
    <span style={style} className={`cell-input ${cursor.editing ? 'editing': ''}`}>
      <TextField
        sx={{
          padding: 0,
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
            border: 'none', // remove default border
          },
            '&:hover fieldset': {
            border: 'none', // remove on hover
          },
            '&.Mui-focused fieldset': {
            border: 'none', // remove on focus
          },
          },
            '& .MuiOutlinedInput-input': {
            padding: '4px', // your custom padding
          },
        }}
        size={"small"}
        value={cell}
        onChange={(e) => onInput(e.target.value)}
        onKeyDown={(e) => onKeyDown(e as any)}
      />
    </span>
  )
}
