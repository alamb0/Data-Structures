// Time complexity: O(n^2) Space complexity O(1)
const twoSumBruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

// Time complexity: O(n) Space complexity O(n)
const twoSumOptimized = (nums, target, type = "map") => {
  const map = () => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const valueToFind = target - nums[i];
      if (map.has(valueToFind)) {
        return [map.get(valueToFind), i];
      } else {
        map.set(nums[i], i);
      }
    }

    return [];
  };

  const obj = () => {
    const valuesIndex = {};

    for (let i = 0; i < nums.length; i++) {
      const valueToFind = target - nums[i];
      if (valuesIndex.hasOwnProperty(valueToFind)) {
        return [valuesIndex[valueToFind], i];
      } else {
        valuesIndex[nums[i]] = i;
      }
    }
    return [];
  };

  const types = {
    map: map,
    obj: obj,
  };

  return types[type]() || "type is undefined";
};

const nums = [2, 7, 11, 15],
  target = 9;
const res1 = twoSumBruteForce(nums, target);
console.log(res1);
const res2 = twoSumOptimized(nums, target);
console.log(res2);
const res3 = twoSumOptimized(nums, target, "obj");
console.log(res3);
