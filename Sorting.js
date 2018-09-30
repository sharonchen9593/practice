const arr = [5, 9, 8, 16, 1, 2, 7, 10, 33, 22, 56, 3, 11, 4, 2];

const insertionSort = (arr) => {
    // start at 2nd item
    let sortingIndex = 1;

    while (sortingIndex < arr.length) {

        const currentItem = arr[sortingIndex];
        let previousIndex = sortingIndex - 1;

        while (currentItem < arr[previousIndex] && previousIndex >=0 ) {
            arr[previousIndex+1] = arr[previousIndex];
            arr[previousIndex] = currentItem

            previousIndex = previousIndex - 1;
        }

        sortingIndex = sortingIndex + 1;
    }

    return arr;
}

// insertionSort(arr)

const mergeSort = (arr) => {
    const left = 0;
    const right = arr.length - 1;
    const middle = Math.ceil(right/2);

    if (left < right) {
        const leftArr = arr.slice(left, middle)
        const rightArr = arr.slice(middle, right + 1)

        return merge(mergeSort(leftArr), mergeSort(rightArr))
    } else {
        return arr;
    }
}

const merge = (left, right) => {
    const sortedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length || rightIndex < right.length) {
        const leftItem = left[leftIndex];
        const rightItem = right[rightIndex];
        if (leftItem < rightItem || (!rightItem || rightItem === 0)) {
            sortedArr.push(leftItem);
            leftIndex += 1;
        } else if (rightItem < leftItem || (!leftItem || leftItem === 0)) {
            sortedArr.push(rightItem);
            rightIndex += 1;
        } else {
            // else if same
            sortedArr.push(leftItem);
            sortedArr.push(rightItem);
            leftIndex += 1;
            rightIndex += 1;
        }
    }
    return sortedArr;
}

mergeSort(arr)
