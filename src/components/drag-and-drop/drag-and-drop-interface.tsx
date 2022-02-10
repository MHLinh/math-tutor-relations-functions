export interface IItem {
  id: string,
  content: string,
  order: number,
  rowIndex: number, // row index
  colIndex: number // column index,
}

export interface IState {
  items: IItem[],
  selected: IItem[]
}