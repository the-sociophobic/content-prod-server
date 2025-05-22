import { Request, Response } from 'express'


const DeliveryCalculation = async (
  request: Request<{}, {}, any>,
  response: Response<any>
) => {
  const { body } = request
  const result = 'a'

  response.send(result)
}


export default DeliveryCalculation
