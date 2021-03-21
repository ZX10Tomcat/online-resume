import React, { Component , useState} from 'react';
import { Box, Button, Grid, Grommet } from 'grommet';
import { Certificate, Flag, Waypoint, UserExpert, Grow, DocumentText, MailOption  } from 'grommet-icons';
import ScrollspyNav from 'react-scrollspy-nav';
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
               <Grid 
                  rows={['xxsmall', 'fill']}
                  columns={['small', 'auto']}
                  gap='small'
                  areas={[
                     { name: 'header', start: [0, 0], end: [1, 0], fill: true },
                     { name: 'nav', start: [0, 1], end: [0, 1],  fill: true },
                     { name: 'main', start: [1, 1], end: [1, 1], fill: true },
                  ]}
               >
                <Box  
                   full direction='row'
                   align='center'
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
                <Box flex 
                   width='small'
                   background='light-5'
                   elevation='large'
                   align='stretch'  
                   pad={{ left: 'small', right: 'small', vertical: 'large' }}                 
                   gridArea='nav' 
                   overflow='hidden' 
                   style={{position: 'fixed', height: '100%'}}
                >                    
                <ScrollspyNav
                    scrollTargetIds={['experience', 'qualifications', 'certificates', 'projects','contacts', 'blog']}
                    offset={350}
                    activeNavClass='is-active'
                    scrollDuration='1000'
                    headerBackground='true'
                >

             <Box 
                 margin={{ left: 'none', right: 'none', vertical: 'none' }}
                 direction='row-responsive'
                 background='light-2' 
                 elevation='medium'
                 border='all'
              >  
                  <Box                    
                     pad={{ left: 'small', right: 'small', vertical: 'small' }} 
                     align = 'stretch' 
                     background='light-1' 
                     justify='center'
                  >
                    <a href='#experience'><UserExpert size='medium' /></a>
                  </Box>
                  <Box                           
                     pad='small' 
                     fill='horizontal'
                     align='start'
                     width='small' 
                     justify='start'  
                     background='light-1'   
                  >        
                     <a href='/'>About </a>
                  </Box>
               </Box>

               <Box 
                 margin={{ left: 'none', right: 'none', vertical: 'none' }}
                 direction='row-responsive'
                 background='light-2' 
                 elevation='medium'
                 border='all'
              >  
                  <Box                    
                     pad={{ left: 'small', right: 'small', vertical: 'small' }} 
                     align = 'stretch' 
                     background='light-1' 
                     justify='center'
                  >
                    <a href='#experience'><Flag size='medium' /></a>
                  </Box>
                  <Box                           
                     pad='small' 
                     fill='horizontal'
                     align='start'
                     width='small' 
                     justify='start'  
                     background='light-1'   
                  >        
                     <a href='#experience'>Experience </a>
                  </Box>
               </Box>

               <Box 
                 margin={{ left: 'none', right: 'none', vertical: 'none' }}
                 direction='row-responsive'
                 background='light-2' 
                 elevation='medium'
                 border='all'
              >  

                  <Box                    
                     pad={{ left: 'small', right: 'small', vertical: 'small' }} 
                     align = 'stretch' 
                     background='light-1' 
                     justify='center'
                  >
                    <a href='#qualifications'><Waypoint size='medium' /></a>
                  </Box>
                  <Box                           
                     pad='small' 
                     fill='horizontal'
                     align='start'
                     width='small' 
                     justify='start'  
                     background='light-1'   
                  >        
                     <a href='#qualifications'> Qualifications</a>
                  </Box>
               </Box>

               <Box 
                 margin={{ left: 'none', right: 'none', vertical: 'none' }}
                 direction='row-responsive'
                 background='light-2' 
                 elevation='medium'
                 border='all'
              >  

                  <Box                    
                     pad={{ left: 'small', right: 'small', vertical: 'small' }} 
                     align = 'stretch' 
                     background='light-1' 
                     justify='center'
                  >
                    <a href='#certificates'><Certificate size='medium' /></a>
                  </Box>
                  <Box                           
                     pad='small' 
                     fill='horizontal'
                     align='start'
                     width='small' 
                     justify='start'  
                     background='light-1'   
                  >        
                     <a href='#certificates'><span>Education & Certificates </span></a>
                  </Box>
               </Box>

               <Box 
                 margin={{ left: 'none', right: 'none', vertical: 'none' }}
                 direction='row-responsive'
                 background='light-2' 
                 elevation='medium'
                 border='all'
              >  

                  <Box                    
                     pad={{ left: 'small', right: 'small', vertical: 'small' }} 
                     align = 'stretch' 
                     background='light-1' 
                     justify='center'
                  >
                    <a href='#projects'><Grow size='medium' /></a>
                  </Box>
                  <Box                           
                     pad='small' 
                     fill='horizontal'
                     align='start'
                     width='small' 
                     justify='start'  
                     background='light-1'   
                  >        
                     <a href='#projects'><span>Personal projects </span></a>
                  </Box>
               </Box>

               <Box 
                 margin={{ left: 'none', right: 'none', vertical: 'none' }}
                 direction='row-responsive'
                 background='light-2' 
                 elevation='medium'
                 border='all'
              >  

                  <Box                    
                     pad={{ left: 'small', right: 'small', vertical: 'small' }} 
                     align = 'stretch' 
                     background='light-1' 
                     justify='center'
                  >
                    <a href='#contacts'><MailOption size='medium' /></a>
                  </Box>
                  <Box                           
                     pad='small' 
                     fill='horizontal'
                     align='start'
                     width='small' 
                     justify='start'  
                     background='light-1'   
                  >        
                     <a href='#contacts'><span>Contacts </span></a>
                  </Box>
               </Box>

               <Box 
                 margin={{ left: 'none', right: 'none', vertical: 'none' }}
                 direction='row-responsive'
                 background='light-2' 
                 elevation='medium'
                 border='all'
              >  

                  <Box                    
                     pad={{ left: 'small', right: 'small', vertical: 'small' }} 
                     align = 'stretch' 
                     background='light-1' 
                     justify='center'
                  >
                    <a href='#blog'><DocumentText size='medium' /></a>
                  </Box>
                  <Box                           
                     pad='small' 
                     fill='horizontal'
                     align='start'
                     width='small' 
                     justify='start'  
                     background='light-1'   
                  >        
                     <a href='#blog'><span>Blog </span></a>
                  </Box>
               </Box>
                           
                </ScrollspyNav>

                </Box>
                <Box 
                   flex 
                   pad={{ left: 'medium', right: 'small', vertical: 'large' }} 
                   align = 'stretch' 
                   gridArea='main' 
                   background='light-1' 
                >
                <div>
                  <div><big>Full stack developer aspired in Data Science</big></div>
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
                </Grommet>
    
        )}

export default App;
