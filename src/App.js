import React, {useState} from 'react';
import { Box, Menu, Grid, Grommet, Layer,ResponsiveContext } from 'grommet';
import { Certificate, Flag, Waypoint, UserExpert, Grow, DocumentText, MailOption, CaretNext  } from 'grommet-icons';
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
      const [showSidebar, setShowSidebar] = useState(true);  
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
                
                  <Box flex 
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

                   
                ) : (          
                <Box flex 
                   width='small'
                   background='light-2'
                   elevation='large'
                   align='stretch'  
                   pad={{ left: 'none', right: 'small', vertical: 'large' }}                 
                   gridArea='nav' 
                   overflow='hidden' 
                   style={{position: 'fixed', height: '100%'}}
                >

                <ScrollspyNav
                    scrollTargetIds={['about', 'experience', 'qualifications', 'certificates', 'projects','contacts', 'blog']}
                    offset={400}
                    activeNavClass='is-active'
                    scrollDuration='1000'
                    headerBackground='true'
                >

          
             <Box 
                 margin={{ left: 'small', right: 'none', vertical: 'none' }}
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
                    <a href='#about'><div> <UserExpert size='medium' /></div></a>
                  </Box>
                  <Box                           
                     pad='small' 
                     fill='horizontal'
                     align='start'
                     width='small' 
                     justify='start'  
                     background='light-1'   
                  >        
                     <a href='#about'>About </a>
                  </Box>
               </Box>

               <Box 
                 margin={{ left: 'small', right: 'none', vertical: 'none' }}
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
                 margin={{ left: 'small', right: 'none', vertical: 'none' }}
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
                 margin={{ left: 'small', right: 'none', vertical: 'none' }}
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
                 margin={{ left: 'small', right: 'none', vertical: 'none' }}
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
                 margin={{ left: 'small', right: 'none', vertical: 'none' }}
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
                 margin={{ left: 'small', right: 'none', vertical: 'none' }}
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
