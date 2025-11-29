const formatUserResponse = (user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    babyGender: user.babyGender,
    dueDate: user.dueDate,
    avatar: user.avatar
  });
  
  module.exports = formatUserResponse;