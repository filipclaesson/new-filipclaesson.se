const initialState = {
	user:{
		name:"filip",
		id:1
	},
	dashboard:{
		dashboard:[{
			name: 'init dashboad name',
			description: 'my init dashboard description'
		}]
		,dashboard_items:[]
	},
	metrics:{
		metrics:[],
		current_metric:{},
		current_metric_data:{}
	}
}

export default initialState;