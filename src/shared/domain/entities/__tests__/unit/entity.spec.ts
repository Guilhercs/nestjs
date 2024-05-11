import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

export interface StubProps {
  prop1: string,
  prop2: number
}

class stubEntity extends Entity<StubProps>{}
describe("Entity", () => {

  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 15}
    const entity = new stubEntity(props);
    expect(entity.props).toStrictEqual(props)
  })

})
