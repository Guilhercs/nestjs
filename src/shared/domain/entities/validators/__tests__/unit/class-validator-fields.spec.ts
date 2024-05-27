import { Inject } from "@nestjs/common";
import { ClassValidatorField } from "../../class-validator-fields";
import * as libClassValidator from "class-validator";


class stubClassValidatorFields extends ClassValidatorField<{field: string}> {}


describe('ClassValidatorFields', () => {

  const sut = new stubClassValidatorFields();
  it("Should initialize erros and validatedData variables with null",  () => {

    expect(sut.errors).toBeNull();
    expect(sut.validatedData).toBeNull();
  });

  it("Should validate with errors", () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync').mockReturnValue([{
      property: 'field',
      constraints: { isRequired: 'test error'}
    }]);

    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalledWith(null);
    expect(sut.errors).toStrictEqual({field: ['test error']})
  })


})
