import styled from 'styled-components';

///////////////////////////////AppWraper Styled component///////////////////////////////////
export const AppWrapper = styled.div`
background-color:rgb(237, 241, 242);
height:540vh;

box-sizing:border-box;
margin:0;
padding:0;
`
///////////////////////////////// End AppWrapper Styled Component//////////////////////////////////

///////////////////////////////// Navbar Styled Component//////////////////////////////////
export const NavWrapper = styled.div`
background:white;
padding:2px;


`;

export const Logo = styled.image`
display:flex;
justify-content:space-evenly;
align-items:center;
img{
    width:60px;
    height:60px;
    border-radius:50%;
}

ul{
    display:flex;
    align-items:center;
    
}
li{
    margin:13px;
    list-style-type:none;
    text-decoration:none;
    font-weight:bold;
}
button{
    font-weight:bold;
    background:yellow;
}
`;

/////////////////////////////////////End Navbar Styled Component/////////////////////////////////////

/////////////////////////////////////Hero Section Styled Component/////////////////////////////////////

export const Background = styled.div`
.bg{
    background-image:url('images/hero.jpg');
    height:500px;
    background-position:center;
    background-size:cover;
   
}
.content{
    background-color:rgba(0,0,0,0.7 );
    height:500px;
}
p{
    text-align:center;
    margin-left:3rem;
    color:white;
}
h1{
    color:white;
    text-align:center;
    padding:50px
   
}
.main{
    text-align:center;
}
.b1{
    border:1px solid white;
    margin:10px;
    color:white;
    font-weight:bold;
   
}
.b2{
    background-color:yellow;
    margin:10px;
    font-weight:bold;
}
.buttons{
    margin-left:33rem;
    margin-top:2rem;
}

`

/////////////////////////////////////End Hero Section Styled Component/////////////////////////////////


/////////////////////////////////////Image Section Styled Component/////////////////////////////////

export const CardImages = styled.div`
.imagehead{
    background-color:white;
    /* position:absolute; */
    width:100%;
    height:500px;
}
.pics{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
}
.card{
    margin:10px;
    border:none;
}
img{
    width:250px;
    height:200px;
    margin:10px;
    border:1px solid silver;
    padding:3px;
    
   
}
h2{
    text-align:center;
    display:grid;
    align-items:center;
  padding-top:50px;
    
}
p{
    text-align:center;
    color:grey;
}
span{
    margin-left:10px;
    text-align:center;
    border:1px solid silver;
    width:250px;
    padding:6px;
    margin-top:-10px;
    border-top:none;
    
   
}
img:hover{
    border:2px solid black;
}
span:hover{
    border:2px solid black;
}
button{
    border:1px solid silver;
    margin-left:37rem;
    margin-top:2rem;
    font-weight:bold;
}

`

/////////////////////////////////////End Image Section Styled Component/////////////////////////////////


/////////////////////////////////////Card Section Styled Component/////////////////////////////////
export const Cards = styled.div`
.cardhead{
    text-align:center;
}
p{
    color:grey;
    padding:12px;
}
h2{
    text-align:center;
    margin-top:4rem;
}
span{
    margin-left:32rem;
    color:grey;
   
}

.cards{
    margin-left:16rem;
}
.card{
    width:400px;
    height:230px;
    
}
.icon{
background-color:yellow;
width:40px;
height:40px;
border-radius:50%;
text-align:center;
padding:6px;
margin-left:10px;
}
h5{
    margin-left:10px;
    margin-top:10px;
}


`
/////////////////////////////////////End Card Section Styled Component/////////////////////////////////



/////////////////////////////////////Review Card Section Styled Component/////////////////////////////////

export const ReviewCard = styled.div`
margin-top:4rem;
background-color:white;
height:450px;
.cards{
display:flex;
flex-wrap:wrap;
margin-left:13rem;


}
h2{
    padding-top:40px;
    text-align:center;
}
h6{
    text-align:center;
    color:grey;
}
p{
    padding:10px;

}
.card{
    width:13rem;
    margin:10px;

   
}
span{
   border:none;
   color:yellow;
    
}
h5{
    font-size:13px;
    font-weight:bold;
}


`

/////////////////////////////////////End Review Card Section Styled Component/////////////////////////////////


/////////////////////////////////////End Review Card Section Styled Component/////////////////////////////////
export const AboutUs = styled.div`
img{
    width:350px;
    height:250px;
    margin-top:2rem;
}
.text{
    margin-top:3rem
}

p{
    color:grey;
    margin-top:2rem;
}
.main{
    margin-left:auto;
}



`;


/////////////////////////////////////End Review Card Section Styled Component/////////////////////////////////



/////////////////////////////////////Contact Section Styled Component/////////////////////////////////

export const ContactUs = styled.div`
background-color:white;
height:110vh;
margin-top:3rem;

.parent{
    margin-left:auto;
}
h2{
    padding-top:100px;
}
li{
    list-style-type:none;
    margin-left:-50px;
    padding:15px;
}

span{
    background-color:yellow;
    width:30px;
    height:30px;
    border-radius:50%;
    padding:8px;
    margin-right:15px;
   
}

form{
    padding:3rem;
   margin-top:3rem;
}
button{
    background-color:yellow;
    font-weight:bold;
}



`;
/////////////////////////////////////End Contact Section Styled Component/////////////////////////////////


/////////////////////////////////////Footer Section Styled Component/////////////////////////////////
export const FooterSection = styled.div`
margin-top:5em;

.parent{
   margin-left:14rem;
}
li{
    list-style-type:none;
    padding:7px;
    color:grey;

}
h3{
    margin-left:36px;
}
p{
    color:grey;
    margin-top:1.5rem;
}
img{
    width:5rem;
    height:5rem;
    border-radius:50%;
    
}
.parent2{
    background-color:white;
    height:10vh;
    margin-top:2.5rem;
 
    
}
.main{
    margin-left:10rem;

}
h6{
    color:grey;

    
}



`
/////////////////////////////////////End Footer Section Styled Component/////////////////////////////////


