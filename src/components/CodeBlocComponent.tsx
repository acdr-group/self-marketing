import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus} from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
    code: string
}

const CodeBlocComponent: React.FC<Props> = (props: Props) => {
    return (
        <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
                borderRadius: "var(--space-3)",
                padding: "var(--space-6) var(--space-5)",
                backgroundColor: "#161b22",
                boxShadow: "0 0 2px grey",
            }}
        >
            {props.code}
        </SyntaxHighlighter>
    );
}

export default CodeBlocComponent
