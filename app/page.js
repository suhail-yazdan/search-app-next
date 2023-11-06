import Cards from '@/components/Cards'
import Widget from '@/components/Widget'

export default function Home() {
  return (
      <>
        <header className='h-[320px] bg-[url(../public/images/clouds.jpg)] bg-center bg-cover border-t'>
          <div className='flex flex-col items-center h-full mt-40'>
            <Widget />
          </div>
        </header>
        <main>
          <div className="pt-20">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </main>
      </>
    )
}
