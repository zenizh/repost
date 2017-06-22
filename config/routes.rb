Rails.application.routes.draw do
  namespace :api do
    resource :me, only: :update
    resource :session, only: [:create, :destroy]
    resource :team, only: [:show, :update]
    resources :services, only: [:index, :create, :show, :update, :destroy]
    resources :users, only: [:index, :create]

    resources :posts, only: [:index, :create] do
      resources :stars, only: :create, controller: 'posts/stars' do
        delete :destroy, on: :collection
      end
    end

    resources :channels, only: [:create, :show] do
      resources :posts, only: :index, controller: 'channels/posts'
      resources :users, only: :index, controller: 'channels/users'
    end

    namespace :me do
      resources :channels, only: [:index, :update]
      resources :posts, only: [:index, :show, :update, :destroy]
    end
  end

  get '*path', to: 'application#root'

  root 'application#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
