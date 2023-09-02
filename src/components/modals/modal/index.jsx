// import './style.css'
const Modal = ({CloseModal, message, children}) => {
console.log(message)


    return (
      <div onClick={()=>CloseModal(false)}  className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs  z-[10] flex justify-center items-center " >
        <div className={`bg-white  w-[80%] h-[80%]   pt-[2rem] px-[1.25rem]  rounded-xl modal `}  onClick={e => e.stopPropagation()}>
          <div className="flex justify-end" onClick={()=>CloseModal(false)}>close</div>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
