import { styled } from '@mui/system';
import { Button } from '@mui/material';

interface typeButtonCus {
    bgColor?: string;
    bgHoverColor?: string;
    textColor?: string;
    textHoverColor?: string;
}

const MyComponent = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
});

const ButtonCus = styled(Button)<typeButtonCus>`
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};

    &:hover {
        background-color: ${(props) => props.bgHoverColor};
        color: ${(props) => props.textHoverColor};
    }
`;
export { MyComponent, ButtonCus };
