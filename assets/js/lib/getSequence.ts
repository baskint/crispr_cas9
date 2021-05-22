const getDNAStrands = () => {
  const strands = ['A', 'C', 'G', 'T'];

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('in process')
      resolve(strands);
    }, 1000);
  });

  return strands;
};

export {
  getDNAStrands
}
