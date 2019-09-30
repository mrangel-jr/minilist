/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.li`
    cursor: pointer;
    list-style-type: none;

    .category {
        position: relative;
        display: block;
        padding: 1rem;
        font-size: 17px;
        font-weight: 300;
        color: #202121;
        cursor: pointer;
        background: ${props => props.theme.bg};
        border-bottom: 1px solid #E6EAEA;
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
            background-color: ${props => props.theme.secondary};
            -webkit-transition: background 0.3s ease-in-out;
            transition: background 0.3s ease-in-out;
        }
        
    }

    .active {
        color: ${props => props.theme.main};
    }

`;


export default function Button ({category,onClick,activeCategory}) {

    function setCategory () {

        (activeCategory === category) ? onClick("") : onClick(category)

    }
   
    return (
        <StyledButton key={category} onClick={() => setCategory(category)}>
            <a className={`category ${activeCategory===category && "active"}`} href="#">{category}</a>
        </StyledButton>
    )
}

Button.defaultProps = {
    category: "",
    onClick: ()=>{},
    activeCategory:"",
}
  
Button.propTypes = {
    /** Categoria a ser exibida e filtrada */
    category: PropTypes.string.isRequired,
    /** Função para marcar/desmarcar a categoria */
    onClick: PropTypes.func.isRequired,
    /** Categoria selecionada */
    activeCategory: PropTypes.string.isRequired,
}