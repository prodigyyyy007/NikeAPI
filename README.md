# NikeApp Backend API

This repository is the backend for [Nike](https://github.com/nayak-nirmalya/NikeApp) app that show popular shoes and user can add multiple shoes to cart and make payment. Made with JavaScript, MongoDB, Express.js, Stripe API for Payment & Node.js.

Funcionalities:

- Get Products & Orders.
- Get Product & Order by ID.
- Create Order.
- Make Payment with Stripe API.

### Prerequisites

**Node ^= 16**

### Cloning the repository

```shell
git clone https://github.com/nayak-nirmalya/NikeAPI.git
```

## Running Project

Clone this Repository. Add your MongoDB instance URL and Stripe Secret Key in .env file as given in .env.example file.

### Setup .env File

```js
DATABASE_URL=
STRIPE_SECRET_KEY=
```

Navigate to root directory and run the following npm command:

```shell
cd NikeAPI
npm run dev
```
