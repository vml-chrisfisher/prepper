export default interface BookmarkProps {
  idToFollow: string
  onClick: (event: React.MouseEvent, isSelected: boolean) => void
}
