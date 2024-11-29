import { i } from '@instantdb/admin';

const graph = i.graph(
	{
		prayers: i.entity({
			answered: i.boolean(),
			email: i.string(),
			inserted_at: i.date(),
			name: i.string(),
			prayer_request: i.string(),
			updated_at: i.date()
		})
	},
	{}
);

export default graph;
