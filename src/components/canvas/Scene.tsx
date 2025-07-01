'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'
import * as THREE from 'three'
import {Providers} from '../../../app/providers'

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Providers>
      <Canvas {...props}
        onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}>
        {/* @ts-ignore */}
          <r3f.Out />
        <Preload all />
      </Canvas>
    </Providers>
  )
}
