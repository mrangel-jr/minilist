import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledMenu = styled.nav`

    text-align: left;
    flex: 0;
    order: 1;

    .title {
        font-size: 2.125rem;
        padding: 0 1rem;
    }

`;


export default function Menu ({categories,setActiveCategory,activeCategory}) {

    return (
        <StyledMenu>
            <h2 className="title">Categories</h2>
            <ul className="list-categories">
                {categories && categories.map((category,idx) => 
                    <Button key={String(idx)} category={category} onClick={setActiveCategory} activeCategory={activeCategory}/>
                )}
            </ul>
        </StyledMenu>
    )
}

Menu.defaultProps = {
    categories: [],
    setActiveCategory: () => {},
    activeCategory: ""
}

Menu.propTypes = {
    /** Lista de categorias */
    categories: PropTypes.array.isRequired, 
    /** Marca/desmarca a categoria */
    setActiveCategory: PropTypes.func.isRequired,
    /** Categoria selecionada */
    activeCategory: PropTypes.string.isRequired
}