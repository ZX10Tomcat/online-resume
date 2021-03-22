import React from 'react';
import { Box, Heading } from 'grommet';
import { Grow, Sort, Robot, Clone } from 'grommet-icons';

const Projects = () => {    
    return (  
      <div id='projects' style={{paddingTop:'20px'}}> 
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
               <Heading level='3'> <Grow color='#444444' size='medium' /> Personal projects</Heading>
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
              <Heading level='4'><Sort color='#444444' />  JupyterF1</Heading>
             </Box>
             <Box                           
                pad='medium' 
                fill='horizontal'
                align='start'
                width='xlarge' 
                justify='start'    
             >                                                
             <p>
                <a href='https://github.com/ZX10Tomcat/JupyterF1' rel="noreferrer" target='_blank'>https://github.com/ZX10Tomcat/JupyterF1</a><br />
                 <br/>
                 Jupyter notebook with Formula 1 qualification statistics, data washing and visualization.
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
                 <Heading level='4'><Robot color='#444444' />  f1ChatBot</Heading>
              </Box>
              <Box                           
                 pad='medium' 
                 fill='horizontal'
                 align='start'
                 width='xlarge' 
                 justify='start'    
              >                                                
                <p>
                  <a href='https://github.com/ZX10Tomcat/f1ChatBot' rel="noreferrer" target='_blank'>https://github.com/ZX10Tomcat/f1ChatBot</a><br />
                  <br/>
                 (Currently in development) original code belongs to Asterious Stergios. <a href='https://www.f1-predictor.com/' rel="noreferrer" target='_blank'>f1- predictor</a><br />
                 Facebook chat bot for talking about racers, results, championships and more in Formula1. <br /> 
                 Using Python as a programming language, wit.ai and ergast.com as external APIs. <br />
                 Currently working on migration it to the AWS Lambda.
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
              <Heading level='4'><Clone color='#444444' />  web_scraper</Heading>
           </Box>
           <Box                           
              pad='medium' 
              fill='horizontal'
              align='start'
              width='xlarge' 
              justify='start'    
           >                                                
              <p>
                 <a href='https://github.com/ZX10Tomcat/web_scraper' rel="noreferrer" target='_blank'>https://github.com/ZX10Tomcat/web_scraper</a><br />
                 <br/>
                 Dockerized node.js angular solution for scrape information from formula 1 site, show and store it. 
             </p>
           </Box>  
        </Box> 
        </Box>           
      </Box>
      </div>
    )}

export default Projects;