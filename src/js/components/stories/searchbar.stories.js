import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import SearchBar from '../SearchBar';

storiesOf('SearchBar', module)
  .add('Component', withInfo('Componente de busca de dados pelo título nos Cards')(
    () =>  <SearchBar setInput={()=>{}}/>
  ))
  .add('query something', () => React.createElement(() => {
    return (
      <SearchBar setInput={action('Changed')} />
    )
  }))