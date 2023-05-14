import {makeScene2D} from '@motion-canvas/2d/lib/scenes'
import {Circle, Rect,Txt, Layout, Video, Img} from '@motion-canvas/2d/lib/components'
import {createRef} from '@motion-canvas/core/lib/utils'
import {all,any,chain,sequence,loop} from '@motion-canvas/core/lib/flow'
import {linear,easeInExpo} from "@motion-canvas/core/lib/tweening";
const getDrawSize = (iw, ih, w, h)=>{
  const scale = Math.max(w / iw, h / ih);
  const drawWidth = iw * scale;
  const drawHeight = ih * scale;

  return [drawWidth, drawHeight]
}



export default makeScene2D(function* (view) {
  const layout = createRef()
  const video1 = createRef()
  const video2 = createRef()
  const video3 = createRef()
  const polaroid1 = createRef()
  const polaroid2 = createRef()
  const polaroid3 = createRef()
  const caption1 = "Panama Beach"
  const caption2 = "Love Beach"
  const caption3 = "Coconut Trees"
  const canvasWidth = 1080
  const canvasHeight = 720
  const [idw,idh] = getDrawSize(canvasWidth, canvasHeight, 0.3201 *(0.9636 *canvasWidth), 0.7229 * (0.8843 *canvasHeight))
  // const text = createRef()
  // const text2 = createRef()
  // const video = createRef()
  // let caption = "Hello "
  // let caption2 = "World "
  const rotate = 1000
  const rotate2 = -150
  const rotate3 = 150
  view.add(
    <Layout ref={layout}>
      <Rect ref={polaroid1} layout direction="column" 
            shadowBlur={16} 
            shadowColor={'rgba(0, 0, 0, 0.22)'}
            x={100}
            y={810}
            width={350}
            height={420}
            rotation={0}
            padding={20}
            shadowOffset={[0,7]}
            
            fill="#ffffff">
              <Rect clip height={500}>
              <Video ref={video1} src="./assets/pexels-4782135.mp4" width={800} margin={[0,-100]} />
                
              </Rect>
              <Layout justifyContent="center" padding={[10,0,0,0]}>
              <Txt fill="#666"  fontFamily="Caveat Medium">{caption1}</Txt>
              </Layout>
      </Rect>
      <Rect ref={polaroid2} layout direction="column" 
            shadowBlur={16} 
            shadowColor={'rgba(0, 0, 0, 0.22)'}
            x={100}
            y={810}
            width={350}
            height={420}
            rotation={0}
            shadowOffset={[0,7]}
            padding={20}
            fill="#ffffff">
              <Rect clip height={500}>

              <Video ref={video2} src="./assets/pexels-3576378.mp4" width={800}  margin={[0,-100]}/>
              </Rect>

              <Layout justifyContent="center" padding={[10,0,0,0]}>
              <Txt fill="#666"  fontFamily="Caveat Medium">{caption2}</Txt>
              </Layout>
      </Rect>
      <Rect ref={polaroid3} layout direction="column" 
            shadowBlur={16} 
            shadowColor={'rgba(0, 0, 0, 0.22)'}
            x={400}
            y={800}
            width={350}
            height={420}
            rotation={rotate3 * Math.PI / 180}
            shadowOffset={[0,7]}
            padding={20}
            fill="#ffffff">
              <Rect clip height={500}>

              <Video ref={video3} src="./assets/pexels-2829177.mp4" width={800}  margin={[0,-100]}/>
              </Rect>

              <Layout justifyContent="center" padding={[10,0,0,0]}>
              <Txt fill="#666"  fontFamily="Caveat Medium">{caption3}</Txt>
              </Layout>
      </Rect>
    </Layout>
  );

  // video1().play() 
  // video2().play() 
  // video3().play() 
  yield* all(
    polaroid1().rotation(rotate * Math.PI / 180,1.5,easeInExpo),
    polaroid1().position.y(0,1.5),

  )
  yield* all(
    polaroid1().position.x(-300,1.5, linear),
    polaroid1().position.y(10,1, linear),
    polaroid1().rotation((rotate-100) * Math.PI / 180,1.5,easeInExpo),

    polaroid2().rotation(rotate2 * Math.PI / 180,1.5,easeInExpo),
    polaroid2().position.y(100,1.5),
    )
  yield* all(
    polaroid2().position.x(20,1),
    polaroid3().rotation(rotate3 * Math.PI / 180,1.2,easeInExpo),
    polaroid3().position.y(10,1.2),
  )
  yield* all(
    polaroid3().position.x(300,1.2),

    )
  yield* all(
    polaroid1().position.x(-800,1.2),
    polaroid2().position.x(-800,1.2),
    polaroid3().position.x(-800,1.2),
  )

});
