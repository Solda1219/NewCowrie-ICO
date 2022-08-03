const INITIAL_STATE = {
  chainId: 1,

};
const network = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SWITCH": {
      console.log(action.chainId);
      return {
        chainId: parseInt(action.chainId),
      };
    }
    default: return state;
  }
}

export default network



