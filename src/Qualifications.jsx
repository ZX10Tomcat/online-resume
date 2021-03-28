import React from 'react';
import { Box,Heading } from 'grommet';
import { Waypoint, Code, Database, Desktop, Js, Language } from 'grommet-icons';

const Qualifications = () => {    
    return (
      <div id='qualifications' style={{paddingTop:'30px'}}>
        <Box
           margin={{ left: 'none', right: 'none', vertical: 'large' }}>
           <Box
               flex
               pad={{ left: 'medium', right: 'small', vertical: 'none' }}
               fill='horizontal'
               align = 'start'                       
               elevation='large'
               background='#669bbc' 
               width='large' 
               style={{width:'100%'}}                    
            >
               <Heading level='3'> <Waypoint color='#444444' size='medium' /> Qualifications </Heading>
            </Box>
            <Box
               flex                        
               pad='medium' 
               fill='horizontal'
               align = 'center'                      
               elevation='large'
               background='light-3' 
               width='xlarge' 
               justify='center'                    
            >        
            <Box 
               margin={{ left: 'none', right: 'none', vertical: 'small' }}
               direction='row-responsive'
               background='light-2' 
               elevation='medium'
               style={{width:'80%'}} 
            >  
           <Box 
               pad='medium' 
               align='start' 
               width='medium' 
               justify='center'  
               background='light-4' 
           >
              <Heading level='4'><Code color='#444444' /> Programming Languages</Heading>
           </Box>
           <Box                           
               pad='medium' 
               fill='horizontal'
               align='start'
               width='xlarge' 
               justify='start'    
           >                                                
              <p>
                C# (7 years) <br />
                .NET Core (1 year) <br />
                ASP.NET (2 years) <br />
                Python (1 year) <br />
                HTML, DHMTL (3.5 years) <br />
                JavaScript (2.5 years) <br />
             </p>
           </Box>  
        </Box>  
        <Box 
           margin={{ left: 'none', right: 'none', vertical: 'small' }}
           direction='row-responsive'
           background='light-2' 
           elevation='medium'
           style={{width:'80%'}} 
        >  
           <Box 
              pad='medium' 
              align='start' 
              width='medium' 
              justify='center'  
              background='light-4' 
           >
            <Heading level='4'><Database color='#444444' /> Databases</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
               <p>
                  MS SQL Server (4 years) <br />
                  MySQL (3 years)<br />
                  PostgreSQL (0.5 years)<br />
                  MongoDB (0.5 years)<br />
               </p>
           </Box>  
        </Box>
        <Box 
           margin={{ left: 'none', right: 'none', vertical: 'small' }}
           direction='row-responsive'
           background='light-2' 
           elevation='medium'
           style={{width:'80%'}} 
        >  
           <Box 
               pad='medium' 
               align='start' 
               width='medium' 
               justify='center'  
               background='light-4' 
           >
              <Heading level='4'><Desktop color='#444444' /> Operating Systems</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
                 Windows 10 (3.5 years) <br />
                 Windows 8 (1.5 years) <br />
                 Windows 7 (2 years)<br />
                 Windows 2008 Server (3 years)<br />
                 Windows 2016 Server (2 years)<br />
                 Linux (1 year)<br />
             </p>
           </Box>  
        </Box>  
        <Box 
           margin={{ left: 'none', right: 'none', vertical: 'small' }}
           direction='row-responsive'
           background='light-2' 
           elevation='medium'
           style={{width:'80%'}} 
        >  
           <Box 
              pad='medium' 
              align='start' 
              width='medium' 
              justify='center'  
              background='light-4' 
           >
              <Heading level='4'><Js color='plain' /> Frontend</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
                 Angular (6 months)<br />  
                 React (3 months) <br />                          
                 jQuery (2 years) <br />
                 Twitter BootStrap (1 year) <br />
                 Zurb Foundation (1 year) <br />
             </p>
           </Box>  
        </Box> 
        <Box 
           margin={{ left: 'none', right: 'none', vertical: 'small' }}
           direction='row-responsive'
           background='light-2' 
           elevation='medium'
           style={{width:'80%'}} 
        >  
           <Box 
              pad='medium' 
              align='start' 
              width='medium' 
              justify='center'  
              background='light-4' 
           >
              <Heading level='4'><Language color='#444444' /> Languages</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
                 Technical English-fluent <br />
                 Spoken English - good <br />
                 Ukrainian - fluent <br />
                 Russian - fluent  <br />
             </p>
           </Box>  
        </Box> 

        </Box>
           
      </Box>
      </div>
    )}

export default Qualifications;