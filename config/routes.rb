Rails.application.routes.draw do
  namespace :api do
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create]
    resources :users, only: :create

    resources :channels, only: [] do
      resources :posts, only: :index, controller: 'channels/posts'
    end

    namespace :me do
      resources :channels, only: :index
      resources :posts, only: :index
    end
  end

  get '*path', to: 'application#root'

  root 'application#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
