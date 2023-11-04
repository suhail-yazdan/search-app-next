import Card from '@/components/Card'
import Widget from '@/components/Widget'

export default function Home() {
  return (
      <>
        <header className='h-[320px] bg-[url(../public/images/clouds.jpg)] bg-center bg-cover'>
          <div className='flex items-center justify-center h-full'>
            <Widget />
          </div>
        </header>
        <main>
          <div>
            <Card />
          </div>
        </main>
      </>
    )
}
