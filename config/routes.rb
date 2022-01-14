Rails.application.routes.draw do
  resources :child_chores
  resources :chores
  resources :rewards
  resources :children
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
