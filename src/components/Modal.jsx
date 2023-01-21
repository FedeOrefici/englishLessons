import iconOk from '../assets/iconOk.png';


const Modal = ({open, onClose}) => {

  if(!open) return null;

  return (
    
        <div className='fixed inset-0 mt-32 mx-auto bg-gray-100 w-[800px] h-96 rounded text-center flex justify-center items-center flex-col shadow-xl'>
            <img src={iconOk} alt='icon-ok'></img>
            <div>
                <h1 className='text-2xl text-center pt-6'>Спасибо за ваше сообщение!</h1>
            </div>
            {/* <button
            onClick={onClose}
            className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black shadow-xl'>Закрыть</button> */}
        </div>
    
  )
}

export default Modal