export interface RatingStarProps {
  rating: number
  position: number
  isPartHover: string
  onHover: (position: number) => void
  onMouseOut: () => void
  onStarClick: (position: number) => void
}
