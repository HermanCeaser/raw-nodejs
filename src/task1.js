const fs = require("fs");
const path = require("path");
const { errorMessages } = require("./errors");

async function getProductInformationById(productId, dataPaths) {
  if (!Number.isInteger(productId) || productId < 0) {
    throw new Error(errorMessages.productIdValidation);
  }

  const { productsPath, customersPath, reviewsPath } = dataPaths;

  const [productsPromise, reviewsPromise, customersPromise] = await Promise.all(
    [
      fs.promises.readFile(productsPath, "utf-8"),
      fs.promises.readFile(reviewsPath, "utf-8"),
      fs.promises.readFile(customersPath, "utf-8"),
    ]
  );

  const products = JSON.parse(productsPromise).products;
  const reviews = JSON.parse(reviewsPromise).reviews;
  const customers = JSON.parse(customersPromise).customers;

  const product = products.find((product) => product.id === productId);

  if (!product) {
    // console.log(errorMessages);🐱
    throw new Error(errorMessages.productNotFound);
  }

  const productReviews = reviews.filter(
    (review) => review.product_id === productId
  ); // Filter reviews for this product

  product.reviews = productReviews.map((review) => {
    const customer = customers.find(
      (customer) => customer.id === review.customer_id
    ); // Find associated customer
    return { 
        id: review.id,
        message: review.message,
        created_at: review.created_at,
        rating: review.rating,
        customer: {
            id: customer.id,
            name: customer.name,
            email: customer.email,
            phone: customer['phone number']
        }
    }; // Combine review and customer data
  });

  return product;
}

(async () => {
  try {
    const productsPath = path.resolve(__dirname, "./data/task1/products.json");
    const customersPath = path.resolve(
      __dirname,
      "./data/task1/customers.json"
    );
    const imagesPath = path.resolve(__dirname, "./data/task1/images.json");
    const reviewsPath = path.resolve(__dirname, "./data/task1/reviews.json");

    const dataPaths = {
      productsPath,
      customersPath,
      imagesPath,
      reviewsPath,
    };

    const product = await getProductInformationById(2, dataPaths);
    console.log(JSON.stringify(product, null, 3));
  } catch (err) {
    console.error(err);
  }
})();
