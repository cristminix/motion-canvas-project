import {makeScene2D} from '@motion-canvas/2d'
import {all, waitFor} from '@motion-canvas/core/lib/flow'
import {createRef} from '@motion-canvas/core/lib/utils'
import {invert} from "@motion-canvas/2d/lib/partials";
import {
	Rect,Txt,Img, Layout,Circle
} from '@motion-canvas/2d/lib/components'

import source from '../../images/motion-canvas.svg'

export default makeScene2D(function* (view){
	const root = createRef()
	const one = createRef()
	const two = createRef()
	const image = createRef()
	const circle = createRef()

	const Tile = ({light, ...props}) => (
		<Rect
			fill={light? '#141414' : '#101010'}
			ref={one}
			radius={8}
			height="100%"
			shrink={1}
			{...props}
		/>
	)

	yield view.add(<>
		<Rect ref={root}
			layout="root"
			radius={24}
			height={640}
			width="75%"
			padding={24}
			gap={24}
			direction="column"
			>
			<Layout width="100%" height="50%" gap={24}>
				<Tile light ref={one} width={1200}/>
				<Tile alignItems="center" justifyContent="center" ref={two} ratio={1}>
					<Img ref={image} src={source} height={160}/>
				</Tile>
				<Tile light width={1000}/>
			</Layout>

			<Layout width="100%" height="50%" gap={24}>
				<Tile width={1000}>
					<Txt fill="rgba(255, 255,255, 0.6)" 
						 textWrap 
						 fontSize={32} 
						 lineHeight={52}
						 margin={48}>
						 	Lorem ipsum dolor sit amet, consectutor
						 </Txt>
				</Tile>
				<Tile light ref={two} width={1400}/>
				<Tile width={600}/>


			</Layout>
		</Rect>
		<Circle ref={circle} width={100} height={100} fill="red"/>
	</>)

	// circle().absolutePosition(()=>image().absolutePosition())
	yield* image().filters.grayscale(1,1)
	// console.log(root())
	yield* root().width(1200, 1)
	yield* root().rotation(-12, 1)

	yield* all(
		one().width(200, 2),
		two().width(100, 2),
		image().rotation(-90, 1)
	)

	yield* waitFor(5)
})