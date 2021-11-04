import { MyElementA } from './a.js';

/**
 * @tag my-mixin-ab
 */
export class MyElementAB extends getClass(MyElementA) { };

export function getClass(superClass = MyElementA) {

    return class extends superClass {
        static get observedAttributes() {
            return ['b'];
        }
    }
}