import {makeScene2D} from '@motion-canvas/2d/lib/scenes'
import {Circle, Rect,Txt, Layout, Video} from '@motion-canvas/2d/lib/components'
import {createRef, makeRef, range} from '@motion-canvas/core/lib/utils'
import {all,any,chain,sequence,loop, waitFor} from '@motion-canvas/core/lib/flow'
import {linear} from '@motion-canvas/core/lib/tweening'

export default makeScene2D(function* (view) {
  const rects = []

  yield view.add(
    range(19).map(i => 
      <Rect ref={makeRef(rects,i)}
            fill="#666"
            radius={8}
            height={100}
            width={100}
            x={(i - 9) * 100}
            y={480}
            />
    )
  )

  for(const rect of rects){
    yield rect.position.y(-480, 0.6, linear)
    yield* waitFor(0.016)
  }

  yield* waitFor(5)

});
