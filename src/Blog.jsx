import React from 'react';
import { Box, Heading, } from 'grommet';
import {  DocumentText, Medium, CodeSandbox } from 'grommet-icons';

const Blog = () => {    
    return (  
      <div id='blog' style={{paddingTop:'20px'}}>
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
              <Heading level='3'><DocumentText color='#444444' size='medium' /> Blog</Heading>
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
              <Medium color='#444444' size='large'/>
          </Box>
          <Box                           
             pad='medium' 
             fill='horizontal'
             align='start'
             width='xlarge' 
             justify='start'    
          >                                                
              <p>
                 <a href='https://bogdansamoletskyi.medium.com/' rel="noreferrer" target='_blank'>https://bogdansamoletskyi.medium.com/</a>
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
              <CodeSandbox color='#444444' size='large'/>
           </Box>
           <Box                           
            pad='medium' 
            fill='horizontal'
            align='start'
            width='xlarge' 
            justify='start'    
           >                                                
              <p>
              <a href='http://www.progsandbox.tech/' rel="noreferrer" target='_blank'>http://www.progsandbox.tech/</a>
             </p>
           </Box>  
          </Box> 

        </Box>
        </Box>
        </div>
    )}

export default Blog;