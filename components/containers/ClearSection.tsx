import Accordion from "@/components/containers/Accordion";

const ClearSection = () => {
  return (
    <div className='flex flex-col justify-center items-center p-5 gap-5 font-heading bg-gray-100'>
      <div className='flex flex-col justify-center items-center, p-5 gap-5'>
        <h1 className='text-center text-[36px] font-bold'>Let’s Clear Things Up</h1>
        <p className='text-center text-[16px] leading-8'>I’ve answered a few questions that usually come up when working with a frontend developer like me.</p>
      </div>
      <section>
        <Accordion />
      </section>
    </div>
  )
}

export default ClearSection