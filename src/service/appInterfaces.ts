export interface IRequest { // Criar interface para a resposta da Api. No site da Marve mostra que a resposta é um Objeto
    code: any;
    status: string;
    data: ContainerRequest;
    etag: string;
    copyRight?: string;
    attributionText?: string
}

export interface ContainerRequest {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: [];
}

export type RequestContextType = {
    request: IRequest[];
    updateRequest: (request: IRequest) => void;
}