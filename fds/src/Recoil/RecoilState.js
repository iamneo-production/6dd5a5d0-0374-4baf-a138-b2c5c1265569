import { atom, selector } from "recoil";

export const getUserAtom = atom({
  key: "getUserAtom",
  default: [],
});

export const getReportsAtom = atom({
  key: "getReportsAtom",
  default: [],
});

export const loggedUserSelector = selector({
  key: "loggedUserSelector",
  get: ({ get }) => {
    const users = get(getUserAtom);
    const acc = localStorage.getItem("accountNo");

    const o = users.find((user) => user.accountNo === acc);
    if (o) {
      return o;
    } else {
      return [];
    }
  },
});

export const reportsByAccountSelector = selector({
  key: "reportsByAccountSelector",
  get: ({ get }) => {
    const reports = get(getReportsAtom);
    const acc = localStorage.getItem("accountNo");
    const userReport = reports.filter(
      (user) => user.accountNo === acc
    );

    if (userReport) {
      return userReport;
    } else {
      return [];
    }
  },
});

export const activeUser = atom({
  key: "activeUserAtom",
  default: {
    id: 0,
    name: "0",
    role: "dummy",
    email: "dummy@gmail.com",
    password: "dummy",
    accountNo: "dummy",
    accountType: "Savings",
    phoneNo: "dummy",
    debitCardNo: "12345",
    transactions: [],
    reports: [],
    domestic: {
      online: true,
      pos: true,
      tapnpay: true,
      atm: true,
    },
    international: {
      online: true,
      pos: true,
      tapnpay: true,
      atm: true,
    },
    card: {
      card: 76734567890,
      name: "dummy",
      cvv: 667,
      expiry: "21/30",
      pin: "5678",
      freeze: true
    }
  },
});

export const toggleChangeAtom = atom({
  key: "toggleChangeAtom",
  default: 0,
});

export const transactionsByAccountSelector = selector({
  key: "transactionsByAccountSelector",
  get: ({ get }) => {
    const users = get(getUserAtom);
    const acc = localStorage.getItem("accountNo");
    const user = users.find((user) => user.accountNo === acc);

    if (user) {
      return user.transactions; //not returning user.transactions
    } else {
      return [];
    }
  },
});

export const userByAccountSelector = selector({
  key: "userByAccountSelector",
  get: ({ get }) => {
    const users = get(getUserAtom);
    const acc = localStorage.getItem("accountNo");

    const user = users.find((user) => user.accountNo === acc);

    if (user) {
      return user; //not returning user.transactions
    } else {
      return {
        id: 1,

        name: "User1",

        role: "customer",

        email: "customer1@gmail.com",

        password: "customer1",

        accountNo: "70001",

        accountType: "Savings",

        phoneNo: "7013322",

        debitCardNo: "12345",

        transactions: [],

        reports: [],

        domestic: {
          online: true,

          pos: true,

          tapnpay: false,

          atm: true,
        },

        international: {
          online: true,

          pos: true,

          tapnpay: false,

          atm: false,
        },

        card: {
          card: 1234567890,

          pin: 1234,

          freeze: false,
        },
      };
    }
  },
});
