export default interface DropZoneItemInterface {
  file: DropZoneFile
  removeFile: (name: string) => void
}

export interface DropZoneFile {
  name: string
  size: number
}
