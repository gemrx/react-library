import { useRef } from 'react';
import './ModalTrigger.css';

export default function ModalTrigger({onAddBook}) {
    const modalRef = useRef(null);
    const formRef = useRef(null);

    function handleOpenModal() {
        modalRef?.current?.showModal();
    }

    function handleCloseModal() {
        modalRef?.current?.close();
    }

    function handleAddBook() {
        const formData = new FormData(formRef.current);
        const title = formData.get('title');
        const author = formData.get('author');
        const pages = formData.get('pages');
        onAddBook(title, author, pages);
        formRef.current.reset();
    }

    return (
        <>
            <button  onClick={handleOpenModal} className="modal__open-button button">Add book</button>

            <dialog onSubmit={handleAddBook} ref={modalRef} className="modal">
                <div className="modal__content">
                    <header className="modal__header">
                        <div className="modal__title">Add Book</div>
                        <button onClick={handleCloseModal} className="modal__close-button button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                            </svg>
                        </button>
                    </header>
                    <form method='dialog' ref={formRef} id='form' className='form'>
                        <div className="form__row">
                            <label className="form__label" htmlFor="title">Title</label>
                            <input type="text" id="title" name='title' className="form__input"/>
                        </div>
                        <div className="form__row">
                            <label className="form__label" htmlFor="author">Author</label>
                            <input type="text" id="author" name='author' className="form__input"/>
                        </div>
                        <div className="form__row">
                            <label className="form__label" htmlFor="pages">Pages</label>
                            <input type="text" id="pages" name='pages' className="form__input"/>
                        </div>
                    </form>           
                    <footer className="modal__footer">
                        <button onClick={handleCloseModal} className="modal__cancel-button">Cancel</button>
                        <button form='form' className="modal__add-book-button">Add</button>
                    </footer>
                </div>    
            </dialog>
        </>
    );
}