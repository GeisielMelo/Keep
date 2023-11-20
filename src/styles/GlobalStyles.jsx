import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
}

body  {
    font-family: ${(props) => props.theme.font.family.one};
    background-color: ${(props) => props.theme.color.one}; 
}

button {
    &:hover {
        cursor: pointer;
    }
}

// Custom scroll bar
::-webkit-scrollbar {
    width: 5px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: ${(props) => props.theme.color.two}; 
    border-radius: 9999px;
}

::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.four};
    border-radius: 9999px;
} 
`

export default GlobalStyle
