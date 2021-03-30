import React from 'react';
import { Box, Heading } from 'grommet';
import { Certificate, Workshop, Amazon, Windows } from 'grommet-icons';

const Certificates = () => {    
    return (  
      <div id='certificates' style={{paddingTop:'30px'}}>     
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
              
             <Heading level='3'> <Certificate color='#444444' size='medium' /> Education & certificates</Heading>
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
              <Heading level='4'><Workshop color='#444444' />  Education</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
                Odessa Polytechnic University, 1998. <br />
                Specialist degree, design and development of the electronic systems
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
              <Heading level='4'><Amazon color='#444444' />  AWS</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
                 “AWS Certified DeveloperAssociate” 09/24/2020 <br />
                 <a href='https://www.youracclaim.com/badges/f6ba871c-04a6-4a84-8094-7cab52ae776a' rel="noreferrer" target='_blank'>youracclaim.com badge</a>
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
              <Heading level='4'><Windows color='#444444' />  Microsoft</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
                 <a href='https://mcp.microsoft.com/Anonymous//Transcript/Validate' rel="noreferrer" target='_blank'>Validate</a><br /> (Transcript ID: 1154759, access code: testAccess1) <br />
                Microsoft Certified Solutions Developer “Web Applications” 06/27/2014 <br/>
                Microsoft certified professional “Windows Application development Certificates: with Microsoft .NET Framework 4”, 07/03/2012
             </p>
           </Box>  
        </Box> 
        </Box>           
      </Box>
      </div>  
    )}

export default Certificates;