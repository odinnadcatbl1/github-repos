import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import ReposList from '../ReposList/ReposList';
import getRepos from '../../services/github-service';

import './SearchContainer.css';

const SearchContainer = () => {

    const [inputValue, setInputValue] = useState('');

    const [error, setError] = useState(false);

    const [repos, setRepos] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSearchRepos = (e) => {

        e.preventDefault();

        if (inputValue) {
            getRepos(inputValue)
            .then((data) => {
                setRepos(data);
                setError(false);
            })
            .catch(() => {
                setError(true);
                setRepos('');
            })
        } else { 
            setRepos('');
            setError(true);
        }
    }

    return (

            <div className='searchContainer'>
                <form onSubmit={onSearchRepos} className='searchForm'>
                    <TextField 
                    className='searchFormInput'
                    color='info'
                    label={'User name..'}
                    onChange={onInputChange} 
                    value={inputValue}
                    style={{width: '75%'}}/>

                    <Button 
                    className='searchButton'
                    onClick={onSearchRepos}
                    color="info"
                    variant='outlined'>
                        Search
                    </Button>
                </form>
                <ReposList repos={repos} error={error}/>
            </div>      
    );

};

export default SearchContainer;