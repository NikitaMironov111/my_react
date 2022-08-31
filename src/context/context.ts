import { createContext, Dispatch, SetStateAction } from 'react';

const Context = createContext({} as IModal);
export default Context;

interface IModal {
	openModalLogin: boolean;
	setOpenModalLogin: Dispatch<SetStateAction<boolean>>
}
