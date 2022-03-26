import React, { useState } from 'react';
import * as API from '../../env'
import CryptoJS from 'crypto-js';
import { IRequest } from './appInterfaces';]

export const RequestProvider : React.FC<React.ReactNode> = ({ children }) =>{
    const CharactersRequest = async () => {
        let time = new Date().getTime();
        let hash = CryptoJS.MD5(time+API.Config.PrivateKey+API.Config.PublicKey).toString();
        const request = await fetch(API.Requests.Characters+`?limit=2&ts=${time}&apikey=${API.Config.PublicKey}&hash=${hash}`).then(response => response.json())
        const [results, SetResults] = useState<IRequest[]>([
            {
                code: request.code,
                status: request.status,
                data: {
                    offset: request.offset,
                    limit: request.limit,
                    total: request.total,
                    count: request.count,
                    results: request.result
                },
                etag: request.etag,
            }
        ])
    }
}
