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

  def update
    invention = Invention.find(params[:id])
    # Only updating materials for the purposes of this exercise
    materials = params[:data][:materials].map { |material_h|
      Material.find_or_initialize_by(material_h.permit(:name))
    }
    invention.materials = materials
    invention.save!
  end
end
