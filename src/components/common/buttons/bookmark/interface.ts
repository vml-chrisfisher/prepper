export default interface BookmarkProps {
  isSelected: boolean
  selectedCaption: string
  unselectedCaption: string
  onClick: (event: React.MouseEvent) => void
}
