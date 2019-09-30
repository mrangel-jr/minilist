import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Card from '../Card';

const mockCard = {
  
    "id": "9b565b11-7311-5b5e-a699-97873dffb361",
    "name": "Voice Report",
    "description": "Calls reporting and analytics of your calls.",
    "categories": [
        "Voice Analytics",
        "Reporting",
        "Optimization"
    ],
    "subscriptions": [
        {
        "name": "Trial",
        "price": 0
        },
        {
        "name": "Professional",
        "price": 3500
        }
    ]

};

storiesOf('Card', module)
  .add('Component', withInfo('Componente disponibilizar informações do app')(
    () => <Card card={mockCard}/>
  ))
  .add('show card', () => React.createElement(() => {
    return (
      <Card card={mockCard}/>
    )
  }))
