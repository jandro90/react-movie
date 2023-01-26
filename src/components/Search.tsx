import { SyntheticEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import('../styles/search.css');

export const Search = ({setSearchOnState}: any) => {
    const searchStoreValue = useSelector((state: RootState) => state.app.search);
    const inputSearchRef: any = useRef(null);

    const handleSubmit = (e: SyntheticEvent | any) => {
        e.preventDefault();
        const { value } = e.target.search;

        if (!value || value.length < 1) return;
        const formatedValue = value.replace(/\s/g, '+');
        setSearchOnState(formatedValue);
    }

    useEffect(() => {
        inputSearchRef.current.value = searchStoreValue;
        inputSearchRef.current.select();
    }, [])
    

    return (
        <div className='m-2'>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputSearchRef}
                    type="text"
                    className="search-search-input"
                    placeholder="Search..."
                    name="search"
                />

                <button type="submit" className="search-search-button">
                    Search
                </button>
            </form>
        </div>
    );
};
