import { Shipment, Shipments } from './interfaces'
import shipmentsReducers from './reducers'

export const getShipmentsData = (state: any): Shipments => state?.shipments || ({} as Shipments)

export const getShipmentsNextShipment = (state: any): Shipment | undefined => {
  return getShipmentsData(state).nextShipment
}

export const getShipmentsPreviousShipments = (state: any): Array<Shipment> | undefined => {
  return getShipmentsData(state).previousShipments
}

export const getShipmentsPreviousFiveShipments = (state: any): Array<Shipment> | undefined => {
  const shipments = getShipmentsPreviousShipments(state)
  return shipments ? (shipments.length > 4 ? shipments.splice(0, 5) : shipments.splice(0, shipments.length)) : undefined
}
