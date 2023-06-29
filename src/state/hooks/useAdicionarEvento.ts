import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"
import { obterid } from "../../util"

export const useAdicionarEvento = () => {
    const setListaDeEvento = useSetRecoilState<IEvento[]>(listaDeEventosState)
    
    return (evento: IEvento) => {
        const hoje = new Date();
        if(evento.inicio < hoje){
            throw new Error("Eventos não podem ser cadastrados com data menor que a atual")
        }
        evento.id = obterid();

        return setListaDeEvento(listaAntiga => [...listaAntiga, evento]);
    }
}