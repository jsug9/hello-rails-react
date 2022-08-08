class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      { :name => 'thing 1',
        :guid => '0415f8a5-f9b7-4d8e-b4b6-ea7a4a32a9b6',
      }
    ] }.to_json
  end
end
