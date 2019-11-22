Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:new, :create, :destroy]
    resources :servers, only: [:create, :update, :show, :index, :destroy] do
      resources :channels, only: [:create, :update, :show, :index, :destroy]
    end
    resources :friendships, only: [:create, :destroy, :index, :show, :update]
    resources :channel_messages, only: [:create, :index, :destroy]
    resources :server_memberships, only: [:create, :destroy, :index]
    resources :dm_chat_channels, only: [:index, :create, :show]
    resources :dm_messages, only: [:create, :index, :destroy]
    resources :profile_icons, only: [:create, :show, :update]
  end

  mount ActionCable.server, at: '/cable'
end
