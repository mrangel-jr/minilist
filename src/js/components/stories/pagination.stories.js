import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Pagination from '../Pagination';

storiesOf('Pagination', module)
  .add('Component', withInfo('Componente para paginação dos apps')( () => 
    <Pagination pages={4} setPage={action('Clicled!')}/>
  ))
  .add('list pages', () => React.createElement(() => {
    // eslint-disable-next-line no-unused-vars
    const [page, setPage] = React.useState(1)
    return (
      <Pagination pages={4} actualPage={page} setPage={action('Clicled!')}/>
    )
  }))
