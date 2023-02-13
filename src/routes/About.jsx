import { AiFillSignal, AiFillThunderbolt, AiFillHdd } from 'react-icons/ai'


const About = () => {
    return (
      <div className='rounded-div my-4'>
        <div className='flex flex-col items-center text-primary'>
          <h1 className='text-accent text-2xl font-bold mb-2 mt-10'>Who We Are</h1>
          <p className='my-4 mx-11 text-xl'>
            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          </p>
          <div className='flex flex-col md:flex-row py-4'>
            <div className='rounded-div my-4 md:mx-4'>
              <div className='text-accent mb-4'>
                <AiFillSignal size={25} />
              </div>
              <h2 className='font-bold text-xl mb-2'>Lorem Ipsum is simply</h2>
              <p className='mb-4'>
                Lorem Ipsum is simply dummy
                text of the printing and typesetting
                industry. Lorem Ipsum has been
                the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className='rounded-div my-4 md:mx-4'>
              <div className='text-accent mb-4'>
                <AiFillThunderbolt size={25} />
              </div>
              <h2 className='font-bold text-xl mb-2'>Lorem Ipsum is simply</h2>
              <p className='mb-4'>
                Lorem Ipsum is simply dummy
                text of the printing and typesetting
                industry. Lorem Ipsum has been
                the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className='rounded-div my-4 md:mx-4'>
              <div className='text-accent mb-4'>
                <AiFillHdd size={25} />
              </div>
              <h2 className='font-bold text-xl mb-2'>Lorem Ipsum is simply</h2>
              <p className='mb-4'>
                Lorem Ipsum is simply dummy
                text of the printing and typesetting
                industry. Lorem Ipsum has been
                the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default About