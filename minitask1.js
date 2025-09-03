// console.log(object.str[3][1][2].man[0].the.name.of.us);
// variabel object aksesnya, hasilnya "Koda"

// console.log(hello.world);
// "Hello World"

// console.log(my[0].favourite[3].fruit.is);
// apple

//soal 1
let object = {
  str: [
    [
      ["el", "yam"],
      ["5", "6"],
    ],
    [
      ["vil", "gil"],
      ["5", "6"],
    ],
    [
      ["test", "makan"],
      ["5", "6"],
    ],
    [
      ["bum", "pow"],
      [
        "5",
        "6",
        {
          man: [
            {
              the: {
                name: {
                  of: {
                    us: "Koda",
                  },
                },
              },
            },
          ],
        },
      ],
    ],
  ],
};

console.log(object.str[3][1][2].man[0].the.name.of.us);

//soal 2
let hello = {
  world: "Hello World",
};

console.log(hello.world); // output: Hello World

//soal 3
let my = [
  {
    favourite: [
      "basket",
      "mlbb",
      "renang",
      {
        fruit: {
          is: "Apple",
        },
      },
    ],
  },
];

console.log(my[0].favourite[3].fruit.is); // Output: Apple
