import Cards from '@/components/Cards'
import Widget from '@/components/Widget'

export default function Home() {
  return (
      <>
        <header className='h-[320px] bg-[url(../public/images/clouds.jpg)] bg-center bg-cover'>
          <div className='flex flex-col items-center justify-center h-full'>
            <Widget />
          </div>
        </header>
        <main>
          <div className="pt-20">
            <Cards />
          </div>
        </main>
      </>
    )
}
