import { UserEntity, UserProps } from "../../user.entity"
import {faker} from '@faker-js/faker'

describe("UserEntity", () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach( async() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
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


})
