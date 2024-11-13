import axios from 'axios';

const API_URL = 'https://test.harusi.online/api/service_providers';

const getWatoaHuduma = async () => {
  try {
    const response = await axios.get(API_URL);
    const formattedData = response.data.map(provider => ({
      id: provider.id,
      name: provider.name,
      mobile: provider.mobile,
      email: provider.email,
      website: provider.website,
      description: provider.description,
      location: provider.location,
      status: provider.status,
      facebook: provider.facebook,
      instagram: provider.instagram,
      twitter: provider.twitter,
      youtube: provider.youtube,
      wallpaper: provider.wallpaper,
      categories: provider.categories
    }));
    return formattedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const createWatoaHuduma = async (formData) => {
  try {
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'wallpaper' && formData[key]) {
        data.append('wallpaper', formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    const response = await axios.post(API_URL, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating service provider:', error);
    throw error;
  }
};

const updateWatoaHuduma = async (id, formData) => {
  try {
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'wallpaper' && formData[key]) {
        data.append('wallpaper', formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    const response = await axios.put(`${API_URL}/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating service provider:', error);
    throw error;
  }
};

const deleteWatoaHuduma = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting service provider:', error);
    throw error;
  }
};

export { 
  getWatoaHuduma, 
  createWatoaHuduma, 
  updateWatoaHuduma, 
  deleteWatoaHuduma 
};
