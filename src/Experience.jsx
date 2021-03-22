import React from 'react';
import { Box, Heading } from 'grommet';
import { Flag  } from 'grommet-icons';

const Experience = () => {    
    return (
      <div id='experience' style={{paddingTop:'20px'}}>
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
            <Heading level='3'> <Flag color='#444444' size='medium' /> Experience </Heading>
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
              align='center' 
              width='medium' 
              justify='start'   
              background='light-4' 
           >
               <strong>11/2018 – Till now</strong>
            </Box>
            <Box 
               pad='medium' 
               fill='horizontal'
               align='start'
               width='xlarge' 
               justify='start'    
            >
               <strong>“Barclays”, Prague, Czech Republic.</strong>                         
               <p>
                  Full stack .Net developer in a large group of programmers. <br />
                  Developing various applications and features for Barclays Bank on various languages including C# .NET Core. <br />
                  Succesfully done software migration to the new OS. Using SCRUM in development process. <br />
                  Writing documentation using Confluence. Organizing technical presentation about latest technologies.
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
               align='center' 
               width='medium' 
               justify='start' 
               background='light-4'   
            >
               <strong>02/2017­ – 11/2018</strong>
            </Box>
            <Box                           
               pad='medium' 
               fill='horizontal'
               align='start'
               width='xlarge' 
               justify='start'    
            >
               <strong>“Actum”, Prague, Czech Republic.</strong>                         
               <p>
                  Sitecore .Net developer in a large group of programmers. <br / >
                  Developing various features for Innogy web site using Sitecore 8.1 and MVC .NET using SOLID principles. <br />
                  Using SCRUM in development process.
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
               align='center' 
               width='medium' 
               justify='start' 
               background='light-4'   
            >
               <strong>12/2008­  – 02/2017</strong>
            </Box>
            <Box                           
               pad='medium' 
               fill='horizontal'
               align='start'
               width='xlarge' 
               justify='start'    
            >
               <strong>“GNC – Consulting”, Odessa, Ukraine.</strong>                         
               <p>
                  Software engineer in group of 5 programmers. <br /> 
                  Developing Time and Expense and Maintain Projects system using ASP .NET and Zurb Foundation. <br />
                  Developing games and custom components for VS2 system using C# and WPF.
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
               align='center' 
               width='medium' 
               justify='start' 
               background='light-4'   
            >
               <strong>05/2008­  – 12/2008</strong>
            </Box>
            <Box                           
               pad='medium' 
               fill='horizontal'
               align='start'
               width='xlarge' 
               justify='start'    
            >
               <strong>“INCON”, “GNC – Consulting”, Odessa, Ukraine.</strong>                         
               <p>
                  Software engineer in group of 4 programmers.<br /> 
                  Migrate sites to Drupal 6 CMS for “Spiral Solutions” Company based in Israel.
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
               align='center' 
               width='medium' 
               justify='start'
               background='light-4'    
            >
               <strong>11/2007 – 05/2008</strong>
            </Box>
            <Box                           
               pad='medium' 
               fill='horizontal'
               align='start'
               width='xlarge' 
               justify='start'    
            >
               <strong>“Webamg”, Odessa, Ukraine.</strong>                         
               <p>
                  Software engineer in group of 7 programmers. Designing and developing UI for business process managing based on PHP 5 and extjs 2.0 library. <br /> 
                  Providing integration PM UI with a company CRM system via PHP 5 and REST. Designing process definitions using jBPM designer. <br /> 
                  Writing tech documentation on the “wiki” –site of company.  
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
               align='center' 
               width='medium' 
               justify='start'  
               background='light-4'  
            >
               <strong>09/2006 – 11/2007</strong>
            </Box>
            <Box                           
               pad='medium' 
               fill='horizontal'
               align='start'
               width='xlarge' 
               justify='start'    
            >
               <strong>“Avalon Ltd.”, Odessa, Ukraine.</strong>                         
               <p>
                  Lead programmer in group of 2 programmers and few freelancers. <br />
                  Maintaining and developing CRM program based on PHP 4 and MySQL 4. <br />
                  Administrating Apache web-server based on FreeBSD.
               </p>
            </Box>  
         </Box>     

         </Box>            
      </Box>
      </div>
    )}

export default Experience;
