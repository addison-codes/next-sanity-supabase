export default function Video({ block }: any) {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="mt-10 relative max-w-5xl mx-auto">
            <iframe
              src={block.url.replace('watch?v=', 'embed/')}
              frameBorder={'0'}
              width={'100%'}
              allowFullScreen
              className="aspect-video"
            />
            <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
              <div className="w-48 h-48 rounded-lg bg-background/10" />
            </div>
            <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  )
}
