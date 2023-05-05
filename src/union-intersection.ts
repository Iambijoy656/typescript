type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertices: string;
//   experience: number;
// };

type JuniorDeveloper = NoobDeveloper & {
  expertices: string;
  experience: number;
};

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExpertices: number;
  level: "Junior" | "Mid" | "senior";
};



const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Bijoy Chandro Das",
  expertices: "javascript",
  experience: 1,
};

const developer: NextLevelDeveloper = {
  name: "Next vai",
  expertices: "Typescript",
  experience: 2,
  leadershipExpertices: 2,
  level:"Mid"
};
