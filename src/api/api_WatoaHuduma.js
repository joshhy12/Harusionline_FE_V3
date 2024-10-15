// src/api/api_WatoaHuduma.js

import axios from 'axios';

const API_URL = 'https://test.harusi.online/api/service_providers';

const getWatoaHuduma = async () => {
  try {
    const response = await axios.get(API_URL);

    // Check if response data has the expected structure
    const formattedData = response.data.map(provider => ({
      id: provider.id,
      name: provider.name,
      mobile: provider.mobile,
      email: provider.email,
      website: provider.website,
      description: provider.description,
      location: provider.location,
      status: provider.status,
      wallpaper: {
        id: provider.wallpaper.id,
        photo_path: provider.wallpaper.photo_path,
        caption: provider.wallpaper.caption,
        md_photo: provider.wallpaper.md_photo,
        sm_photo: provider.wallpaper.sm_photo,
        lg_photo: provider.wallpaper.lg_photo,
      },
      categories: provider.categories.map(category => ({
        id: category.id,
        category: category.category,
      })),
    }));
    return formattedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array in case of error
  }
};

export { getWatoaHuduma };
