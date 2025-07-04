'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'
import * as THREE from 'three'
import { Menu } from '@/components/dom/Menu'
import { useState, useEffect } from 'react'

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  const [section,  setSection] = useState(0)
  const [menuOpened,setMenuOpened] = useState(false)

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <Canvas {...props}
        onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}>
        {/* @ts-ignore */}
        <r3f.Out />
        <Preload all />
      </Canvas>
      <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    </>
  )
}
