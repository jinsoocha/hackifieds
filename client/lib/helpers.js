const getCategories = callback => {
  $.ajax({
    url: '/api/categories',
    method: 'GET',
    contentType: 'application/json',
    success: data => callback(data),
    error: err => console.log( 'Error getting categories from server.', err),
  });
};

//Helper functions performing AJAX requests
const getListings = (category, callback) => {
  $.ajax({
    url: '/api/listings',
    method: 'GET',
    contentType: 'application/json',
    data: {category},
    success: data => callback(data),
    error: err => console.log( 'Error getting listings from server.', err),
  });
};

const getFilteredResults = (data, callback) => {
  console.log('gFE data: ', data);
  $.ajax({
    url: '/api/filters',
    method: 'GET',
    contentType: 'application/json',
    data: data,
    success: data => callback(data),
    error: err => console.log('Error getting filtered results from server', err),
  })
}

let getDetailedListing = (id, callback) => {
  $.ajax({
    url: '/api/entryDetail',
    method: 'GET',
    contentType: 'application/json',
    data: {id},
    success: data => callback(data),
    error: err => console.log( 'Error getting listings from server.', err)
  });
};
let postComment = (formData, callback) => {
  console.log('formdata', formData)
  $.ajax({
    url: '/api/addComment',
    method: 'POST',
    data: formData,
    success: data => callback(data),
    error: err => console.log( 'Error sending listing to server.', err)
  });
};

const postListing = (formData, callback) => {
  console.log('sending new listing:', formData);
  $.ajax({
    url: '/api/listings',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
    success: data => callback(data),
    error: err => {
      if (!formData.userId) {
        alert('You have to be logged in to post');
      }
      console.log( 'Error sending listing to server.', err)
    },
  });
};

const userAuth = callback => {
  $.ajax({
    url: '/api/auth',
    method: 'GET',
    success: data => {
      callback(data);
    },
    error: err => console.log( 'Error getting session from server.', err),
  });
};

const logout = callback => {
  $.ajax({
    url: '/api/logout',
    method: 'GET',
    success: data => callback(data),
    error: err => console.log( 'Error logging out.', err),
  });
};

const dateFormatter = date => {
  let months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  }
  let formattedDate = new Date(date);
  let month = formattedDate.getMonth();
  let day = formattedDate.getDate();

  return months[month] + ' ' + day;
};

export default { getCategories, getListings, postListing, userAuth, dateFormatter, logout, getFilteredResults, getDetailedListing, postComment};

