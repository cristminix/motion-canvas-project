import {makeScene2D} from '@motion-canvas/2d/lib/scenes'
import {Circle, Rect,Txt, Layout, Video} from '@motion-canvas/2d/lib/components'
import {createRef} from '@motion-canvas/core/lib/utils'
import {all,any,chain,sequence,loop} from '@motion-canvas/core/lib/flow'

export default makeScene2D(function* (view) {
  const layout = createRef()
  const text = createRef()
  const text2 = createRef()
  const video = createRef()
  let caption = "Hello "
  let caption2 = "World "

  view.add(
    <Layout ref={layout}>
    <Video ref={video} src="./videos/7184619010053377306.mp4" loop={true}/>
    
    <Txt lineHeight={'100%'} ref={text}>
      {caption}
    </Txt>
    <Txt lineHeight={'100%'} fill="red" ref={text2}>
      {caption2}
    </Txt>,
    </Layout>
  );

  // yield* text().rotation(15,.5)
  video().play()
  yield* text().scale([10,10],2)

  

  yield* text().position.x(1945,1).to(-1930,1)
  yield* text().position.x(0,1)
  yield* text().scale([2,2],1),
  yield* text2().scale([12,12],1),
  yield* video().rotation(0,.5).to(360,1)

  yield* video().position.y(1945,1).to(-1930,1)
  yield* text().position.y(1945,1).to(-1930,1)

});
