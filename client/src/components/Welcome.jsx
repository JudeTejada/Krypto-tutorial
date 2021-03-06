import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Loader } from '.';

const companyCommonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step='0.0001'
    value={value}
    onChange={e => handleChange(e, name)}
    className='w-full p-2 my-2 text-sm text-white bg-transparent border-none rounded-sm outline-none white-glassmorphism'
  />
);

const Welcome = () => {
  const connectWallet = () => {};
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col justify-between px-4 py-12 md:flex-row item-start md:p-20'>
        <div className='flex flex-col justify-start flex-1 md:mr-10'>
          <h1 className='py-1 text-3xl text-white sm:text-5xl text-gradient'>
            Send Crypto <br /> across the world
          </h1>
          <p className='w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12'>
            explore the crypto world. buy and sell crytpcurrencies easily on
            Krypto
          </p>
          <button
            className='flex flex-row items-center justify-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
            bg-type='button'
            onClick={connectWallet}
          >
            <p className='text-base text-white'>Connect wallet</p>
          </button>

          <div className='grid w-full grid-cols-2 mt-10 sm:grid-cols-3'>
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-start flex-1 w-full mt-10 md:mt-0'>
          <div className='flex-col items-start justify-end w-full h-40 p-3 my-5 rounded-xl sm:w-72 eth-card white-glassmorphism '>
            <div className='flex flex-col justify-between w-full h-full'>
              <div className='flex items-start justify-between'>
                <div className='flex items-center justify-center w-10 h-10 border-2 border-white rounded-full'>
                  <SiEthereum fontSize={21} color='#fff' />
                </div>
                <BsInfoCircle fontSize={17} color='#fff' />
              </div>

              <div>
                <p className='text-sm text-white font-xl'>Address</p>
                <p className='mt-1 text-sm text-semibold font-lg'>Ethereium</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center justify-start w-full p-5 sm:w-96 blue-glassmorphism'>
            <Input
              placeholder='Address To'
              name='addressTo'
              type='text'
              handleChange={handleChange}
            />
            <Input
              placeholder='Amount (ETH)'
              name='amount'
              type='number'
              handleChange={handleChange}
            />
            <Input
              placeholder='Keyword (Gif)'
              name='keyword'
              type='text'
              handleChange={handleChange}
            />
            <Input
              placeholder='Enter Message'
              name='message'
              type='text'
              handleChange={handleChange}
            />

            <div className='h-[1px] w-full bg-gray-400 my-2' />

            {false ? (
              <Loader />
            ) : (
              <button
                type='button'
                onClick={handleSubmit}
                className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
