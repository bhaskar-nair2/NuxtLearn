<template>
  <div>
    <h1>All Events</h1>
    <event-card v-for="(event, index) in events" :event='event' :key="index" :data-index="index" />
  </div>
</template>

<script>
import EventCard from '~/components/EventCard';
import { mapState } from 'vuex';
// import EventService from '~/services/EventService';

export default {
	head() {
		return {
			title: 'Event Listing'
		};
	},
	async fetch({ store, error }) {
		try {
			await store.dispatch('events/fetchEvents');
		} catch (e) {
			error({
				statusCode: 503,
				message: 'Unable to fetch Events'
			});
		}
	},
	components: {
		EventCard
	},
	computed: mapState({
		events: (state) => state.events.events
	})
	// would have been context and context.$axios, but we destructured it
	// async asyncData({ error }) {
	// 	// return $axios
	// 	// 	.get('http://localhost:8000/events')
	// 	// 	.then((response) => ({
	// 	// 		events: response.data
	// 	// 	}))
	// 	// 	.catch((e) => {
	// 	// 		error({ ststusCode: 503, message: 'Unable to fetch events' });
	// 	// 	});
	// 	try {
	// 		const resp = await EventService.getEvents();
	// 		return {
	// 			events: resp.data
	// 		};
	// 	} catch (e) {
	// 		error({
	// 			statusCode: 503,
	// 			message: 'Unable to fetch events'
	// 		});
	// 	}
	// }
};
</script>
