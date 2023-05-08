type a1 = number;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;

// nasted conditional type

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;


  //----------------------------------------------------------------//
  type Sheik ={
    wife1: string
    wife2: string
  }
type A = keyof Sheik; // 'wife1' \  'wife2'
                    // 'wife1' extends 'wife1 \ 'wife2'
                    
  type CheckProperties<T,k> = k extends keyof Sheik ?true : false
  type CheckWife1 = CheckProperties<Sheik,'wife1'>