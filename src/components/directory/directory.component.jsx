import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import '../directory/directory.styles.scss';


class Directory extends React.Component{
    constructor(){
        super();

        this.state ={
          sections : [{
            title: 'hats',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg',
            id: 1,
            linkUrl: 'hats'
          },
          {
            title: 'jackets',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'sneakers',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Gold_Dust_Day_Gecko_closeup_hawaii_edit_1.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'womens',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg ',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          },
          {
            title: 'mens',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Papilio_Machaon_JPG1a.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }
        ]   
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) =>(
                        <MenuItem key={id} {...otherSectionProps}/> 
                        )
                    )
                }
            </div>
        )
    }
}

export default Directory;