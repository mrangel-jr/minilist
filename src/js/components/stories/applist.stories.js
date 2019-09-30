import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import AppList from '../AppList';

const mockCards = [{
  
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
    }, 
    {
        "id": "470fedc5-489e-5acb-a200-c85adaa18356",
        "name": "Power Dialer",
        "description": "Auto dialer that will help increase your connect rates and talk time.",
        "categories": [
            "Dialer"
        ],
        "subscriptions": [
            {
                "name": "Trial",
                "price": 0
            },
            {
                "name": "Professional",
                "price": 4500
            },
            {
                "name": "Premium",
                "price": 6000
            }
        ]
    }
]
;

storiesOf('AppList', module)
  .add('Component', withInfo('Componente para listagem dos Cards')( () => 
    <AppList items={[]}/>
  ))
  .add('show cards', () => React.createElement(() => {
    return (
      <AppList items={mockCards}/>
    )
  }));
