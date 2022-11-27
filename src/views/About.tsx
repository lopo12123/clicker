import { useCallback, useEffect, useState } from "react";
import { version } from "../../package.json"
import { Divider } from "@mui/material";
import { open } from "@tauri-apps/api/shell";

const ExternalLinks = {
    github: 'https://github.com/lopo12123/clicker',
    issue: 'https://github.com/lopo12123/clicker/issues/new',
    email: 'mailto:lopo@zju.edu.cn?subject=clicker problem'
}

export default function About() {
    const [ license, setLicense ] = useState('')

    const handleExternalLinks = useCallback((type: 'github' | 'issue' | 'email') => {
        open(ExternalLinks[type])
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        fetch('/LICENSE')
            .then(res => res.text())
            .then(setLicense)
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="w-full h-full px-4 text-b90">
            <p><b>版本</b></p>
            <p className="text-b60">{ version }</p>
            <Divider sx={ { marginY: '8px' } }/>
            <p><b>协议</b></p>
            <pre className="text-b60">{ license }</pre>
            <Divider sx={ { marginY: '8px' } }/>
            <p><b>贡献</b></p>
            <p className="text-b60 cursor-pointer hover:underline"
               onClick={ () => handleExternalLinks('github') }>在GitHub上查看</p>
            <p className="text-b60 cursor-pointer hover:underline"
               onClick={ () => handleExternalLinks('issue') }>
                反馈 (建议、Bugs等任何内容)
            </p>
            <p className="text-b60 cursor-pointer hover:underline"
               onClick={ () => handleExternalLinks('email') }>
                联系我
            </p>
        </div>
    )
}