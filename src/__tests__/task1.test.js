const { errorMessages } = require("../errors.js");
const { getProductInformationById } = require("../task1.js");
const { dataPaths } = require("../utils/dataPaths.js");

describe("Task 1: getProductInformation", () => {
  let result = null;

  beforeAll(async () => {
    result = await getProductInformationById(2, dataPaths);
  });

  it("should include reviews", () => {
    expect(result).toHaveProperty("reviews");
    expect(result.reviews.length).toBe(2);
  });

  it("should have a formated customer in the review object for the first product", () => {
    expect(result.reviews[0]).toHaveProperty("customer");
    expect(result.reviews[0].customer.id).toBe(1);
    expect(result.reviews[0].customer.name).toBe("John Doe");
    expect(result.reviews[0].customer.email).toBe("john.doe@email.com");
    expect(result.reviews[0].customer.phone).toBe("123-456-7890");
  });

  it("should exclude credit card information from customer object in reviews", () => {
    expect(result.reviews[0].customer.credit_card).not.toBeDefined();
  });

  it("should throw an error if Non Zero positive integer is passed", async () => {
    await expect(getProductInformationById("2", dataPaths)).rejects.toThrow(
      errorMessages.productIdValidation
    );
    await expect(getProductInformationById(-1, dataPaths)).rejects.toThrow(
      errorMessages.productIdValidation
    );
    await expect(getProductInformationById(0, dataPaths)).rejects.toThrow(
      errorMessages.productIdValidation
    );
    await expect(getProductInformationById(2.4, dataPaths)).rejects.toThrow(
      errorMessages.productIdValidation
    );
  });
});
