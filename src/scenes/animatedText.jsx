import {makeScene2D} from '@motion-canvas/2d/lib/scenes'
import {Circle, Rect,Txt, Layout, Video, Img} from '@motion-canvas/2d/lib/components'
import {createRef, makeRef, range} from '@motion-canvas/core/lib/utils'
import {all,any,chain,sequence,loop, waitFor} from '@motion-canvas/core/lib/flow'
import {linear,easeInExpo} from "@motion-canvas/core/lib/tweening";
 

import logo from '../../images/logo.svg'

function* animatedText1(view){
  const brandRefs = []
  const layout = createRef()
  const link = createRef()
  const lg = createRef()
  const brand = "PBSEVEN"
  const homepage = "www.pbseven.com"
  view.add(
    <Layout x={-250} y={-250} ref={layout} layout  fontFamily="Chivo">
      <Rect ref={lg} marginTop={-20} opacity={0}>
        <Img src={logo}/>
      </Rect>
      <Layout layout direction="column" marginLeft={20}>
      <Layout layout  >
        {
        range(brand.length).map(i => {
          return <Txt opacity={0} ref={makeRef(brandRefs,i)} fontSize="82" fill="red">{brand[i]}</Txt>
        })
      }
      </Layout>
        
        <Txt ref={link} opacity={0} fontSize="40" marginLeft={2} marginTop={-20}>{homepage}</Txt>
                
    </Layout>
    </Layout>
  );

  for(const c of brandRefs){
    yield c.opacity(1, 2, linear)
    yield c.rotation(180, 2, easeInExpo)
    yield* waitFor(0.2)
    yield lg().margin([-9],0.5,linear)
    yield lg().opacity(1,1,linear)

  }

  yield* all(
    layout().position.x(-10,1.5, easeInExpo),
    layout().position.y(-10,1.5, easeInExpo),

    // link().opacity(1,1.5),
  )
  
  for(const c of brandRefs){
    yield c.rotation(0, 1, easeInExpo)
    yield* waitFor(0.4)

  }

   yield* all(
    link().opacity(1,1,linear),
  ) 

  yield* waitFor(3)
}

export default makeScene2D(function* (view) {
  yield* animatedText1(view)

});
