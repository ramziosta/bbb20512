{
    accounts: [
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        balances: {
          available: 100,
          current: 110,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '0000',
        name: 'Plaid Checking',
        official_name: 'Plaid Gold Standard 0% Interest Checking',
        subtype: 'checking',
        type: 'depository'
      },
      {
        account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
        balances: {
          available: 200,
          current: 210,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '1111',
        name: 'Plaid Saving',
        official_name: 'Plaid Silver Standard 0.1% Interest Saving',
        subtype: 'savings',
        type: 'depository'
      }
    ],
    item: {
      available_products: [ 'assets', 'balance', 'identity', 'liabilities' ],
      billed_products: [ 'auth', 'transactions' ],
      consent_expiration_time: null,
      error: null,
      institution_id: 'ins_127989',
      item_id: 'GAlLazwlP6twZykLmmLjheL4q6EKErC18Kv5E',
      optional_products: null,
      products: [ 'auth', 'transactions' ],
      update_type: 'background',
      webhook: ''
    },
    numbers: {
      ach: [
        {
          account: '1111222233330000',
          account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
          routing: '011401533',
          wire_routing: '021000021'
        },
        {
          account: '1111222233331111',
          account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
          routing: '011401533',
          wire_routing: '021000021'
        }
      ],
      bacs: [],
      eft: [],
      international: []
    },
    request_id: 'mlAA7HKFmK5W0BG'
  }
  {
    accounts: [
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        balances: {
          available: 100,
          current: 110,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '0000',
        name: 'Plaid Checking',
        official_name: 'Plaid Gold Standard 0% Interest Checking',
        subtype: 'checking',
        type: 'depository'
      },
      {
        account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
        balances: {
          available: 200,
          current: 210,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '1111',
        name: 'Plaid Saving',
        official_name: 'Plaid Silver Standard 0.1% Interest Saving',
        subtype: 'savings',
        type: 'depository'
      }
    ],
    item: {
      available_products: [ 'assets', 'balance', 'identity', 'liabilities' ],
      billed_products: [ 'auth', 'transactions' ],
      consent_expiration_time: null,
      error: null,
      institution_id: 'ins_127989',
      item_id: 'GAlLazwlP6twZykLmmLjheL4q6EKErC18Kv5E',
      optional_products: null,
      products: [ 'auth', 'transactions' ],
      update_type: 'background',
      webhook: ''
    },
    request_id: 'DvfRjHJZqqI0ElV',
    total_transactions: 8,
    transactions: [
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        account_owner: null,
        amount: 6.33,
        authorized_date: '2022-04-17',
        authorized_datetime: null,
        category: [ 'Travel', 'Taxi' ],
        category_id: '22016000',
        check_number: null,
        date: '2022-04-18',
        datetime: null,
        iso_currency_code: 'USD',
        location: {
          address: null,
          city: null,
          country: null,
          lat: null,
          lon: null,
          postal_code: null,
          region: null,
          store_number: null
        },
        merchant_name: 'Uber',
        name: 'Uber 072515 SF**POOL**',
        payment_channel: 'in store',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        personal_finance_category: null,
        transaction_code: null,
        transaction_id: 'vyjGzDBjVJSqNaDd55dZTVKXLkAE7eiXQxdKd',
        transaction_type: 'special',
        unofficial_currency_code: null
      },
      {
        account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
        account_owner: null,
        amount: 25,
        authorized_date: '2022-04-04',
        authorized_datetime: null,
        category: [ 'Payment', 'Credit Card' ],
        category_id: '16001000',
        check_number: null,
        date: '2022-04-05',
        datetime: null,
        iso_currency_code: 'USD',
        location: {
          address: null,
          city: null,
          country: null,
          lat: null,
          lon: null,
          postal_code: null,
          region: null,
          store_number: null
        },
        merchant_name: null,
        name: 'CREDIT CARD 3333 PAYMENT *//',
        payment_channel: 'other',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        personal_finance_category: null,
        transaction_code: null,
        transaction_id: 'ww7nBl37V1UzLP6a99a4UwQxNElZgXulX98pP',
        transaction_type: 'special',
        unofficial_currency_code: null
      },
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        account_owner: null,
        amount: 5.4,
        authorized_date: '2022-04-04',
        authorized_datetime: null,
        category: [ 'Travel', 'Taxi' ],
        category_id: '22016000',
        check_number: null,
        date: '2022-04-05',
        datetime: null,
        iso_currency_code: 'USD',
        location: {
          address: null,
          city: null,
          country: null,
          lat: null,
          lon: null,
          postal_code: null,
          region: null,
          store_number: null
        },
        merchant_name: 'Uber',
        name: 'Uber 063015 SF**POOL**',
        payment_channel: 'in store',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        personal_finance_category: null,
        transaction_code: null,
        transaction_id: 'R6NmLMBNgAtD3WG1vv1ECe6zrVadRgTGVjEqL',
        transaction_type: 'special',
        unofficial_currency_code: null
      },
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        account_owner: null,
        amount: -500,
        authorized_date: '2022-04-03',
        authorized_datetime: null,
        category: [ 'Travel', 'Airlines and Aviation Services' ],
        category_id: '22001000',
        check_number: null,
        date: '2022-04-03',
        datetime: null,
        iso_currency_code: 'USD',
        location: {
          address: null,
          city: null,
          country: null,
          lat: null,
          lon: null,
          postal_code: null,
          region: null,
          store_number: null
        },
        merchant_name: 'United Airlines',
        name: 'United Airlines',
        payment_channel: 'other',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        personal_finance_category: null,
        transaction_code: null,
        transaction_id: '65ZrM6XZW4f4LVyommovS9Bx4jMngZCx7J5la',
        transaction_type: 'special',
        unofficial_currency_code: null
      },
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        account_owner: null,
        amount: 12,
        authorized_date: '2022-04-02',
        authorized_datetime: null,
        category: [ 'Food and Drink', 'Restaurants', 'Fast Food' ],
        category_id: '13005032',
        check_number: null,
        date: '2022-04-02',
        datetime: null,
        iso_currency_code: 'USD',
        location: {
          address: null,
          city: null,
          country: null,
          lat: null,
          lon: null,
          postal_code: null,
          region: null,
          store_number: '3322'
        },
        merchant_name: "McDonald's",
        name: "McDonald's",
        payment_channel: 'in store',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        personal_finance_category: null,
        transaction_code: null,
        transaction_id: 'X6ZXlGoZnRtwNeKgzzgqhGx4odjQZpCxAgaXp',
        transaction_type: 'place',
        unofficial_currency_code: null
      },
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        account_owner: null,
        amount: 4.33,
        authorized_date: '2022-04-02',
        authorized_datetime: null,
        category: [ 'Food and Drink', 'Restaurants', 'Coffee Shop' ],
        category_id: '13005043',
        check_number: null,
        date: '2022-04-02',
        datetime: null,
        iso_currency_code: 'USD',
        location: {
          address: null,
          city: null,
          country: null,
          lat: null,
          lon: null,
          postal_code: null,
          region: null,
          store_number: null
        },
        merchant_name: 'Starbucks',
        name: 'Starbucks',
        payment_channel: 'in store',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        personal_finance_category: null,
        transaction_code: null,
        transaction_id: 'D6mZ3qomaGt1ZkaL99LRs5Z673xVGKsXqeMoz',
        transaction_type: 'place',
        unofficial_currency_code: null
      },
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        account_owner: null,
        amount: 89.4,
        authorized_date: '2022-03-31',
        authorized_datetime: null,
        category: [ 'Food and Drink', 'Restaurants' ],
        category_id: '13005000',
        check_number: null,
        date: '2022-04-01',
        datetime: null,
        iso_currency_code: 'USD',
        location: {
          address: null,
          city: null,
          country: null,
          lat: null,
          lon: null,
          postal_code: null,
          region: null,
          store_number: null
        },
        merchant_name: 'Sparkfun',
        name: 'SparkFun',
        payment_channel: 'in store',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        personal_finance_category: null,
        transaction_code: null,
        transaction_id: 'V6eR8LpeAmtBGJNW11W9fD4na3dLl7CnMkrVW',
        transaction_type: 'place',
        unofficial_currency_code: null
      },
      {
        account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
        account_owner: null,
        amount: -4.22,
        authorized_date: '2022-03-31',
        authorized_datetime: null,
        category: [ 'Transfer', 'Credit' ],
        category_id: '21005000',
        check_number: null,
        date: '2022-03-31',
        datetime: null,
        iso_currency_code: 'USD',
        location: {
          address: null,
          city: null,
          country: null,
          lat: null,
          lon: null,
          postal_code: null,
          region: null,
          store_number: null
        },
        merchant_name: null,
        name: 'INTRST PYMNT',
        payment_channel: 'other',
        payment_meta: {
          by_order_of: null,
          payee: null,
          payer: null,
          payment_method: null,
          payment_processor: null,
          ppd_id: null,
          reason: null,
          reference_number: null
        },
        pending: false,
        pending_transaction_id: null,
        personal_finance_category: null,
        transaction_code: null,
        transaction_id: '5RQKZb7QEaCyeo1vzzvKI3EewX5VGxiprVmnG',
        transaction_type: 'special',
        unofficial_currency_code: null
      }
    ]
  }
  {
    accounts: [
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        balances: {
          available: 100,
          current: 110,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '0000',
        name: 'Plaid Checking',
        official_name: 'Plaid Gold Standard 0% Interest Checking',
        owners: [
          {
            addresses: [Array],
            emails: [Array],
            names: [Array],
            phone_numbers: [Array]
          }
        ],
        subtype: 'checking',
        type: 'depository'
      },
      {
        account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
        balances: {
          available: 200,
          current: 210,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '1111',
        name: 'Plaid Saving',
        official_name: 'Plaid Silver Standard 0.1% Interest Saving',
        owners: [
          {
            addresses: [Array],
            emails: [Array],
            names: [Array],
            phone_numbers: [Array]
          }
        ],
        subtype: 'savings',
        type: 'depository'
      }
    ],
    item: {
      available_products: [ 'assets', 'balance', 'liabilities' ],
      billed_products: [ 'auth', 'identity', 'transactions' ],
      consent_expiration_time: null,
      error: null,
      institution_id: 'ins_127989',
      item_id: 'GAlLazwlP6twZykLmmLjheL4q6EKErC18Kv5E',
      optional_products: null,
      products: [ 'auth', 'identity', 'transactions' ],
      update_type: 'background',
      webhook: ''
    },
    request_id: 'NCC8kGw8etpYaRK'
  }
  {
    item: {
      available_products: [ 'assets', 'balance', 'liabilities' ],
      billed_products: [ 'auth', 'identity', 'transactions' ],
      consent_expiration_time: null,
      error: null,
      institution_id: 'ins_127989',
      item_id: 'GAlLazwlP6twZykLmmLjheL4q6EKErC18Kv5E',
      optional_products: null,
      products: [ 'auth', 'identity', 'transactions' ],
      update_type: 'background',
      webhook: ''
    },
    request_id: 'q97OPnCO3l2VKlu',
    status: {
      last_webhook: null,
      transactions: {
        last_failed_update: '2022-04-29T02:22:20.725Z',
        last_successful_update: '2022-04-29T02:22:40.785Z'
      }
    }
  }
  {
    accounts: [
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        balances: {
          available: 100,
          current: 110,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '0000',
        name: 'Plaid Checking',
        official_name: 'Plaid Gold Standard 0% Interest Checking',
        subtype: 'checking',
        type: 'depository'
      },
      {
        account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
        balances: {
          available: 200,
          current: 210,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '1111',
        name: 'Plaid Saving',
        official_name: 'Plaid Silver Standard 0.1% Interest Saving',
        subtype: 'savings',
        type: 'depository'
      }
    ],
    item: {
      available_products: [ 'assets', 'balance', 'liabilities' ],
      billed_products: [ 'auth', 'identity', 'transactions' ],
      consent_expiration_time: null,
      error: null,
      institution_id: 'ins_127989',
      item_id: 'GAlLazwlP6twZykLmmLjheL4q6EKErC18Kv5E',
      optional_products: null,
      products: [ 'auth', 'identity', 'transactions' ],
      update_type: 'background',
      webhook: ''
    },
    request_id: 'z5gnBCCevrYgjq3'
  }
  {
    accounts: [
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        balances: {
          available: 100,
          current: 110,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '0000',
        name: 'Plaid Checking',
        official_name: 'Plaid Gold Standard 0% Interest Checking',
        subtype: 'checking',
        type: 'depository'
      },
      {
        account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
        balances: {
          available: 200,
          current: 210,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '1111',
        name: 'Plaid Saving',
        official_name: 'Plaid Silver Standard 0.1% Interest Saving',
        subtype: 'savings',
        type: 'depository'
      }
    ],
    item: {
      available_products: [ 'assets', 'balance', 'liabilities' ],
      billed_products: [ 'auth', 'identity', 'transactions' ],
      consent_expiration_time: null,
      error: null,
      institution_id: 'ins_127989',
      item_id: 'GAlLazwlP6twZykLmmLjheL4q6EKErC18Kv5E',
      optional_products: null,
      products: [ 'auth', 'identity', 'transactions' ],
      update_type: 'background',
      webhook: ''
    },
    request_id: 'v6PEJsiu9ojfXKm'
  }
  {
    accounts: [
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        balances: {
          available: 100,
          current: 110,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '0000',
        name: 'Plaid Checking',
        official_name: 'Plaid Gold Standard 0% Interest Checking',
        subtype: 'checking',
        type: 'depository'
      },
      {
        account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
        balances: {
          available: 200,
          current: 210,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '1111',
        name: 'Plaid Saving',
        official_name: 'Plaid Silver Standard 0.1% Interest Saving',
        subtype: 'savings',
        type: 'depository'
      }
    ],
    item: {
      available_products: [ 'assets', 'balance', 'liabilities' ],
      billed_products: [ 'auth', 'identity', 'transactions' ],
      consent_expiration_time: null,
      error: null,
      institution_id: 'ins_127989',
      item_id: 'GAlLazwlP6twZykLmmLjheL4q6EKErC18Kv5E',
      optional_products: null,
      products: [ 'auth', 'identity', 'transactions' ],
      update_type: 'background',
      webhook: ''
    },
    numbers: {
      ach: [
        {
          account: '1111222233330000',
          account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
          routing: '011401533',
          wire_routing: '021000021'
        },
        {
          account: '1111222233331111',
          account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
          routing: '011401533',
          wire_routing: '021000021'
        }
      ],
      bacs: [],
      eft: [],
      international: []
    },
    request_id: 'Tbe5qKP0zAkai8S'
  }
  {
    accounts: [
      {
        account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
        balances: {
          available: 100,
          current: 110,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '0000',
        name: 'Plaid Checking',
        official_name: 'Plaid Gold Standard 0% Interest Checking',
        subtype: 'checking',
        type: 'depository'
      },
      {
        account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
        balances: {
          available: 200,
          current: 210,
          iso_currency_code: 'USD',
          limit: null,
          unofficial_currency_code: null
        },
        mask: '1111',
        name: 'Plaid Saving',
        official_name: 'Plaid Silver Standard 0.1% Interest Saving',
        subtype: 'savings',
        type: 'depository'
      }
    ],
    item: {
      available_products: [ 'assets', 'balance', 'liabilities' ],
      billed_products: [ 'auth', 'identity', 'transactions' ],
      consent_expiration_time: null,
      error: null,
      institution_id: 'ins_127989',
      item_id: 'GAlLazwlP6twZykLmmLjheL4q6EKErC18Kv5E',
      optional_products: null,
      products: [ 'auth', 'identity', 'transactions' ],
      update_type: 'background',
      webhook: ''
    },
    numbers: {
      ach: [
        {
          account: '1111222233330000',
          account_id: 'r1a8lDqaVoi5rpqzkkzMU4dkRAvv4mfdQZMn4',
          routing: '011401533',
          wire_routing: '021000021'
        },
        {
          account: '1111222233331111',
          account_id: 'zVZydrJZq1tAN1oPaaP4sv6wGM11vBu3Vxmzn',
          routing: '011401533',
          wire_routing: '021000021'
        }
      ],
      bacs: [],
      eft: [],
      international: []
    },
    request_id: 'ywOtLTrmhIgfOZS'
  }
  