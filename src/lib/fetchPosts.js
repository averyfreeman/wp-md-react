export const fetchPosts = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const result = await response.text();
    // const result = await response.json();
    // localStorage.setItem('posts', JSON.stringify(result));
    localStorage.setItem('posts', result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
