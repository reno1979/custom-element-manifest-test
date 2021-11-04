/**
 * @tagname my-mixin-a
 */
 export class MyElementA extends getClass(HTMLElement) { }

 export function getClass(superClass = HTMLElement) {
 
     return class extends superClass {
        static get observedAttributes() {
            return ['a'];
        }
     }
}