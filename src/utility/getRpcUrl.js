import random from "lodash/random";

// Array of available nodes to connect to
export const nodes ={
  bsc: [
  process.env.REACT_APP_BSC_NODE_1,
  process.env.REACT_APP_BSC_NODE_2,
  process.env.REACT_APP_BSC_NODE_3,
],
erc:[process.env.REACT_APP_ERC_NODE]};

const getNodeUrl = {
  bsc: () => {
    const randomIndex = random(0, nodes.bsc.length - 1);
    return nodes.bsc[randomIndex];
  },
  erc: () => {
    return nodes.erc[0];
  },
};

export default getNodeUrl;
