import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {vscDarkPlus} from "react-syntax-highlighter/dist/cjs/styles/prism";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from "@mui/material/Box";

interface Props {
    language: string,
    value: any
}
const CodeBlock:React.FC<Props> = (props: Props) => {
    return (
        <Box>
            <SyntaxHighlighter
                language={`${props.language}`}
                style={vscDarkPlus}
                customStyle={{padding: "20px", borderRadius: "6px"}}
            >
                {props.value}
            </SyntaxHighlighter>
        </Box>
    )
}

export default CodeBlock;
