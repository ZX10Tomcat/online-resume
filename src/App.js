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

  const App = () => {  
      return (
         <Grommet> 
         <ResponsiveContext.Consumer>
         {size => (
           
               <Grid 
                  rows={['xxsmall', 'fill']}
                  columns={[size !== 'small' ? 'small' : 'none'  , 'auto']}
                  gap='small'
                  areas={[
                     { name: 'header', start: [0, 0], end: [1, 0], fill: true },
                     { name: 'nav', start: [0, 1], end: [0, 1],  fill: true } ,
                     { name: 'main', start: [1, 1], end: [1, 1], fill: true },
                  ]}
               >                                       
                <Box  
                   full direction='row'
                   align='end'
                   justify='between'
                   background='brand'
                   pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                   margin={{ top: 'none' }}
                   elevation='medium'
                   style={{ zIndex: '1', position: 'fixed', width:'100%', top: '0px', left: '0px', lineHeight: '20px'}}
                   gridArea='header'
                >
                   <Box flex  width='small' style={{lineHeight: '25px'}}><span className='headertext'>Bogdan Samoletskyi resume </span> </Box>{size=== 'small' && ( <MinMenu /> )} 
                </Box>  

                {size !== 'small' &&  (          
                
                  <MainMenu />

                )}
               
                <Box 
                   flex 
                   pad={{ left: 'small', right: 'small', vertical: 'large' }} 
                   align = 'stretch' 
                   gridArea='main' 
                >
                <div>
                  
                   {/* --- About Section --- */}
                   <About size={size}/>  
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
