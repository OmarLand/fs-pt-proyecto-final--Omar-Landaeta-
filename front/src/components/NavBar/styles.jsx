import { styled } from 'styled-components';

const NavBarStyle = styled.div`

    @media screen, (max-width : 640px) {

        .navbar{
            border: 1px solid black;
            background-color : #9BD1E5;
            color            : black;
            display          : flex;
            justify-content  : center;
            list-style       : none;
            gap              : 35px;
            width            : auto;
            height           : 20px;
            padding          : 5px;
            margin-top       : 8px;
            font-size        : 18px;
            text-align: center;

        }

        .navbar li:hover{
            color: gray;
        }

    
    }

    @media screen, (min-width : 641px) {

        .navbar{
            border: 1px solid black;
            background-color : #9BD1E5;
            color            : black;
            display          : flex;
            justify-content  : center;
            list-style       : none;
            gap              : 35px;
            width            : 100%;
            height           : 20px;
            padding          : 5px;
            margin-top       : 8px;
            font-size        : 18px;
            text-align: center;

        }

        .navbar li:hover{
            color: gray;
        }

    
    }

`

export default {
    NavBarStyle
};