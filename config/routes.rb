Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :therapists do
    resources :appointments
  end

  resources :users do
    resources :appointments
  end

  post '/login', :to => 'users#login'
end
