import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import License from '../License';

storiesOf('License', module)
  .add('Component', withInfo('Componente para listagens das licensas os apps')( () => 
     <License subscriptions={[]}/>
  ))
  .add('list subscriptions', () => React.createElement(() => {
    const subscriptions = [
        {
          "name": "Trial",
          "price": 0
        },
        {
          "name": "Professional",
          "price": 3500
        }
      ];
    return (
      <License subscriptions={subscriptions}/>
    )
  }));