/* @ngInject */
function AdderFactory() {
  return {
    add(a, b) {
      return a + b;
    },
  };
}

export default ['AdderFactory', AdderFactory];
