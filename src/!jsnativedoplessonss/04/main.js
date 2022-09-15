const todoListID_1 = "12jf-76as";
const todoListID_2 = "07rt-98df";

const todoLists = [
  { id: todoListID_1, title: "What to learn", filter: "all" },
  { id: todoListID_2, title: "What to buy", filter: "all" },
];

const tasks = {
  [todoListID_1]: [
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "CSS", isDone: true },
    { id: 3, title: "JS/TS", isDone: true },
  ],
  [todoListID_2]: [
    { id: 1, title: "Milk", isDone: true },
    { id: 2, title: "Beer", isDone: true },
    { id: 3, title: "Meat", isDone: true },
  ],
};

console.log(tasks[todoListID_1].find((t) => t.id === 2));
console.log(tasks[todoListID_2].map((t) => ({ ...t, isDone: false })));
console.log(tasks[todoListID_2][0].title);

const nums = [1, 2, 3, 4, 44, 5, 6, 22];
console.log(
  nums.reduce((acc, n) => {
    return acc + n;
  }, 0)
);
console.log(nums.reduce((acc, n) => (acc > n ? acc : n)));

let students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 25,
    isMarried: false,
    scores: 100,
  },
];

console.log(
  students.reduce((acc, scr) => (acc.scores > scr.scores ? acc : scr))
);

const sts = {};

console.log(
  students.reduce((acc, el) => {
    acc[el.name] = { ...el };
    delete acc[el.name].name;
    return acc;
  }, sts)
);

console.log(
  students.reduce((acc, el) => {
    acc.push({ ...el, scores: el.scores + 10 });
    return acc;
  }, [])
);

console.log(
  students.reduce((acc, el) => {
    if (el.scores >= 100) {
      acc.push({ ...el });
    }
    return acc;
  }, [])
);
console.log(sts);
