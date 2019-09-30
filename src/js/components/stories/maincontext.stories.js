import React from 'react';
import { storiesOf } from '@storybook/react';
import {withInfo} from '@storybook/addon-info'
import MainContent from '../MainContent';

storiesOf('MainContent', module)
  .add('Component', withInfo('Componente listat os app paginados e filtrados pela  SearchBar')( () => 
    <MainContent setCategories={()=>{}} activeCategory=""/>
  ))
  .add('filtrado por categoria', () => React.createElement(() => {
    return (       
    <MainContent setCategories={()=>{}} activeCategory={"Dialer"}/>
    )
  }))
