/**
 * Given two singly linked lists, determine if the two intersect. Return the intersecting node.
 *
 * Hints: 20, 45, 55, 65, 76, 93, 111, 120, 129
 * 
 * Time Complexity:
 * Space Complexity:
 **/

const getTailAndSize = (list) => {
    let size = 0;
    let tail = null;
    let current = list;

    while (current) {
        size++;
        if (!current.next) {
            tail = current;
        }
        current = current.next;
    }

    return { size, tail};
}

const makeLongerListShorter = (longer, difference) => {
    while (difference !== 0) {
        longer = longer.next;
        difference--;
    }

    return longer;
}

const intersection = (list1, list2) => {
    const list1Results = getTailAndSize(list1);
    const list2Results = getTailAndSize(list2);

    if (list1Results.tail !== list2Results.tail) {
        return false;
    }

    const difference = Math.abs(list1Results.size - list2Results.size);
    const shorter = list1Results.size > list2Results.size ? list2 : list1;
    let longer = list1Results.size < list2Results.size ? list1 : list2;
    longer = makeLongerListShorter(longer, difference);

    let current1 = list1;
    let current2 = list2;

    while (current1 !== null) {
        if (current1 === current2) {
            return current1;
        }

        current1 = current1.next;
        current2 = current2.next;
    }

    return false;
}

