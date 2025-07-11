import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const Section = (props) => {
  const { children } = props;
  return <section className={`h-screen w-screen max-w-screen-2xl mx-auto justify-center`}>{children}</section>;
}

export const Interface = () => {
  return (
    <>
      <div>
        {/* first row */}
        <FirstRow />
        {/* second row */}
        <SecondRow />
      </div>
    </>
  )
}

const FirstRow = () => {
  return (
    <Section>
      <div className='relative h-screen w-screen'>
        <View className='relative h-screen w-screen'>
          <Suspense fallback={null}>
            <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
            <Common color={'lightpink'} />
          </Suspense>
        </View>
      </div>
    </Section>
  )
}
const SecondRow = () => {
  return (
    <Section>
      <div className='relative h-screen w-full'>
        <View className='relative h-full'>
          <Suspense fallback={null}>
            <Duck route='/blob' scale={2} position={[0, -1.6, 0]} />
            <Common color={'lightblue'} />
          </Suspense>
        </View>
      </div>
    </Section>
  )
}
