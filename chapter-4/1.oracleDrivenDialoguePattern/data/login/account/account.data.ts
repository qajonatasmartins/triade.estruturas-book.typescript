import { faker } from "@faker-js/faker";
import { preSetup } from "../../../core-api/src/constants";

export const ct04 = () => {
    const testCase = 'CT-04'
    return {
        name: `${faker.person.fullName()} - ${testCase}`,
        paramsDefault: preSetup.preSetupParamsDefault(200, 3, 1000),
        title: 'ACCOUNT DELETED!',
        firstParagraph: 'Your account has been permanently deleted!',
        secondParagraph: 'You can create new account to take advantage of member privileges to enhance your online shopping experience with us.'
    }
}