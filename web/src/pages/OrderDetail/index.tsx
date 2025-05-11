import {FEditTable, FHeader} from "../../components";
import {Autocomplete, Button, Grid, TextField} from '@mui/material'
import {useEffect, useState} from "react";
import dayjs from 'dayjs';
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from "@mui/material/Box";


const customers = [
  { id: 1, name: 'Dung', address: 'Thanh Oai - Ha Noi' },
  { id: 2, name: 'Trung', address: 'Thanh Oai 2 - ha noi' },
  { id: 3, name: 'Giang', address: 'Ca Mau - Viet Nam' },
  { id: 4, name: 'Huy', address: 'My' },
  { id: 5, name: 'Dung', address: 'QUoc Oai - Ha Noi' },
]

const columns = [
  {
    name: 'item',
    header: true,
    items: [
      {id: 1, name: 'カトレア 切', code: 1, search_str: 'カトレア 切|1'},
      {id: 2, name: 'カトレア 鉢', code: 2, search_str: 'カトレア 鉢|2'},
      {id: 3, name: 'ファレノ 切', code: 3, search_str: 'ファレノ 切|3'},
      {id: 4, name: 'ファレノ ツマミ', code: 4, search_str: 'ファレノ ツマミ|4'},
      {id: 5, name: 'ファレノ 大輪鉢', code: 5, search_str: 'ファレノ 大輪鉢|5'},
      {id: 6, name: 'ファレノ ミディ鉢', code: 6, search_str: 'ファレノ ミディ鉢|6'},
      {id: 7, name: 'その他の属', code: 7, search_str: 'その他の属|7'},
      {id: 8, name: 'ファレノブシス苗', code: 8, search_str: 'ファレノブシス苗|8'},
      {id: 9, name: 'フラスコ苗', code: 9, search_str: 'フラスコ苗|9'},
      {id: 10, name: '諸経費', code: 10, search_str: '諸経費|10'},
      {id: 11, name: '温室燃料費', code: 11, search_str: '温室燃料費|11'},
      {id: 12, name: '資材', code: 12, search_str: '資材|12'},
      {id: 13, name: '各種賃貸料', code: 13, search_str: '各種賃貸料|13'},
      {id: 14, name: '調整額', code: 14, search_str: '調整額|14'}
    ],
    dropdown: true,
    isActive: true,
    showRequired: true,
    enterSkip: false,
    required: true,
    rules: 'required',
    showTooltip: false,
    showLess: false
  },
  {
    name: 'variety',
    header: true,
    items: [
      {id: 1, name: 'ハッピーストリーム', code: 1, search_str: 'ハッピーストリーム|1'},
      {id: 2, name: 'ハニールージュ', code: 2, search_str: 'ハニールージュ|2'},
      {id: 3, name: 'おぼろ月', code: 3, search_str: 'おぼろ月|3'},
      {id: 4, name: 'ビックリップ', code: 4, search_str: 'ビックリップ|4'},
      {id: 5, name: 'ハッピーライフ', code: 5, search_str: 'ハッピーライフ|5'},
      {id: 6, name: 'W', code: 6, search_str: 'W|6'},
      {id: 7, name: 'WR', code: 7, search_str: 'WR|7'},
      {id: 8, name: '花+宅配OP+運賃', code: 8, search_str: '花+宅配OP+運賃|8'},
      {id: 9, name: 'グリーン', code: 9, search_str: 'グリーン|9'},
      {id: 10, name: '濃ピンク', code: 10, search_str: '濃ピンク|10'},
      {id: 11, name: 'グリーンアース', code: 11, search_str: 'グリーンアース|11'},
      {id: 12, name: '黄大輪', code: 12, search_str: '黄大輪|12'},
      {id: 13, name: 'MIX', code: 13, search_str: 'MIX|13'},
      {id: 14, name: 'ハッピータイム', code: 14, search_str: 'ハッピータイム|14'},
      {id: 15, name: 'P', code: 15, search_str: 'P|15'},
      {id: 16, name: 'キャンディーピンク', code: 16, search_str: 'キャンディーピンク|16'},
      {id: 17, name: 'ホンリンローズ', code: 17, search_str: 'ホンリンローズ|17'},
      {id: 18, name: '桜姫', code: 18, search_str: '桜姫|18'}
    ],
    dropdown: true,
    isActive: true,
    showRequired: true,
    enterSkip: false,
    required: true,
    rules: 'required',
    showTooltip: false,
    showLess: false
  },
  {
    name: 'color',
    header: true,
    items: [
      {id: 1, name: '白', code: 1, search_str: '白|1'},
      {id: 2, name: 'ピンク', code: 2, search_str: 'ピンク|2'},
      {id: 3, name: '黄', code: 3, search_str: '黄|3'},
      {id: 4, name: '複色', code: 4, search_str: '複色|4'},
      {id: 5, name: 'ナシ', code: 5, search_str: 'ナシ|5'},
      {id: 6, name: '緑', code: 6, search_str: '緑|6'},
      {id: 7, name: 'グリーン', code: 7, search_str: 'グリーン|7'},
      {id: 8, name: '淡いピンク', code: 8, search_str: '淡いピンク|8'},
      {id: 9, name: 'オレンジ', code: 9, search_str: 'オレンジ|9'},
      {id: 10, name: '濃赤', code: 10, search_str: '濃赤|10'},
      {id: 11, name: '赤リップ', code: 11, search_str: '赤リップ|11'}
    ],
    dropdown: true,
    isActive: true,
    enterSkip: false,
    showTooltip: false,
    showLess: false
  },
  {
    name: 'quality',
    header: true,
    items: [
      {id: 1, name: 'A', code: 1, search_str: 'A|1'},
      {id: 2, name: 'B', code: 2, search_str: 'B|2'},
      {id: 3, name: 'C', code: 3, search_str: 'C|3'},
      {id: 4, name: 'D', code: 4, search_str: 'D|4'},
      {id: 5, name: '6号', code: 5, search_str: '6号|5'},
      {id: 6, name: '7号', code: 6, search_str: '7号|6'},
      {id: 7, name: 'サンクスポット', code: 7, search_str: 'サンクスポット|7'},
      {id: 8, name: '2.5号', code: 8, search_str: '2.5号|8'},
      {id: 9, name: 'ポット', code: 9, search_str: 'ポット|9'},
      {id: 10, name: '凛鉢', code: 10, search_str: '凛鉢|10'},
      {id: 11, name: 'まどか', code: 11, search_str: 'まどか|11'},
      {id: 12, name: 'かぐや', code: 12, search_str: 'かぐや|12'},
      {id: 13, name: '切り花BOX', code: 13, search_str: '切り花BOX|13'},
      {id: 14, name: 'ヴィーナスポット', code: 14, search_str: 'ヴィーナスポット|14'},
      {id: 15, name: '平鉢', code: 15, search_str: '平鉢|15'}
    ],
    dropdown: true,
    required: false,
    rules: 'required',
    isActive: true,
    enterSkip: false,
    showTooltip: false,
    showLess: false
  },
  {
    name: 'unit',
    header: true,
    items: [
      {id: 1, name: '式', code: 1, search_str: '式|1'},
      {id: 2, name: '鉢', code: 2, search_str: '鉢|2'},
      {id: 3, name: '本', code: 3, search_str: '本|3'},
      {id: 4, name: '輪', code: 4, search_str: '輪|4'},
      {id: 5, name: '箱', code: 5, search_str: '箱|5'},
      {id: 6, name: '件', code: 6, search_str: '件|6'},
      {id: 7, name: '枚', code: 7, search_str: '枚|7'},
      {id: 8, name: '束', code: 8, search_str: '束|8'},
      {id: 9, name: '巻', code: 9, search_str: '巻|9'},
      {id: 10, name: 'リットル', code: 10, search_str: 'リットル|10'},
      {id: 11, name: 'トレイ', code: 11, search_str: 'トレイ|11'},
      {id: 12, name: '本', code: 12, search_str: '本|12'},
      {id: 13, name: '〆', code: 13, search_str: '〆|13'}
    ],
    dropdown: true,
    isActive: true,
    enterSkip: false,
    rules: 'required',
    required: false,
    showTooltip: false,
    showLess: false
  }
]

