import React from 'react';
import { Box, Menu } from 'grommet';

const MinMenu = () => {    
    return (

        <Box 
           width='xxsmall'
           background='#3f1052'
           align='end'  
           pad={{ left: 'large', right: 'small', vertical: 'none' }}                 
           gridArea='header' 
           elevation='none'
        >
            <Menu
               size='small'
               label='Menu'
               dropBackground='light-1'
               items={[
                        {label: 'About', href: '#about'},
                        {label: 'Experience', href: '#experience'},
                        {label: 'Qualifications', href: '#qualifications'},
                        {label: 'Education & Certificates', href: '#certificates'},
                        {label: 'Personal projects', href: '#projects'},
                        {label: 'Contacts', href: '#contacts'},
                        {label: 'Blog', href: '#blog'},
                     ]}
            /> 
        </Box>
    )}

export default MinMenu;