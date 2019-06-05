import request from 'superagent';

export default class MissionService {

	static listMissions(filters = {}, order = 'desc') {

		return new Promise((resolve, reject) => {
			request
				.get(`https://api.spacexdata.com/v2/launches`)
				.query({
					...filters,
					order,
				})
				.end((err, res) => {
						if (err) {
							reject(err);
							return;
						}

						resolve(res.body);
			});
		});
	}

	static listLaunchPads() {
		return new Promise((resolve, reject) => {
			request
				.get(`https://api.spacexdata.com/v2/launchpads`)
				.end((err, res) => {
						if (err) {
							reject(err);
							return;
						}

						resolve(res.body);
			});

		})
	}

}
