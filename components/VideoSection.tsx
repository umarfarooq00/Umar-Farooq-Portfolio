import type { VideoProps } from '@/types/type'

/** Full-width video (uploaded in Sanity → Video Showcase). Plays muted on loop. */
export default function VideoSection({ data }: { data?: VideoProps }) {
  const videoFile = data?.videoFile?.asset?.url
  if (!videoFile) return null

  return (
    <section className="overflow-hidden bg-black">
      <div className="relative h-100 w-full overflow-hidden md:h-162.5">
        <video
          src={videoFile}
          autoPlay
          muted
          playsInline
          loop
          aria-label={data?.sectionTitle || 'Showcase video'}
          className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        />
      </div>
    </section>
  )
}
