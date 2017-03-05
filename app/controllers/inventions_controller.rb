class InventionsController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        inventions = Invention.all
        render :json => inventions
      end
    end
  end
end
