import { Password } from "@lib";

describe("Password value object test", () => {
	it(`
    GIVEN a text with numbers, uppercase and lowercase and a length between 8 and 50
    WHEN I write the valid password
    THEN the password value object is created
  `, () => {
		// GIVEN
		const passwordValid = "1234PasswordValid";

		// WHEN
		const newPassword = new Password({ value: passwordValid });

		// THEN
		expect(newPassword.compare("1234PasswordValid")).toBeTruthy();
	});

	it(`
    GIVEN a text with numbers, uppercase and a length between 8 and 50
    WHEN I write the invalid password
    THEN the password value object is not created
  `, () => {
		// GIVEN
		const passwordInvalid = "1234PASSWORD";

		// WHEN
		const newPassword = () => new Password({ value: passwordInvalid });

		// THEN
		expect(newPassword).toThrow();
	});
});
