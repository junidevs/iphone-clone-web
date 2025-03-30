import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import { Lights } from './lights.tsx';
import { Dispatch, RefObject, SetStateAction, Suspense } from 'react';
import * as THREE from 'three';
import { Loader } from '../loader/loader.tsx';
import { IphoneModel } from './iphone-model.tsx';

export type Model = {
  title: string;
  color: string[];
  img: string;
};

type ModelViewProps = {
  index: number;
  groupRef: RefObject<THREE.Group>;
  gsapType: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  controlRef: RefObject<OrbitControls | null>;
  setRotationState: Dispatch<SetStateAction<number>>;
  size: string;
  item: Model;
};

export const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}: ModelViewProps) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() =>
          setRotationState(controlRef.current?.getAzimuthalAngle() || 0)
        }
      />

      <group
        ref={groupRef}
        name={index === 1 ? 'small' : 'large'}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IphoneModel
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};
