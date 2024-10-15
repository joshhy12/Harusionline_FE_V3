// src/api/api_Ecard.js
import axios from 'axios';

const API_URL = 'https://test.harusi.online/api/ecards/templates'; // E-cards API endpoint

export const fetchECards = async () => {
  try {
    const response = await axios.get(API_URL);
    // Check if response data has the expected structure
    if (response.data && response.data.data) {
      return response.data.data.map(card => ({
        id: card.id,
        name: card.name,
        event_type: card.event_type,
        card_category: card.card_category,
        price: card.price,
        wallpaper: card.photo_path, 
        template_type: card.template_type,
        send_to_whatsapp: card.send_to_whatsapp ? 'Yes' : 'No' // Transforming to a string for easier display
      }));
    } else {
      console.error("Unexpected response structure:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Could not fetch E-cards:", error);
    return [];
  }
};
