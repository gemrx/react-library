import { useState } from 'react';
import './Book.css';

export default function Book({ id, title, author, numberOfPages, onRemoveBook }) { 
    const [readStatus, setReadSatus] = useState('Not read yet');

    function handleToggleReadStatus() {
        setReadSatus(readStatus === 'Not read yet' ? 'Read' : 'Not read yet');
    }

    function handleRemoveBook() {
        onRemoveBook(id);
    }

    return (
        <div className="book">
            <button className="book__delete-button" onClick={handleRemoveBook}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    <line x1="10" x2="10" y1="11" y2="17"/>
                    <line x1="14" x2="14" y1="11" y2="17"/>
                </svg>
            </button>
            <div className="book__info">
                <div className="book__title">{title}</div>
                <div className="book__author">{author}</div>
                <div className="book__pages">{`${numberOfPages} pages`}</div>
            </div>
            <button className="book__status-button" onClick={handleToggleReadStatus}>{readStatus}</button>
        </div>
    );
}


