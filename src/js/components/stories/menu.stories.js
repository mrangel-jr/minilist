import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { actions } from '@storybook/addon-actions';
import Menu from '../Menu';

const mockCategories = ["Channels",
"Dialer",
"Management",
"Optimization",
"Productivity",
"Reporting",
"Voice Analytics"];

storiesOf('Menu', module)
  .add('Component', withInfo('Componente listagens das categorias dos apps')( () => 
    <Menu categories={mockCategories} setActiveCategory={()=>{}} activeCategory={""}
  />))
  .add('with all categories', () => (
    <Menu categories={mockCategories} setActiveCategory={()=>{}} activeCategory={""}/>
  ))
  .add('with selected Dialer', () => React.createElement(() => {
    // eslint-disable-next-line no-unused-vars
    const [activeCategory, setActiveCategory] = React.useState("Dialer")
    return (
      <Menu categories={mockCategories} setActiveCategory={actions('Select Nova Categoria ou Unselect')} 
      activeCategory={activeCategory}/>
    )
  }));