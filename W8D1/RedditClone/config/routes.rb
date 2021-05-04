Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:new, :create, :show, :index] do 
    resources :subs, only: [:create] 
  end 
  resource :session, only: [:new, :create, :destroy]

  resources :subs, except:[:destroy,:create] do
    resources :posts, only:[:new,:create]
  end 

  
  resources :posts, except:[:index, :edit,:update,:new,:create]
end
