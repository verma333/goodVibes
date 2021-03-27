import styled from 'styled-components'



export const Section = styled.section`
display:flex;
justify-content:space-around;
 align-items:center;
 
  height:28rem;
  width:100%;
  margin-top:5rem;

 
@media (min-width: 1025px) {
  
  .grid {
      width:100%;
      
      height:100%;
      display:flex;
justify-content:space-between;
 align-items:center;
 
      .left {
          width:55%;
          height:100%;
          background: transparent;
 
          position: relative;
          .btn {
            position: absolute;
             bottom:-7%;
             right:2%;
             transition: transform .8s;
             li {
                list-style:none;
                color:white;
                background: #D0345A;
            display:flex;
            justify-content:space-around;
            align-items:center;
            width:10rem;
            height:2rem;
            font-family: Mono_bold ;
           
             }
             #bt {
              font-family: Montserrat ;
               font-size:0.8rem;
               text-transform:uppercase;
             }
          }
          .btn:hover {
 
  transform: scale(1.1); 
 
}
      }
      .right {
          width:42%;
          display:flex;
          justify-content:space-around;
          flex-direction:column;
        align-items:center;
          height:60%;
   .top {
     font-size:1.8rem;
  font-weight:800;
  width:70%;
  font-family: Mono_bold;
   }
   .mid {
    font-size:1.3rem;
 
  width:70%;
   }
   .bottom {
    display:flex;
          justify-content:space-around;
          width:72%;
          align-items:center;
          ul {
             
              width:30%;
              #bold{
                  font-size:2.5rem;
                   font-weight:1000;
                   font-family: Mono_bold;
              }
          }
   }
      }
  }
  
 

    
  

}
`