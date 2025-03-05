import { ThreeElements } from '@react-three/fiber'
import { Object3DNode } from '@react-three/fiber';
import { Water } from 'three-stdlib'


declare global {
  namespace React {
    namespace JSX {
        interface IntrinsicElements extends ThreeElements {
          water: Object3DNode<Water, typeof Water>;

        }
    }
  }
}