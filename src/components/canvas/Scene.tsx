'use client'

import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'
import { Menu } from '@/components/dom/Menu'
import * as THREE from 'three'

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <>
      <Canvas {...props}
        onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}>
        {/* @ts-ignore */}
        <r3f.Out />
        <Preload all />
      </Canvas>
      <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    </>
  )
}
