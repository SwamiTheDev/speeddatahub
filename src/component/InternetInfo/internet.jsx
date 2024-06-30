import { useEffect, useState } from "react";
import axios from 'axios'

export default function Internet() {

    const [ip, setIp] = useState('')
    const [type, setType] = useState('')
    const [org, setOrg] = useState('')
    const [domain, setDomain] = useState('')
    // const [ip, setIp] = useState('')
    // const [ip, setIp] = useState('')
    // const [ip, setIp] = useState('')
    // const [ip, setIp] = useState('')

    useEffect(() => {

        axios.get('https://api.ipregistry.co/?key=5pset9ruii4bjgp9')
            .then(response => {
                setIp(response.data.ip);
                setType(response.data.type);
                setOrg(response.data.connection.organization);
                setDomain(response.data.connection.domain);

            })
            .catch(error => { console.log(error) })
    }, [])

    return (
        <div>
            <p>Ip is {ip} </p>
            <p> Connection type is {type} </p>
            <p>Domain is {domain}</p>
            <p>Organization is {org}</p>
        </div>
    )
}