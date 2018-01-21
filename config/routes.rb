Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: '/letter_opener'
  end

  namespace :api do
    resources :comments, only: [] do
      resources :likes, only: :create, controller: 'comments/likes' do
        delete :destroy, on: :collection
      end
    end
    resources :posts, only: [] do
      resources :likes, only: :create, controller: 'posts/likes' do
        delete :destroy, on: :collection
      end
      resources :stars, only: :create, controller: 'posts/stars' do
        delete :destroy, on: :collection
      end
    end
  end

  namespace :teams do
    resources :users, only: [:index, :update, :destroy]
    resources :invitations, only: [:index, :new, :create, :update, :destroy]
  end

  namespace :users do
    namespace :passwords do
      resource :resets, only: [:new, :create]
    end

    resources :activations, only: [:new, :create]
    resources :passwords, only: :update
  end

  resource :account, only: [:edit, :update]
  resources :notifications, only: :index
  resources :sessions, only: :create

  get '/posts/calendars/:year/:month', to: 'posts/calendars#show', year: /\d{4}/, month: /\d{1,2}/, as: :posts_calendar
  get '/posts/lists', to: 'posts/lists#index', as: :posts_lists
  get '/users/passwords/edit', to: 'users/passwords#edit', as: :edit_users_password
  get :sign_in, to: 'sessions#new'
  delete :sign_out, to: 'sessions#destroy'

  # posts#show has to define after posts/lists#index
  resources :posts do
    resources :comments, only: [:create, :edit, :update, :destroy], controller: 'posts/comments'
  end

  root 'posts#index'
end
