export const signup = (formUser) => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: formUser,
  })
);

export const login = (formUser) => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: formUser,
  })
);

export const logout = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
);