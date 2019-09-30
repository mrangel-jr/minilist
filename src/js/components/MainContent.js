import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AppList from './AppList';
import Pagination from './Pagination';
import styled from 'styled-components';
import {compare,sortAscByPrice} from '../../utils/functions';

const StyledMainContent = styled.section`
    flex: 1;
    order: 2;
    text-align: left;

    header {
        display: flex;
        text-align: center;
    }
`;

export default function MainContent ({setCategories,activeCategory}) {

    const [items,setItems] = useState([]);
    const [page,setPage] = useState(1);
    const [size,setSize] = useState(0);
    const [input,setInput] = useState("")
    const itemsPerPage = 3;

    

    useEffect( ()=> {
        
        async function loadCategories() {
            const res = await fetch('http://localhost:3001/apps/',{
                "headers": {
                    'content-Type': 'application/json'
                }
            });
            res
              .json()
              .then(res => {
                  const categories = [...new Set(res.flatMap(item => item.categories))].sort(compare);
                  setCategories(categories);
                  return res;
                })
            //   .then(res => console.log(res))
            //   .catch(err => setErrors(err));
          }
      
          loadCategories();
    },[setCategories]);

    useEffect( ()=> {

        function pagination (arr) {
            const maxPages = arr.length % itemsPerPage === 0 ? arr.length/itemsPerPage : Math.floor(arr.length/itemsPerPage)+1;
            setSize(maxPages);
            if (page>maxPages) {
                setPage(1);
            }
            return arr.slice((page-1)*itemsPerPage,page*itemsPerPage) ;
        }
        
        async function fetchData() {
            const queryCategory = (activeCategory !== "" && activeCategory !== undefined) ? `q=${activeCategory}` : "";
            const paginate = "";
            const search = (input !== "") ? `name_like=${input}` : "";
            const request = `?${(queryCategory !== undefined) ? queryCategory : ""}${!!queryCategory && !!search ? '&' : ''}${search}${!!search ? '&' : ''}${paginate}`
            const res = await fetch(`http://localhost:3001/apps/${request}`,{
                "headers": {
                    'content-Type': 'application/json'
                }
            });
            res
              .json()
              .then(res => {
                    setItems(pagination(res.sort(sortAscByPrice)));
              })
            //   .catch(err => setErrors(err));
          }
      
          fetchData();
    },[activeCategory,input,page]);

    return (
        <StyledMainContent>
            <header>
                <SearchBar setInput={setInput}/>
            </header>
            <AppList items={items}/>
            <Pagination pages={size} actualPage={page} setPage={setPage}/>
        </StyledMainContent>
    )
}

MainContent.defaultProps = {
    setCategories: ()=> {},
    activeCategory: ""
}
  
MainContent.propTypes = {
    /** Função para marcar/desmarcar categorias  */
    setCategories : PropTypes.func.isRequired,
    /** Categoria selecionada  */
    activeCategory: PropTypes.string.isRequired
}