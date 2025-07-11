import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Submarine(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/submarine.glb')
  animations[0].name = "Submarine";
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["Submarine"].reset().play();
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.428}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Coral_reef_156" position={[0, -1.141, 0]} scale={5.789}>
                <group name="RootNode0_0" scale={0.01}>
                  <group name="geo1_1">
                    <group name="coral_reef_b2_157">
                      <mesh
                        name="Object_7"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_7.geometry}
                        material={materials.material0}
                      />
                    </group>
                    <group name="coral_reef_a3_158">
                      <mesh
                        name="Object_9"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_9.geometry}
                        material={materials.material1}
                      />
                    </group>
                  </group>
                </group>
              </group>
              <group name="School_of_fish_159" position={[-1.081, 2.448, 0]} scale={0.118}>
                <group name="School_of_fish_Skeleton_155" scale={0.01}>
                  <group name="geo1_2">
                    <group name="all_fish12_3" />
                  </group>
                  <group name="skeletal3_4">
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <skinnedMesh
                        name="Object_166"
                        geometry={nodes.Object_166.geometry}
                        material={materials.material0_0}
                        skeleton={nodes.Object_166.skeleton}
                      />
                      <skinnedMesh
                        name="Object_169"
                        geometry={nodes.Object_169.geometry}
                        material={materials.material1_0}
                        skeleton={nodes.Object_169.skeleton}
                      />
                      <skinnedMesh
                        name="Object_172"
                        geometry={nodes.Object_172.geometry}
                        material={materials.material2}
                        skeleton={nodes.Object_172.skeleton}
                      />
                      <skinnedMesh
                        name="Object_175"
                        geometry={nodes.Object_175.geometry}
                        material={materials.material3}
                        skeleton={nodes.Object_175.skeleton}
                      />
                      <group name="node3_160_correction">
                        <group name="node3_160" />
                      </group>
                      <group name="node4_161_correction">
                        <group name="node4_161" />
                      </group>
                      <group name="node5_162_correction">
                        <group name="node5_162" />
                      </group>
                      <group name="node6_163_correction">
                        <group name="node6_163" />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Submarine_164"
                position={[0, 2.288, 0]}
                rotation={[0, -0.434, 0]}
                scale={0.455}>
                <group name="RootNode0_152">
                  <group name="sub_Mesh1_153" scale={0.01}>
                    <group name="import12Submarine_UV2_154" position={[0, 29.419, -25.659]}>
                      <group name="node3_165">
                        <mesh
                          name="Object_181"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_181.geometry}
                          material={materials.material0_1}
                        />
                      </group>
                      <group name="node4_166">
                        <mesh
                          name="Object_183"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_183.geometry}
                          material={materials.material1_1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/submarine.glb')
