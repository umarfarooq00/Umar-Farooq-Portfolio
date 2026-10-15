declare module '@splidejs/react-splide' {
  import * as React from 'react'
  import { ComponentProps } from 'react'

  export interface SplideProps extends ComponentProps<'div'> {
    options?: any
    onMoved?: (newIndex: number) => void
    hasTrack?: boolean
    children?: React.ReactNode
  }

  export const Splide: React.FC<SplideProps>
  export const SplideSlide: React.FC<ComponentProps<'li'>>
  export default Splide
}

declare module '@splidejs/react-splide/css' {
  const css: string
  export default css
}
