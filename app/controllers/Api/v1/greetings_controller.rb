class Api::V1::GreetingsController < ApplicationController
  def index
    random = Random.new
    limit = Greeting.all.length
    @greeting = Greeting.find(random.rand(1..limit)).description || "No greetings found"
    render json: @greeting
  end
end
