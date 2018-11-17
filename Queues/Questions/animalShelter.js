/**
 * Animal shelter with cats and dogs has a strict first in first out policy. People can choose
 * either cat or dog but not which one. Create a data structure that will maintain the system
 * and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
 *
 * Hints: 22, 56, 63
 *
 * Time Complexity:
 * Space Complexity:
 **/

class Animal {
    constructor(name, order) {
        this.name = name;
        this.order = order;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enQ(animal) {
        if (!this.head) {
            this.head = animal;
            this.tail = animal;
            return this.head;
        }

        this.tail.next = animal;
        this.tail = animal;
    }

    deQ() {
        const dequed = this.head;
        this.head = this.head.next;
        return dequed;
    }

    peek() {
        return this.head;
    }
}

class AnimalShelter {
    constructor() {
        this.cats = new Queue();
        this.dogs = new Queue();
        this.order = 0;
    }

    addCat(name) {
        this.order = this.order + 1;
        const animal = new Animal(name, this.order)
        this.cats.enQ(animal);
    }

    addDog(name) {
        this.order = this.order + 1;
        const animal = new Animal(name, this.order)
        this.dogs.enQ(animal);
    }

    removeAny() {
        const cat = this.cats.peek();
        const dog = this.dogs.peek();
        if (cat && dog && cat.order < dog.order) {
            return this.removeCat();
        } else {
            return this.removeDog();
        }
    }

    removeCat() {
        return this.cats.deQ().name;
    }

    removeDog() {
        return this.dogs.deQ().name;
    }
}

const x = new AnimalShelter();
x.addCat('fluffy')
x.addCat('lucky')
x.addDog('mochi')
x.addCat('tigger')
x.addDog('ice')
x.addDog('leo')

x.removeAny()
x.removeDog()
x.removeCat()
x.removeCat()
x.removeAny()
