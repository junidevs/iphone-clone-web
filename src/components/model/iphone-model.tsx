import * as THREE from 'three';
import { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { Model } from './model-view.tsx';

type IphoneModelProps = {
  scale: [x: number, y: number, z: number];
  item: Model;
  size: string;
};

type GLTFModel = {
  nodes: {
    [key: string]: THREE.Mesh; // Generic Object3D type for all nodes
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

export const IphoneModel = (props: IphoneModelProps) => {
  const {
    item,
    item: { img },
  } = props;
  const { nodes, materials } = useGLTF(
    '/models/scene.glb'
  ) as unknown as GLTFModel;

  const texture = useTexture(img);

  useEffect(() => {
    Object.entries(materials).forEach(([key, material]) => {
      const standardMaterial = material as THREE.MeshStandardMaterial;

      if (
        key !== 'zFdeDaGNRwzccye' &&
        key !== 'ujsvqBWRMnqdwPx' &&
        key !== 'hUlRcbieVuIiOXG' &&
        key !== 'jlzuBkUzuJqgiAK' &&
        key !== 'xNrofRCqOXXHVZt'
      ) {
        standardMaterial.color = new THREE.Color(item.color[0]);
      }
      standardMaterial.needsUpdate = true;
    });
  }, [materials, item]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.ttmRoLdJipiIOmf.geometry}
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.DjsDkGiopeiEJZK.geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.buRWvyqhBBgcJFo.geometry}
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
        material={materials.dxCVrUCvYhjVxqy}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
        material={materials.MHFGNLrDQbTNima}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.QvGDcbDApaGssma.geometry}
        material={materials.kUhjpatHUvkBwfM}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.vFwJFNASGvEHWhs.geometry}
        material={materials.RJoymvEsaIItifI}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.evAxFwhaQUwXuua.geometry}
        material={materials.KSIxMqttXxxmOYl}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.USxQiqZgxHbRvqB.geometry}
        material={materials.mcPrzcBUcdqUybC}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.TvgBVmqNmSrFVfW.geometry}
        material={materials.pIhYLPqiSQOZTjn}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.GuYJryuYunhpphO.geometry}
        material={materials.eShKpuMNVJTRrgg}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.pvdHknDTGDzVpwc.geometry}
        material={materials.xdyiJLYTYRfJffH}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.CfghdUoyzvwzIum.geometry}
        material={materials.jpGaQNgTtEGkTfo}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.DjdhycfQYjKMDyn.geometry}
        material={materials.ujsvqBWRMnqdwPx}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.usFLmqcyrnltBUr.geometry}
        material={materials.sxNzrmuTqVeaXdg}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      >
        <meshStandardMaterial roughness={1} map={texture} />
      </mesh>
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.vELORlCJixqPHsZ.geometry}
        material={materials.zFdeDaGNRwzccye}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.EbQGKrWAqhBHiMv.geometry}
        material={materials.TBLSREBUyLMVtJa}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.EddVrWkqZTlvmci.geometry}
        material={materials.xNrofRCqOXXHVZt}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.KSWlaxBcnPDpFCs.geometry}
        material={materials.yQQySPTfbEJufve}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.TakBsdEjEytCAMK.geometry}
        material={materials.PaletteMaterial003}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.IykfmVvLplTsTEW.geometry}
        material={materials.PaletteMaterial004}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.wLfSXtbwRlBrwof.geometry}
        material={materials.oZRkkORNzkufnGD}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.WJwwVjsahIXbJpU.geometry}
        material={materials.yhcAXNGcJWCqtIS}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.YfrJNXgMvGOAfzz.geometry}
        material={materials.bCgzXjHOanGdTFV}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.DCLCbjzqejuvsqH.geometry}
        material={materials.vhaEJjZoqGtyLdo}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.CdalkzDVnwgdEhS.geometry}
        material={materials.jlzuBkUzuJqgiAK}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.NtjcIgolNGgYlCg.geometry}
        material={materials.PpwUTnTFZJXxCoE}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.pXBNoLiaMwsDHRF.geometry}
        material={materials.yiDkEwDSyEhavuP}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.IkoiNqATMVoZFKD.geometry}
        material={materials.hiVunnLeAHkwGEo}
        scale={0.01}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.rqgRAGHOwnuBypi.geometry}
        material={materials.HGhEhpqSBZRnjHC}
        scale={0.01}
      />
    </group>
  );
};

useGLTF.preload('/models/scene.glb');
