export enum SHIPMENT_STATUS {
  EXCEPTING_CHANGES = 'EXCEPTING_CHANGES',
  PACKING = 'PACKING',
  BEING_DELIVERED = 'BEING DELIVERED',
  DELIVERED = 'DELIVERED',
}

export enum SHIPPING_COMPANY {
  UPS = 'UPS',
  USPS = 'USPS',
  FEDEX = 'FEDEX',
}

export interface Shipment {
  id: string
  name: string
  status: SHIPMENT_STATUS
  expectingChangesUntil: Date
  trackingNumber: string
  shippingCompany: SHIPPING_COMPANY
  shippingCompanyLogo: string
}

export interface Shipments {
  nextShipment?: Shipment
  previousShipments?: Array<Shipment>
}
