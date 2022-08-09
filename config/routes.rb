# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :, defaults: { format: 'json'} do
    get 'greetings', to: 'greetings#index'
  end  

  get '*page', to: 'static#index', constraints: -> (req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
