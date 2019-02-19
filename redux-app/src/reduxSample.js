
const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  };
};

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amount
    }
  };
};

const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
      return [...oldListOfClaims, action.payload];
      }
  return oldListOfClaims;
};

const accounting = (money = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
      return money - action.payload.amount;
      } else if (action.type === 'CREATE_POLICY') {
       return money + action.payload.amount;     
                 }
  return money;
};

const policies = (pList = [], action) => {
  if (action.type === 'CREATE_POLICY') {
      return [...pList, action.payload.name];
      } else if (action.type === 'DELETE_POLICY') {
      return pList.filter(name => name !== action.payload.name);           
                 }
  return pList;
};

// console.log(Redux);
const { createStore, combineReducers } = Redux;

const ourDepts = combineReducers({
  claimsHistory: claimsHistory,
  accounting: accounting,
  policies: policies
});

const store = createStore(ourDepts);

const action = createPolicy("Alex", 20);

store.dispatch(action);
store.dispatch(createPolicy("Ben", 40));
store.dispatch(createPolicy("Chris", 30));
store.dispatch(createClaim("Ben", 90));
store.dispatch(deletePolicy("Ben"));

console.log(store.getState());

