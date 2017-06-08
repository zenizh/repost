Rails.application.routes.draw do
  namespace :api do
    resource :session, only: [:create, :destroy]
    resource :team, only: [:show, :update]
    resources :services, only: :index
    resources :users, only: :create

    resources :posts, only: [:index, :create] do
      resources :stars, only: :create, controller: 'posts/stars' do
        delete :destroy, on: :collection
      end
    end

    resources :channels, only: [] do
      resources :posts, only: :index, controller: 'channels/posts'
      resources :users, only: :index, controller: 'channels/users'
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
