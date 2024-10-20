import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Form({ block }: any) {
  if (block.form === 'newsletter') {
    return <NewsletterForm block={block} />
  } else if (block.form === 'contact') {
    return <ContactForm block={block} />
  }
}

export function NewsletterForm({ block }: any) {
  return (
    <>
      {/* Hero */}
      <div className="container py-24 lg:py-32">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {block.label}
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              {block.heading}{' '}
            </p>
            <div className="mt-5 lg:mt-8 flex flex-col sm:items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full max-w-lg  lg:w-auto">
                <Input placeholder="Enter your email" type="email" />
              </div>
              <Button className="w-min">Get Newsletter</Button>
            </div>
          </div>
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  )
}

export function ContactForm({ block }: any) {
  return (
    <>
      {/* Hero */}
      <div className="container py-24 lg:py-32">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {block.label}{' '}
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              {block.heading}{' '}
            </p>
            <div className="mt-5 lg:mt-8 flex flex-wrap flex-col sm:items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full flex gap-2 ">
                <Input placeholder="Enter your email" type="email" />
                <Input placeholder="Enter your name" type="name" />
              </div>
              <Textarea placeholder="Enter your message" />
              <Button className="w-min">Contact Us</Button>
            </div>
          </div>
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  )
}
