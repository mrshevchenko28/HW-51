import { useRef, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer'; 
import Modal from 'react-modal';

Modal.setAppElement('#root');

function IdleTimerContainer() {
    const [isLoggedIn, setisLoggedIn] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const sessionTimeoutRef = useRef(null);

    const onIdle = () => {
        console.log('User is idle');
        setModalIsOpen(true);
        sessionTimeoutRef.current = setTimeout(logOut, 10000); 
    };
    
    const stayActive = () => {
        setModalIsOpen(false);
        clearTimeout(sessionTimeoutRef.current);
        console.log('User is active');
    };

    const logOut = () => {
        setModalIsOpen(false);
        setisLoggedIn(false);
        clearTimeout(sessionTimeoutRef.current);
        console.log('User has logged out');
    };

    useIdleTimer({
        timeout: 5 * 1000,
        onIdle: onIdle,
        throttle: 1000,
        disabled: !isLoggedIn
    });

    return (
        <div className='idle-timer-container'>
            {isLoggedIn ? <h1>Hello, User!</h1> : <h1>Hello, Guest!</h1>}
            
            <Modal isOpen={modalIsOpen}>
                <h2 className='toast-title'>You have been idle for a while!</h2>
                <p className='paragraph'>You will log out soon!</p>
                <div className='button-group'>
                    <button 
                        className='button log-out'
                        onClick={logOut}
                        >
                        Log me out
                    </button>
                    <button 
                        className='button keep-signed-in' 
                        onClick={stayActive}
                        >
                        Keep me signed in
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default IdleTimerContainer;