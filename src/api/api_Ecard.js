import axios from 'axios';

class ECardService {
  constructor() {
    this.API_URL = 'https://test.harusi.online/api/ecards/templates';
  }

  async fetchECards() {
    try {
      const response = await axios.get(this.API_URL);

      if (response.data && response.data.data) {
        return response.data.data.map(card => ({
          id: card.id,
          name: card.name,
          event_type: card.event_type,
          card_category: card.card_category,
          price: card.price,
          wallpaper: card.photo_path,
          template_type: card.template_type,
          send_to_whatsapp: card.send_to_whatsapp ? 'Yes' : 'No'
        }));
      } else {
        console.error("Unexpected response structure:", response.data);
        return [];
      }
    } catch (error) {
      console.error("Could not fetch E-cards:", error);
      return [];
    }
  }
}
export default new ECardService();