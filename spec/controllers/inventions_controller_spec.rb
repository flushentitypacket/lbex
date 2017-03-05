require 'rails_helper'

RSpec.describe InventionsController, type: :controller do
  describe 'GET #index' do
    context 'html' do
      it 'returns http success' do
        get :index
        expect(response).to have_http_status(:success)
      end
    end

    context 'json' do
      it 'returns http success' do
        get :index, { format: :json }
        expect(response).to have_http_status(:success)
      end

      it 'returns inventions serialized as json' do
        title = 'maikoolInventshin'
        Invention.new(title: title).save!
        get :index, { format: :json }
        parsed = JSON.parse(response.body)
        expect(parsed.first['title']).to eq(title)
      end
    end
  end
end
