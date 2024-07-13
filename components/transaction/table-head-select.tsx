
type Props = {
 columnIndex: number
 selectedColumns: Record<string, string | null>
 columnHeader: string
 onChange: (columnIndex: number, value: string | null) => void
}

export const TableHeadSelect = ({
 columnIndex,
 selectedColumns,
 onChange,
 columnHeader
}: Props) => {
  return <div>{columnHeader}</div>
}