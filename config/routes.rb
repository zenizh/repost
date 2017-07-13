Rails.application.routes.draw do
  namespace :api do
    resource :me, only: :update
    resource :session, only: :create
    resource :team, only: [:show, :update]
    resources :services, only: [:index, :create, :show, :update, :destroy]

    resources :users, only: [:index, :create, :show] do
      resources :channels, only: [] do
        resource :subscription, only: [:create, :destroy], controller: 'users/channels/subscriptions'
      end
      resources :posts, only: :index, controller: 'users/posts'
    end

    resources :posts, only: [:index, :create] do
      resources :reactions, only: [:index, :create], controller: 'posts/reactions'
      resources :stars, only: :create, controller: 'posts/stars' do
        delete :destroy, on: :collection
      end
    end

    resources :channels, only: [:create, :show, :update, :destroy] do
      resources :posts, only: :index, controller: 'channels/posts'
      resources :users, only: :index, controller: 'channels/users'
    end

    namespace :me do
      namespace :posts do
        resources :starred, only: :index
      end

      resources :channels, only: :index
      resources :posts, only: [:index, :show, :update, :destroy]
    end
  end

  get '*path', to: 'application#root'

  root 'application#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
