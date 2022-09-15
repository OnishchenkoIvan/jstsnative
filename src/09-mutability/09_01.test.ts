function increaseAge(u: UserType) {
  u.age++;
}
type UserType = {
  name: string;
  age: number;
  adress: { title: string };
};
test("reference type test", () => {
  var user: UserType = {
    name: "Dimych",
    age: 32,
    adress: {
      title: "Minsk",
    },
  };

  increaseAge(user);

  expect(user.age).toBe(33);
  const superman = user;

  superman.age = 1000;
  expect(user.age).toBe(1000);
});

test("array test", () => {
  var users = [
    {
      name: "Dimych",
      age: 32,
    },
    {
      name: "Dimych",
      age: 32,
    },
  ];
  var admins = users;
  admins.push({ name: "Bandygan", age: 10 });

  expect(users[2]).toEqual({ name: "Bandygan", age: 10 });
});

test("value type test", () => {
  var usersCount = 100;

  var adminsCount = usersCount;

  adminsCount = adminsCount + 1;

  expect(adminsCount).toEqual(101);
});

test("reference type test1", () => {
  var user: UserType = {
    name: "Dimych",
    age: 32,
    adress: {
      title: "Minsk",
    },
  };

  let addr = user.adress;

  let user2: UserType = {
    name: "Natash",
    age: 30,
    adress: user.adress,
  };

  user2.adress.title = "Kanary";

  expect(user.adress.title).toBe("Kanary");
});

test("reference type array test", () => {
  const adress = {
    title: "Minsk",
  };

  var user: UserType = {
    name: "Dimych",
    age: 32,
    adress: adress,
  };

  let user2: UserType = {
    name: "Natash",
    age: 30,
    adress: adress,
  };

  const users = [user, user2, { name: "Misha", age: 18, adress: adress }];

  const admins = [user, user2];
  admins[0].name = "Dmitry";

  expect(users[0].name).toBe("Dmitry");
});
