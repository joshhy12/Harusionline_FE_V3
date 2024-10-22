import axios from 'axios';

class EventService {
  constructor() {
    this.API_URL = 'https://test.harusi.online/api/eventsp';
  }

  async fetchEvents() {
    try {
      const response = await axios.get(this.API_URL);
      return response.data.data.passed.map(event => ({
        id: event.id,
        event_title: event.event_title,
        event_description: event.event_description,
        event_type: event.event_type,
        event_date: event.event_date,
        wallpaper: event.wallpaper
      }));
    } catch (error) {
      console.error("Could not fetch events:", error);
      return [];
    }
  }
}

export default new EventService();
