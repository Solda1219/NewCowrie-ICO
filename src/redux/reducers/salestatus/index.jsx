const INITIAL_STATE = {
  price: 0,
  ethBalance: 0,
  prsBalance: 0,
  newcowBalance: 0,
  totalSupply: 0,
  remainSupply: 0,
  sold:0,
  live:false
};

const saleStatus =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_SALE_STATUS": {
      return action.newStatus
    }
    default: return state;
  }
}

export default saleStatus



