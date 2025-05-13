import {TextField} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {TableContext} from "./index.tsx";
import './style.sass'

export default function () {

  const injector: any = useContext(TableContext)
  const {cursor, rows, columns, setCursor} = injector

  const defaultCell = rows[cursor.rowIndex][columns[cursor.columnIndex].name]

  const [cell, setCell] = useState(defaultCell)

  useEffect(() => {
    setCell(defaultCell)
  }, [defaultCell])

  const cursorBorderWidth = 2
  const style = {
    top: `${cursor?.top + cursorBorderWidth}px`,
    left: `${cursor?.left + cursorBorderWidth}px`,
    width: `${cursor?.width - cursorBorderWidth * 2}px`,
  }

  const onKeyDown = () => {
    const nextCell: any = document.querySelector(`.cell-${cursor.rowIndex}-${cursor.columnIndex}`)
    console.log(nextCell.offsetLeft)
    setCursor({
      ...cursor,
      columnIndex: cursor.columnIndex + 1,
      left: nextCell.offsetLeft,
      width: nextCell.offsetWidth
    })
  }

  return (
    <span style={style} className={`cell-input ${cursor.editing ? 'editing' : ''}`}>
      <TextField
        autoComplete={'off'}
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
        value={cell}
        onChange={(e) => setCell(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </span>
  )
}