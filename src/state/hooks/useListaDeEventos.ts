import { useRecoilValue } from "recoil"
import { listaDeEventosState } from "../atom"

export const useListaDeEventos = () => {
    return useRecoilValue(listaDeEventosState)
}