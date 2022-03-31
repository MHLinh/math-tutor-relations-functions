// The interfaces for drag and drop component.

export interface IItem {
  id: string,       // Id of the drag and drop item
  content: string,  // Content (text) of the drag and drop item
  order: number,    // Order of the drag and drop item to display in
  rowIndex: number, // Row index for the relation
  colIndex: number  // Column index for the relation
}

export interface IState {
  items: IItem[],     // List of items
  selected: IItem[]   // List of selected items
}