const rows = [
  {
    item: 'カトレア 切',
    variety: 'ハッピーストリーム',
    size: '7cm',
    quality: 'A'
  },
  {
    item: 'カトレア 切',
    variety: 'ハニールージュ',
    size: '7cm',
    quality: 'A'
  },
  {
    item: 'カトレア 切',
    variety: 'ビックリップ',
    size: '7cm',
    quality: 'A'
  }
]

const OrderDetailComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Autocomplete
          fullWidth={true}
          disablePortal
          options={[]}
          getOptionLabel={(option: any) => option.name}
          getOptionKey={(option) => option.id}
          renderInput={
            (params) => <TextField {...params} label="Product Name" value={''} />
          }
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          fullWidth
          label="Price"
          variant="outlined"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          fullWidth
          label="Quantity"
          variant="outlined"
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <TextField
          fullWidth
          label="Amount"
          variant="outlined"
        />
      </Grid>
    </Grid>
  )
}

export default function() {
  const emptyDetail = { id: null, productsId: '', price: '', quantity: '', amount: '' }

  const [order, setOrder] = useState({
    id: null,
    customer: {
      id: null, name: ''
    },
    deliveryAddress: '',
    saleDate: '2025-05-10',
    details: [
      { ...emptyDetail }
    ]
  })

  const onAddNewDetail = () => {
    const details = order.details
    details.push({...emptyDetail})
    setOrder({...order, details})
  }

  useEffect(() => {
    console.log(order)
  }, [order]);

  return (
    <>
      <FHeader title={'Order Details'}/>
      <Box sx={{maxWidth: 1200, margin: 'auto'}} padding={2}>
        <h2 style={{padding: '10px'}}>New Order</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Autocomplete
                fullWidth={true}
                disablePortal
                options={customers}
                getOptionLabel={(option: any) => option.name}
                getOptionKey={(option) => option.id}
                renderInput={
                  (params) => <TextField {...params} label="Customer Name" value={order.customer?.name} />
                }
                onChange={(event, newValue) => {
                  setOrder({...order, customer: newValue, deliveryAddress: newValue?.address})
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                value={order.deliveryAddress}
                onChange={e => setOrder({...order, deliveryAddress: e.target.value})}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <DesktopDatePicker
                sx={{width: '100%'}}
                defaultValue={dayjs(order.saleDate)}
                onChange={(value) => setOrder({...order, saleDate: value.format('YYYY-MM-DD')})}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>

        <h2 style={{padding: '10px'}}>Order Details</h2>
        <Button onClick={onAddNewDetail}>Add new detail</Button>
        <FEditTable
          columns={columns}
          rows={rows}
        />
      </Box>
    </>
  )
}