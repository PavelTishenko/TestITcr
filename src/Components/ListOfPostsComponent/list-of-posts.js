import React from 'react';
import Post from './ItemOfPosts';

export const ListOfPosts = ({data, itemId, itemName}) => {
    return(
        data.map((e)=> {
            if (e.userId === itemId) {
                if (e.id % 2 == 0) {
                   return (
                       <Post item={e} itemName={itemName} key={e.id} />
                   );
                }
            }
        })
    );
};
