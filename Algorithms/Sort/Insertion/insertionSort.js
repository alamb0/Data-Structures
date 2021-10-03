const arr = [1, 20, 30, 40, 50, 60, 70, 2, 3, 10, 90, 100];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
};

const result = insertionSort(arr);
console.log(result);
console.log(result === arr.sort((a, b) => a - b));
