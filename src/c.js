import { MyElementAB } from './b.js';

/**
 * @tagname my-mixin-abc
 */
export class MyElementABC extends getClass(MyElementAB) { };

export function getClass(superClass = MyElementAB) {

    return class extends superClass {
        static get observedAttributes() {
            return ['c'];
        }
    }
}