Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users , only: [:create, :index, :show, :update, :destroy] do
    resources :artworks, only: [:index]
    resources :comments, only: [:index]
  end

  resources :artworks, excepts: [:new, :edit] do
    resources :comments, only: [:index]
    member do
      get "favorite"
    end
  end

  resources :artwork_shares, only: [:create, :destroy]
  resources :comments, only: [:create, :destroy, :index]
  resources :artworks, excepts: [:new, :edit] do
    member do
      post 'like', :to => 'artworks#like'
    end
  end
end
