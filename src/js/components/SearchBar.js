import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledSearch = styled.input`

    &[type=search], &[type=text] {
        font-size: 1rem;
        font-weight: 300;
        background-clip: padding-box;
        transition: all .2s ease;
        outline: 0;
        -webkit-appearance: none;
        width: 100%;
        resize: none;
        padding: 1rem;
        border: 1px solid  ${props => props.theme.bg};
        margin-bottom: 2rem;
    }

    &:hover, &:focus {
        transition: all .2s ease;
        cursor: auto;
        border: 1px solid ${props => props.theme.main};
    }

`;

export default function SearchBar ({setInput}) {

    return (
        <StyledSearch type="text" placeholder="Search an app ..." onChange={(evt) => setInput(evt.target.value)}/>
    )

}

SearchBar.defaultProps = {
    setInput: () => {}
}
  
SearchBar.propTypes = {
    /** Atualiza o texto de busca no onChange  */
    setInput: PropTypes.func.isRequired,
}