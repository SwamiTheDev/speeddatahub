import { useEffect, useState } from "react";
import axios from 'axios'

export default function Internet() {

    const [ip, setIp] = useState('')
    const [type, setType] = useState('')
    const [org, setOrg] = useState('')
    const [domain, setDomain] = useState('')
    const [device, setDevicetype] = useState('')
    const [browser, setBrowser] = useState('')
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
                setDevicetype(response.data.user_agent.name);
                setDevicetype(response.data);
            })
            .catch(error => { console.log(error) })
    }, [])

    return (
        <div>
            <div>
                <p>{ip}</p>
                <p>IP Address</p>
            </div>
            <div>
                <p>{type}</p>
                <p>Connection Type</p>
            </div>
            <div>
                <p>{device}</p>
                <p>Device</p>
            </div>
            <div>
                <p>{domain}</p>
                <p>Domain</p>
            </div>
            {/* <p>Ip is {ip} </p>
            <p> Connection type is {type} </p>
            <p>Domain is {domain}</p>
            <p>Organization is {org}</p> */}
        </div>
    )
}