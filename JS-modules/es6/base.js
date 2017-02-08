

// import { productId,productName } from './module1';
// console.log(productId);
// console.log(productName);

//---------------------------------------------

// import { productId,productName as name } from './module1';

// // console.log(productId);
// // console.log(productName);

// productId = 10;  // error , we can't change reference of imported member , but we can mutate

//---------------------------------------------

// import { product,showProduct } from './module1';
// product.id = 321; // can mutate

// showProduct(); // 321

//---------------------------------------------

// // import {add,remove,get,update} from './module1';
// // or
// import * as crud from './module1';
// crud.add();

//---------------------------------------------

// import prodName, { productId } from './module1';

import MainComp, { Comp1,Comp2} from './component';

//---------------------------------------------
