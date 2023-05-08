//Mocking
// Json placeholder

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getTodo = async () : Promise<ITodo>=> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};

const getTodoData = async () : Promise<void>=>{
const result = await getTodo();
console.log(result);
}

getTodoData()

//----------------------------------------------------------------//

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetching data";
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};

const getPromseDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};

const getPromseDataString = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

type DataType = {
  data: string;
};

const makePromiseDataType = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { data: "Data is fetching data" };
    if (data) {
      resolve(data);
    } else {
      reject("failed to fetch data");
    }
  });
};
const getPromseDataDataType = async (): Promise<DataType> => {
  const data = await makePromiseDataType();
  return data;
};
