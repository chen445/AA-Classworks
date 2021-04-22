Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resource :users

  get '/users', to: 'users#index' 
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'
  get '/users/new', to: 'users#new'
  get '/users/edit', to: 'users#edit'
  
end
