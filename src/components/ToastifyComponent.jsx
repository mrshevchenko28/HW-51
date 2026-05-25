import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { GiToaster } from "react-icons/gi";
import { IoIosWarning } from "react-icons/io";
import { MdReportGmailerrorred } from "react-icons/md";


const WarnToast = ({closeToast}) => {
    return(
        <div>
            Something went wrong!
            <button 
                className='button warning'
                onClick={closeToast}
            >Close <IoIosWarning color="white"/>
            </button>
        </div>
    )
}

const ErrorToast = ({closeToast}) => {
    return(
        <div>
            An error occurs!
            <button 
                className='button error'
                onClick={closeToast}
            >Close <MdReportGmailerrorred color="white"/>
            </button>
        </div>
    )
}

function ToastifyComponent(){
    const notify = () => {
        toast('Basic notification!', { 
            position: 'top-left' 
        });
        toast.success('Success notification!', { 
            position: 'top-center',
            autoClose: 4000 
        });
        toast.info('Info notification!', { 
            position: 'top-right',
            autoClose: 8000 
        });
        toast.warn(<WarnToast/>, { 
            position: 'bottom-left',
            autoClose: false 
        });
        toast.error(<ErrorToast/>, { 
            position: 'bottom-center',
            autoClose: 10000  
        });
        toast('Basic notification!', { 
            position: 'bottom-right' 
        });
    }

    return(
        <div className='toastify-container'>
            <button    
                className='button' 
                onClick={notify}
                >
                Toast Notify! 
                <GiToaster color="yellow"/>
            </button>
            <ToastContainer />
        </div>
    )
}

export default ToastifyComponent;