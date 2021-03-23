import React from 'react';
import { Box, Grid, Grommet, ResponsiveContext } from 'grommet';
import MinMenu from './MinMenu';
import MainMenu from './MainMenu';
import About from './About';
import Experience from './Experience';
import Qualifications from './Qualifications';
import Certificates from './Certificates';
import Projects from './Projects';
import Contacts from './Contacts';
import Blog from './Blog';

const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  const App = () => {        
        return (
         <Grommet theme={theme}>  
         <ResponsiveContext.Consumer>
         {size => (
               <Grid 
                  rows={['xxsmall', 'fill']}
                  columns={['small', 'auto']}
                  gap='small'
                  areas={[
                     { name: 'header', start: [0, 0], end: [1, 0], fill: true },
                     { name: 'nav', start: [0, 1], end: [0, 1],  fill: true } ,
                     { name: 'main', start: [1, 1], end: [1, 1], fill: true },
                  ]}
               >
                <Box  
                   full direction='row'
                   align='start'
                   justify='between'
                   background='brand'
                   pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                   margin={{ top: 'none' }}
                   elevation='medium'
                   style={{ zIndex: '1', position: 'fixed', width:'100%', top: '0px', left: '0px'}}
                   gridArea='header'
                >
                   Bogdan Samoletskyi resume 
                </Box>  

                {(size === 'medium' || size === 'small') ? (

                  <MinMenu />
                   
                ) : (          
                
                  <MainMenu />

                )}
               
                <Box 
                   flex 
                   pad={{ left: 'small', right: 'small', vertical: 'large' }} 
                   align = 'end' 
                   gridArea='main' 
                   background='light-1' 
                >
                <div>
                  
                   {/* --- About Section --- */}
                  <About />

                  {/* --- Experience Section --- */}  
                  <Experience />

                  {/* --- Qualifications Section --- */}  
                  <Qualifications /> 

                  {/* --- Certificates Section --- */}          
                  <Certificates />

                  {/* --- Projects Section --- */}   
                  <Projects />

                  {/* --- Contacts Section --- */}
                  <Contacts />
                  
                  {/* --- Blog Section --- */}
                  <Blog />

                </div>
                </Box>
                
                
                </Grid>
                )}
               </ResponsiveContext.Consumer>
                </Grommet>
    
        )}

export default App;
