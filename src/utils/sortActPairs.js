const sortActPairs = (map = new Map()) => {
  if (map.size <= 1) return map;

  const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  return sortedMap;
};

export default sortActPairs;
