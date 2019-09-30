import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

storiesOf('Button', module)
  .add('Component', withInfo('Componente para filtrar por categorias')( () => 
    <Button category={""} setActiveCategory={()=>{}} activeCategory={""}/>
  ))
  .add('with a unselectd category', () => (
    <Button category={"Channels"} setActiveCategory={action('Selected Category !')} activeCategory={""}/>
  ))
  .add('with selected category', () => React.createElement(() => {
    const [activeCategory, setActiveCategory] = React.useState("Channels")
    return (
      <Button category={"Channels"} setActiveCategory={setActiveCategory} 
      activeCategory={activeCategory}/>
    )
  }));