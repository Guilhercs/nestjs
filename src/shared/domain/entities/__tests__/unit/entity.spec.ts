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

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  })

  it('should convert a entity to a JSON', () => {
  const props = { prop1: 'value1', prop2: 12 };
  const id = '8a58ae47-dc2a-4187-a8be-1d88cabdf040';
  const entity = new stubEntity(props, id);

  expect(entity._id).toEqual(id)
  })

  it('should convert a entity to a JSON', () => {
    const props = { prop1: 'value1', prop2: 12 };
    const id = '8a58ae47-dc2a-4187-a8be-1d88cabdf040';
    const entity = new stubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id, ...props
    });

  })


})
