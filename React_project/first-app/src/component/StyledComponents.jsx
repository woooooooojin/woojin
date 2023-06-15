import React from 'react'
import styled from 'styled-components'

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
        </>
    )
}

