import {makeScene2D} from '@motion-canvas/2d/lib/scenes'
import {Circle, Rect,Txt, Layout, Video, Img} from '@motion-canvas/2d/lib/components'
import {createRef} from '@motion-canvas/core/lib/utils'
import {all,any,chain,sequence,loop, waitFor} from '@motion-canvas/core/lib/flow'
import {linear,easeInExpo} from "@motion-canvas/core/lib/tweening";
 

import logo from '../../images/logo.svg'

export default makeScene2D(function* (view) {
  const layout = createRef()
  const link = createRef()
  const lg = createRef()
  const brand = "PBSEVEN"
  const homepage = "www.pbseven.com"
  view.add(
    <Layout x={850} ref={layout} layout  fontFamily="Chivo">
      <Rect ref={lg} marginTop={-20}>
        <Img src={logo}/>
      </Rect>
      <Layout layout direction="column"  marginLeft={20}>
        <Txt fontSize="82" fill="red">{brand}</Txt>
        <Txt ref={link} opacity={0} fontSize="40" marginLeft={2} marginTop={-20}>{homepage}</Txt>
                
      </Layout>
    </Layout>
  );

  yield* all(
    layout().position.x(-10,1.5),
    // link().opacity(1,1.5),
  )

  yield* all(
    layout().position.y(10,2),
    link().margin([-10,10,100,0],2,easeInExpo),
    lg().margin([0,0,0,0],2,easeInExpo),
    link().opacity(1,2,linear),
  )

  yield* waitFor(3)

});
