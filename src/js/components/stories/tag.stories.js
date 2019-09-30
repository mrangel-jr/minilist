import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Tag from '../Tag';

storiesOf('Tag', module)
.add('Component', withInfo('Componente para rotular os Cards')(
    () => <Tag categories={[]}/>
  ))
  .add('with a category', () => (
    <Tag categories={["Channels"]} />
  ))
  .add('with a multiple categories', () => (
    <Tag categories={["Channels","Dialer","Management"]} />
  ));