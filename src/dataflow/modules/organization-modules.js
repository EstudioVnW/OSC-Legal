// Action Types
const UPDATE_TABLEDATAS = 'osc/organization/UPDATE_TABLEDATAS';
const ADD_NEW_ORG = 'osc/organization/ADD_NEW_ORG';
const DELETE_ORG = 'osc/organization/DELETE_ORG';
const EDIT_ORG = 'osc/organization/EDIT_ORG';

// Initial State
const initialState = {
	tableDatas: [
		{
			id: 1,
			tradingName: 'Instituto Precisa Ser',
			companyName: 'Vai na Web',
			address: 'aswsw',
			addressComplement: 'wswewrfew',
			neighborhood: 'edwdwed',
			city: 'ewfdrefe',
			telephone: '987456241',
			cep: '21220300',
			status: 'pendente de autorização',
			createdIn: '18/06/2019',
			authorization: '31/08/1995',
			dueDate: '12/07/2020',
		},
		{
			id: 2,
			tradingName: 'Vai na Web',
			companyName: 'Instituto Precisa Ser',
			address: '',
			addressComplement: '',
			neighborhood: '',
			city: '',
			cep: '',
			createdIn: '18/06/2019',
			authorization: '16/10/1965',
			dueDate: '1/06/2020',
			status: 'pendente de pagamento',
		},
		{
			id: 3,
			tradingName: 'Teste1',
			companyName: 'Instituto Precisa Ser',
			address: '',
			addressComplement: '',
			neighborhood: '',
			city: '',
			cep: '',
			createdIn: '18/06/2019',
			authorization: '16/10/1965',
			dueDate: '11/05/1966',
			status: 'vencido',
		},
		{
			id: 4,
			tradingName: 'Teste2',
			companyName: 'Instituto Precisa Ser',
			address: '',
			addressComplement: '',
			neighborhood: '',
			city: '',
			cep: '',
			createdIn: '18/06/2019',
			authorization: '16/10/1965',
			dueDate: '11/05/1966',
			status: 'pago',
		},
		{
			id: 5,
			tradingName: 'Teste3',
			companyName: 'Instituto Precisa Ser',
			address: '',
			addressComplement: '',
			neighborhood: '',
			city: '',
			cep: '',
			createdIn: '18/06/2019',
			authorization: '16/10/1965',
			dueDate: '11/05/1966',
			status: 'isento',
		},
		{
			id: 6,
			tradingName: 'Teste4',
			companyName: 'Instituto Precisa Ser',
			address: '',
			addressComplement: '',
			neighborhood: '',
			city: '',
			cep: '',
			createdIn: '18/06/2019',
			authorization: '16/10/1965',
			dueDate: '11/05/1966',
			status: 'prazo prorrogado',
		},
		{
			id: 7,
			tradingName: 'Teste5',
			companyName: 'wada wada',
			address: '',
			addressComplement: '',
			neighborhood: '',
			city: '',
			cep: '',
			createdIn: '24/06/2000',
			authorization: '12/07/1996',
			dueDate: '31/08/1995',
			status: '-',
		},
	],
	org: {
		tradingName: '',
		companyName: '',
		telephone: '',
		address: '',
		addressComplement: '',
		neighborhood: '',
		city: '',
		cep: '',
		cnpj: '',
	},
};

// Reducers
export default function (state = initialState, action) {
	switch (action.type) {
	case UPDATE_TABLEDATAS:
		return Object.assign({}, state, {
			tableDatas: action.info,
		});
	case ADD_NEW_ORG:
		return Object.assign({}, state, {
			...state,
			tableDatas: state.tableDatas.concat(action.info),
		});
	case DELETE_ORG:
		return {
			...state,
			tableDatas: state.tableDatas.filter(org => org !== action.info),
		};
	case EDIT_ORG: {
		const remainningOrgs = state.tableDatas.filter(
			item => item.id !== action.info.id,
		);

		return {
			...state,
			tableDatas: remainningOrgs.concat(action.info),
		};
	}
	default:
		return state;
	}
}

// Action Creators
export const updateTableDatas = info => ({
	type: UPDATE_TABLEDATAS,
	info,
});

export const addNewOrg = info => ({
	type: ADD_NEW_ORG,
	info,
});

export const deleteOrg = info => ({
	type: DELETE_ORG,
	info,
});

export const editOrg = info => ({
	type: EDIT_ORG,
	info,
});
