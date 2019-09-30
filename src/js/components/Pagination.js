/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPagination = styled.ul`
    display: inline-flex;
    align-items: center;
    padding-left: 0;
    margin-bottom: 0;
    justify-content: center;
    width: 100%;
    text-align: center;
    order: 3;

    li {
        margin-right: .25rem;

        

        

        a {
            transition: all 0.3s ease-in-out;
            color: ${props => props.theme.secondaryText};
            padding: .375rem .4375rem;
            text-decoration: none;

            &:hover {
                background: ${props => props.theme.main};
                color: ${props => props.theme.secondary};
            }
        }
    }

    .active  {
        background: ${props => props.theme.main};
        color: ${props => props.theme.secondary};
        pointer-events: none;
    }

`;

export default function Pagination({pages, actualPage, setPage}) {

    return (
        <StyledPagination>
            <li key={`pag-0`} onClick={() => setPage(actualPage-1>0 ? actualPage-1 : actualPage)}>
                <a href="#">{"<"}</a>
            </li>
            {pages && Array.from({length: pages}, (v, k) => 
            <li key={`pag-${k+1}`} onClick={() => setPage(k+1)}>
                <a href="#" className={`${((k+1)===actualPage) && "active"}`}>{k+1}</a>
            </li>)}
            <li key={`pag-${pages+1}`} onClick={() => setPage(actualPage+1<=pages ? actualPage+1 : actualPage)}>
                <a href="#">{">"}</a>
            </li>
        </StyledPagination>
    )
}

Pagination.defaultProps = {
    pages:4,
    actualPage: 1,
    setPage: ()=> {}
}
  
Pagination.propTypes = {
    /** Total de páginas  */
    pages: PropTypes.number.isRequired,
    /** Página atual selecionada  */
    actualPage: PropTypes.number.isRequired,
    /** Função para mudar de página no onClick  */
    setPage: PropTypes.func.isRequired
}