import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import ReposList from '../ReposList/ReposList';
import getRepos from '../../services/github-service';

import './SearchContainer.css';

const SearchForm = () => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSearchRepos = () => {
        getRepos(inputValue)
            .then((data) => {
                console.log(data);
            })
    }

    return (
        <form className='searchForm'>
            <TextField 
            className='searchFormInput'
            color='info'
            label={'User name..'}
            value={inputValue}
            onChange={onInputChange} 
            style={{width: '75%'}}/>

            <Button 
            className='searchButton'
            onClick={onSearchRepos}
            color="info"
            variant='outlined'>
                Search
            </Button>
        </form>
    );

};

export default SearchForm;