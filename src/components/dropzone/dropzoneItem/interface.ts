export default interface DropZoneItemInterface {
  file: DropZoneFile
  bucketFileName: string
  removeFile: (name: string) => void
}

export interface DropZoneFile {
  name: string
  size: number
  bucketName: string
}
