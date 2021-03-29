import React from 'react';
import { Box } from 'grommet';
import { Certificate, Flag, Waypoint, UserExpert, Grow, DocumentText, MailOption  } from 'grommet-icons';
import ScrollspyNav from 'react-scrollspy-nav';

const MainMenu = () => {    
    return (
      <div style={{paddingTop:'10px'}}>
        <Box 
           flex 
           width='small'
           background='light-1'
           elevation='large'
           align='stretch'  
           pad={{ left: 'none', right: 'small', vertical: 'large' }}                 
           gridArea='nav' 
           overflow='hidden' 
           style={{position: 'fixed', height: '100%', lineHeight: '20px'}}
        >
            <ScrollspyNav
                scrollTargetIds={['about', 'experience', 'qualifications', 'certificates', 'projects','contacts', 'blog']}
                offset={409}
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
                     <a href='#about'><span className='menuitem'>About</span></a>
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
                     <a href='#experience'><span className='menuitem'>Experience </span></a>
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
                     <a href='#qualifications'> <span className='menuitem'>Qualifications</span></a>
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
                     <a href='#certificates'><span className='menuitem'>Education & Certificates </span></a>
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
                     <a href='#projects'><span className='menuitem'>Personal projects </span></a>
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
                     <a href='#contacts'><span className='menuitem'>Contacts </span></a>
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
                     <a href='#blog'><span className='menuitem'>Blog </span></a>
                  </Box>
               </Box>
                           
                </ScrollspyNav>

            </Box> 
         </div>
        )}

export default MainMenu;