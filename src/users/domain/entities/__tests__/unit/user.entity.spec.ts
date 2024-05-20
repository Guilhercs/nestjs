import { UserEntity, UserProps } from "../../user.entity"
import { UserDataBuilder } from "../testing/helpers/user-data-builder"

describe("UserEntity", () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach( async() => {
    props = UserDataBuilder({})
    sut = new UserEntity(props);

  })
  it('should test constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toEqual(props.createdAt);
  })


  it('should return name when getter name is called', () => {
    expect(sut.props.name).toEqual(props.name)
  })
  it('should return email when getter email is called', () => {
    expect(sut.props.email).toEqual(props.email)
  })
  it('should return password when getter password is called', () => {
    expect(sut.props.password).toEqual(props.password)
  })
  it('should return createdAt when getter createdAt is called', () => {
    expect(sut.props.createdAt).toEqual(props.createdAt)
  })

  it('should update name when update is called', () => {
    const newName = 'Guilherme';

    sut.update(newName);

    expect(sut.props.name).toStrictEqual(newName);
  })

  it('should update password when updatePassword is called', () => {
    const newName = 'banana123';

    sut.updatePassword(newName);

    expect(sut.props.password).toStrictEqual(newName);
  })
})
