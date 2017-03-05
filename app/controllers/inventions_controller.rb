class InventionsController < ApplicationController
  PAYLOAD_ITEMS_LIMIT = 100

  def index
    respond_to do |format|
      format.html
      format.json do
        inventions = Invention.limit(PAYLOAD_ITEMS_LIMIT).includes(:bits, :materials)
        render :json => inventions, include: [:bits, :materials]
      end
    end
  end
end
