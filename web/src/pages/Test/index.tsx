// @ts-ignore
import {FEditTable} from "@/components";

const columns = [
  {
    name: 'assign_type',
    header: true,
    items: [
      {id: 1, name: '注文', code: 1, search_str: '注文|1'},
      {id: 2, name: 'セリ', code: 2, search_str: 'セリ|2'},
      {id: 3, name: '依頼', code: 2, search_str: '依頼|3'},
      {id: 4, name: '定期', code: 2, search_str: '定期|4'},
      {id: 5, name: '買付', code: 2, search_str: '買付|5'},
      {id: 6, name: '卸', code: 2, search_str: '卸|6'},
      {id: 7, name: '小売', code: 2, search_str: '小売|7'}
    ],
    dropdown: true, // true: dropdown box, false: input
    isActive: true, // true: column is shown, false: column is hidden
    enterSkip: false, // when enter from previous column, true: skip this column,move next, false: jump into this column
    required: false,
    rules: 'required',
    showTooltip: false,
    showLess: false
  },
  {
    name: 'buyer_info',
    isActive: true,
    enterSkip: false,
    showTooltip: false,
    showLess: false
  },
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
    name: 'size',
    header: true,
    items: [
      {id: 1, name: '7cm', code: 1, search_str: '7cm|1'},
      {id: 2, name: '8cm', code: 2, search_str: '8cm|2'},
      {id: 3, name: '9cm', code: 3, search_str: '9cm|3'},
      {id: 4, name: '10cm', code: 4, search_str: '10cm|4'},
      {id: 5, name: '11cm', code: 5, search_str: '11cm|5'},
      {id: 6, name: '12cm', code: 6, search_str: '12cm|6'},
      {id: 7, name: '13cm', code: 7, search_str: '13cm|7'},
      {id: 8, name: '8~9cm', code: 8, search_str: '8~9cm|8'},
      {id: 9, name: '10~11cm', code: 9, search_str: '10~11cm|9'},
      {id: 10, name: '12~13cm', code: 10, search_str: '12~13cm|10'},
      {id: 11, name: '13~14cm', code: 11, search_str: '13~14cm|11'},
      {id: 12, name: '5ー6cm', code: 12, search_str: '5ー6cm|12'},
      {id: 13, name: '小輪', code: 13, search_str: '小輪|13'},
      {id: 14, name: '14cm', code: 14, search_str: '14cm|14'}
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
    name: 'pot_size',
    isActive: true,
    enterSkip: false,
    items: [],
    dropdown: true,
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
  },
  {
    name: 'box_type',
    header: true,
    items: [
      {id: 1, name: '箱', code: 1, search_str: '箱|1'},
      {id: 2, name: '束', code: 2, search_str: '束|2'}
    ],
    dropdown: true,
    required: false,
    enterSkip: false,
    rules: 'required',
    isActive: true,
    showTooltip: false,
    showLess: false
  }
]

const rows = [
  {
    assign_type: '注文',
    item: 'カトレア 切',
    variety: 'ハッピーストリーム',
    size: '7cm',
    quality: 'A'
  },
  {
    assign_type: '注文',
    item: 'カトレア 切',
    variety: 'ハニールージュ',
    size: '7cm',
    quality: 'A'
  },
  {
    assign_type: '注文',
    item: 'カトレア 切',
    variety: 'ビックリップ',
    size: '7cm',
    quality: 'A'
  }
]


export default function () {
  return (
    <>
      <h1>Test</h1>

      <FEditTable
        columns={columns}
        rows={rows}
      />
    </>
  )
}