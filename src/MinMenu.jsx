import React from 'react';
import { Box, Menu } from 'grommet';
import { CaretNext  } from 'grommet-icons';

const MinMenu = () => {    
    return (

        <Box 
           flex 
           width='xxsmall'
           background='light-2'
           elevation='large'
           align='stretch'  
           pad={{ left: 'none', right: 'small', vertical: 'large' }}                 
           gridArea='nav' 
           overflow='hidden' 
           style={{position: 'fixed', height: '100%'}}
        >
            <Menu
               icon={<CaretNext size='medium'/>}
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