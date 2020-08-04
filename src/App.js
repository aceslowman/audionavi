import React from 'react';
import { MainProvider } from './MainContext';
import { observer } from 'mobx-react';

import { 
  PanelComponent, 
  PanelGroupComponent,
  TextComponent, 
  ToolbarComponent, 
  InputBool, 
  InputFloat,
} from 'maco-ui';

import 'maco-ui/dist/index.css';

export default @observer class App extends React.Component {
  render() {
    return (
      <PanelGroupComponent
        direction="horizontal"
        toolbar={[
            {
              label: 'item 1',
              dropDown: [
                { label: 'dropdown 1' },
                { 
                  label: 'dropdown 2', 
                  dropDown: [
                    { label: 'dropdown 1' },
                    { label: 'dropdown 2' }
                  ]
                }
              ]
            },
            {
              label: 'item 2'
            },
            {
              label: 'item 3',
              dropDown: [
                { label: 'dropdown 1' },
                { label: 'dropdown 2' }
              ]
            },
        ]}
      >      
        <PanelComponent 
          onRemove={()=>console.log('remove')}
          title="Panel Title 1"			
        >
          <TextComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua.Sapien eget mi proin sed libero.Malesuada fames ac 
            turpis egestas maecenas pharetra.Ultricies lacus sed turpis 
            tincidunt id aliquet risus feugiat in .Nec tincidunt 
            praesent semper feugiat.Et netus et malesuada fames ac 
            turpis egestas maecenas pharetra.Ut tellus elementum 
            sagittis vitae et leo.Tempus egestas sed sed risus pretium 
            quam vulputate.Cras ornare arcu dui vivamus arcu.Sodales 
            ut etiam sit amet nisl purus in .Lacus sed viverra tellus 
            in .Sed libero enim sed faucibus.Enim nunc faucibus a 
            pellentesque sit amet porttitor.Amet volutpat consequat 
            mauris nunc congue.Eu nisl nunc mi ipsum faucibus vitae aliquet.
            Risus quis varius quam quisque id diam vel quam.Integer enim 
            neque volutpat ac tincidunt.Varius morbi enim nunc faucibus a 
            pellentesque sit amet.Id ornare arcu odio ut sem.Lacinia quis 
            vel eros donec ac odio tempor orci.
          </TextComponent>

          {/* <InputBool />
          <InputFloat /> */}

        </PanelComponent>
        <PanelComponent 
          onRemove={()=>console.log('remove')}
          title="Panel Title 2"			
        >
          <TextComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua.Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur.Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
          </TextComponent>

          {/* <InputBool />
          <InputFloat /> */}

        </PanelComponent>
      </PanelGroupComponent>
    )  
  } 
}