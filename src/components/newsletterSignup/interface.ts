export interface NewsletterProps {
  position: number,
  onReset: () => void,
  onSubmit: (email: string) => void
}