import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrap = styled.div`
    background-color:#ccc;
    height: 200px;
`
//컴포넌트

const Title = styled.h1`
    font-size : 20px;
    text-align : center;
    line-height : 200px;
    color : blue;
`

const Button = styled.button`
    width : 100px;
    height : 50px;
    // background-color:#ccc;
    background-color:${(props)=>(props.enter ? 'yellow' : '#ccc')};
    border-color:${(props)=>(props.enter ? 'blue' : 'black')};
    color:blue;
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    &:hover{
        font-size:20px;
        font-weight:bold;
    }
`



//상속
const FirstButton = styled(Button)`
    width:200px;
    background-color:steelblue;
`


const LinkButton = styled(Button)`
    display : block;
    text-decoration:none;

`


const Input = styled.input`
    padding:8px;
    margin:10px;
    background-color:yellow;
    border-radius: 5px;
    color: ${(props)=>props.inputColor? props.inputColor : 'blue'};
    color: ${(props)=> props.inputColor || 'blue'}


`

const FirstInput = styled.input.attrs((props) => ({

    type : 'text',
    size : props.size || '16px'

}))`
    color: blue;
    font-size : ${(props)=>props.size} ;   
`



const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }    
    100% {
        transform: rotate(360deg);
    }    

`
const Rotate = styled.div`
    animation: ${rotate} 0.5s infinite;
    padding: 30px;
    font-size: 100px;
    display: inline-block;
`


export default function StyledComponents(){
    return(
        <>
            <Wrap>
                <Title>hello react</Title>
            </Wrap>
            <Button>button</Button>
            <Button enter>button_enter</Button>
            <FirstButton>button</FirstButton>
            <LinkButton as='a' href='http://www.naver.com'>btn</LinkButton>
            <br />

            <Input type='text' defaultValue={'input_txt'} inputColor='red'></Input><br/>
            <Input type='text' defaultValue={'input_txt'} inputColor=''></Input><br/>
            <FirstInput></FirstInput>
            <Rotate> * </Rotate>
        </>
    )
}

