import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}


html {
  // font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}



 

h1,h2,h3,h4,h5,h6,p{
  color: ${({theme})=>theme.colors.textColor};
}



a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

.container-custom {
  max-width: 1200px;
  margin: 0 auto;
}






.cart-trolley-link{
  position: relative;

  .cart-trolley{
    position: relative;
  }

  .cart-trolley-item{
    position: absolute;
    color: white;
    font-size: 13px;
    top: 0px;
    left: 52%;
    right: 42%;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: blue;
    
  }
}  



.btn-color{
  background-color: ${({ theme }) => theme.colors.buttonColor};
  color: white;
}



  #hero-fig{
    position: relative;
    height: 100%;
    // width: 100%
  .img-fluid-custom{
    width: 86%;
    height: 100%;
  }
  
  }
  #hero-fig::after{
    content: " ";
      position: absolute;
      display: block;
      width: 61%;
      height: 89%;
      right: 24px;
      top: -10%;
      z-index: -1;
      background-color: rgb(186, 186, 219);
  }




@media (max-width: 767.9px){
  // .cart-trolley-item{
  //   position: absolute;
   
  //   top: 0px;
  //   left: 0px !important;
   
    
  // }
}

@media (min-width: 1200px){
  .container{
    max-width: 1100px;
  }
}

#services-section{

  background-color: #80808014;
  color: ${({ theme }) => theme.colors.textColor};

  .card{
    border: 0px;
    border-radius: 10px;
    height: 244px;
  }

  .card-body{
    padding-top: 0 !important;
   
  }
 
  



}

.fig{
  height: 13em;
  position: relative;

  .card-img-top{
    padding: 16px;
    height: 100%;
    //width: 100%;
  }

  .item-name{
    position: absolute;
    right: 25px;
    top: 25px;
    background-color: rgb(235 230 230);
    padding: 3px 10px;
    border-radius: 20px;
    
    
  }

  .item-name:hover{
    cursor: pointer;
  }

  
}

.servcie-section-two{
.services-col{
  background: ${({theme})=>theme.colors.secondaryBg};
  height: 200px;
  border-radius: 20px;
  div{
    transform: translate(0px, 84px);

    
  }
}

.serivces-icon{
  color: ${({theme})=>theme.colors.buttonColor};
  font-size: 20px;
}
}


.trust-section{
  background-color: ${({theme})=>theme.colors.secondaryBg};
  .trust-brands{
    width: 100px;
   
  }

  h6{
    color: ${({theme})=>theme.colors.textColor};
  }
}

.contact-form-div{
  margin-top: 15px;
  .contact-form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 36rem;

  }
}

.footer{

  
  .get-started-div{
    position: absolute;
    transform: translate(20%, -30%);
    background-color: #f7f7f7;
    width: 70%;
    padding: 20px;
    border-radius: 20px;
    margin: 0 auto;

  }

  
}

footer{
   
  background-color: #030a1ee0;
     
  
  .social-icon{
    text-align: center;
    border: 1px solid white;
    padding: 4px;
    border-radius: 50%;
    width: 35px;
    
   
   }

   .text-light{
   color: #f8f9fac7;
   }
   
  }

  form{
    width: 70%;
    
  }

  .py-custom{
    padding-top: 80px;
  }
}

.product-real-price{
  color: ${({theme})=>theme.colors.buttonColor}
}
.benefits-icons{
    font-size: 30px;
    background-color: ${({theme})=>theme.colors.secondaryBg};
    padding: 3px;
    border-radius: 50%;
}

.rating{
  color: #ffae1aed;
}
.color-selection{
  // background-color: rgb(255, 0, 0);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: none;
  opacity: .3;

  &:hover{

    opacity: 1;
  }
}

.active{
  opacity: 1;
}
.color-check{
  vertical-align: super;
  color: white;
}


.cart-amount{
 display: flex;
  .cart-amount-button{
    background: none;
    border: 0;
    
  }
}

.add-car-btn{
  background-color: ${({theme})=>theme.colors.buttonColor};
  color: white;
  padding: 8px 10px;
}

.product-cat-btn{
  background: none;
    border: 0;
    color: ${({theme})=> theme.colors.textColor};
    display: block;
    margin-top: 10px;
}

.product-cat-btn:focus{
  border-bottom: 2px solid black;
}

.list-view-img{
  height: 10.4em;
  max-width: 249.58px;
  margin: 0;
}
.active-btn{
  background-color: black !important;
  color: white;
}
.view-control{
  background-color: ${({theme})=>theme.colors.secondaryBg};
  border: 0px;
  padding: 3px 8px;

  
}

`;