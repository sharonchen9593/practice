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

insertionSort(arr)
