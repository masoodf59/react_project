import styled from 'styled-components';

///////////////////////////////AppWraper Styled component///////////////////////////////////
export const AppWrapper = styled.div`
background-color:rgb(237, 241, 242);
height:500vh;
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
    position:absolute;
    width:100%;
    height:500px;
}
h2{
    text-align:center;
    margin-top:3rem;
}
p{
    text-align:center;
    color:grey;
}

`

/////////////////////////////////////End Image Section Styled Component/////////////////////////////////


